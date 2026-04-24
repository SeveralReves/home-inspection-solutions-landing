<?php

namespace App\Services;

use App\Mail\ContactFormSubmitted;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendGridService
{
    public static function sendLead(array $data): bool
    {
        $toEmail = config('services.sendgrid.to_email');

        try {
            Mail::to($toEmail)->send(new ContactFormSubmitted($data));
            Log::info('Mail sent successfully to ' . $toEmail);
            return true;
        } catch (\Exception $e) {
            Log::error('Mail send failed: ' . $e->getMessage());
            return false;
        }
    }
}
