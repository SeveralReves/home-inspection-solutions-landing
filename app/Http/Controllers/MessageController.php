<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use App\Services\SendGridService;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormSubmitted;

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
            'captcha'     => 'nullable' // ya lo validaste en front
        ]);

       $msg = Message::create($request->all());


        // 2. Enviar correo por SendGrid API (no SMTP)
        $sent = SendGridService::sendLead($validated);

        return response()->json(['message' => 'Message received successfully!', 'email_sent' => $sent,], 201);
    }
}
