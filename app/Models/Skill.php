<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'name',
        'category',
        'icon',
        'proficiency',
        'is_visible',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'proficiency' => 'integer',
            'is_visible' => 'boolean',
            'sort_order' => 'integer',
        ];
    }
}
