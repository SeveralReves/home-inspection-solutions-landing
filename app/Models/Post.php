<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'category',
        'published_at',
        'cover',
        'content',
    ];

    protected $casts = [
        'content' => 'array',       // Eloquent convertirá JSON ↔ array
        'published_at' => 'datetime',
    ];
}
