<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public array $quote) {}

    public function build()
    {
        return $this->subject('🔧 New Contact from iHome Handyman')
                    ->view('emails.lead');
    }
}
