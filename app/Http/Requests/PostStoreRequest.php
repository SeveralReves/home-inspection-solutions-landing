<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostStoreRequest extends FormRequest
{
    public function authorize(): bool { return true; }

    public function rules(): array
    {
        return [
            'title'        => ['required','string','max:255'],
            'slug'         => ['nullable','string','max:255'], // opcional, se genera si falta
            'excerpt'      => ['nullable','string'],
            'category'     => ['nullable','string','max:255'],
            'published_at' => ['nullable','date'],
            'cover'        => ['nullable','image','max:4096'],
            'content'      => ['required'], // JSON string
        ];
    }
}
