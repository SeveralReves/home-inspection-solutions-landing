<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use App\Services\SendGridService;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'        => 'required|string|max:255',
            'email'       => 'required|email|max:255',
            'message'     => 'required|string',
            'phone'       => 'required|string|max:50',
            'serviceType' => 'nullable|string|max:255',
            'captcha'     => 'nullable',
        ]);

        $sent = SendGridService::sendLead($validated);

        Message::create(array_merge($validated, ['email_sent' => $sent]));

        return response()->json(['message' => 'Message received successfully!', 'email_sent' => $sent], 201);
    }

    public function resend(Message $message)
    {
        $data = [
            'name'        => $message->name,
            'email'       => $message->email,
            'phone'       => $message->phone,
            'serviceType' => $message->serviceType,
            'message'     => $message->message,
        ];

        $sent = SendGridService::sendLead($data);

        if ($sent) {
            $message->update(['email_sent' => true]);
        }

        return back()->with($sent ? 'success' : 'error', $sent ? 'Email resent successfully.' : 'Failed to resend email.');
    }
}
