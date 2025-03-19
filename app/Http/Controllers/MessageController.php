<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
            'phone' => 'required|string',
            'serviceType' => 'string',
        ]);

        Message::create($request->all());

        return response()->json(['message' => 'Message received successfully!'], 201);
    }
}
