<?php

namespace App\Services;

use SendGrid\Mail\Mail;
use Illuminate\Support\Facades\Log;

class SendGridService
{
     public static function sendLead(array $data): bool
    {
        $apiKey    = config('services.sendgrid.api_key');
        $fromEmail = config('services.sendgrid.from_email');
        $fromName  = config('services.sendgrid.from_name');
        $toEmail   = config('services.sendgrid.to_email');

        if (!$apiKey) {
            Log::error('SendGrid: API key is missing');
            return false;
        }

        $email = new Mail();
        $email->setFrom($fromEmail, $fromName);
        $email->setSubject('🔧 New Contact from iHome Handyman');
        $email->addTo($toEmail, 'iHome Handyman');

        $body = "
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> {$data['name']}</p>
            <p><strong>Email:</strong> {$data['email']}</p>
            <p><strong>Phone:</strong> {$data['phone']}</p>
            <p><strong>Service Type:</strong> " . ($data['serviceType'] ?? '') . "</p>
            <p><strong>Message:</strong><br>{$data['message']}</p>
        ";

        $email->addContent("text/html", $body);

        $sendgrid = new \SendGrid($apiKey);

        try {
            $response = $sendgrid->send($email);

            Log::info('SendGrid status: '.$response->statusCode());
            Log::info('SendGrid body: '.$response->body());

            return $response->statusCode() === 202;
        } catch (\Exception $e) {
            Log::error("SendGrid error: " . $e->getMessage());
            return false;
        }
    }
}
