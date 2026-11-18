<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'name',
        'profession',
        'photo',
        'about_photo',
        'email',
        'phone',
        'location',
        'short_description',
        'github_url',
        'linkedin_url',
        'instagram_url',
        'website_url',
    ];
}
