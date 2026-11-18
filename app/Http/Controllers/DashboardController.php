<?php

namespace App\Http\Controllers;

use App\Models\Education;
use App\Models\Experience;
use App\Models\Message;
use App\Models\Project;
use App\Models\Skill;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Dashboard/Index', [
            'stats' => [
                'projects' => Project::query()->count(),
                'skills' => Skill::query()->count(),
                'experiences' => Experience::query()->count(),
                'educations' => Education::query()->count(),
                'messages' => Message::query()->count(),
                'unreadMessages' => Message::query()->where('is_read', false)->count(),
            ],
            'recentMessages' => Message::query()
                ->latest()
                ->take(6)
                ->get(['id', 'name', 'email', 'subject', 'message', 'is_read', 'read_at', 'created_at']),
            'recentProjects' => Project::query()
                ->latest()
                ->take(5)
                ->get(['id', 'title', 'slug', 'category', 'created_at']),
        ]);
    }
}
