<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactFormSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Recibe los datos del form
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build
     */
    public function build()
    {
        return $this->subject('New lead from website - iHome Handyman')
                    ->markdown('emails.contact')
                    ->with('data', $this->data);
    }
}
