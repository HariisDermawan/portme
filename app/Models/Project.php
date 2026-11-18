<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'category',
        'thumbnail',
        'description',
        'technologies',
        'demo_url',
        'github_url',
    ];

    protected function casts(): array
    {
        return [
            'technologies' => 'array',
        ];
    }
}
