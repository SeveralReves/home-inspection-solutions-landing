<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
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

        Message::create($request->all());

        Mail::to('hinspectionsolutions@gmail.com') // <-- A dónde llega el lead
            ->send(new ContactFormSubmitted($validated));


        return response()->json(['message' => 'Message received successfully!'], 201);
    }
}
