<?php

namespace App\Http\Controllers;

use App\Models\Education;
use App\Models\Experience;
use App\Models\Profile;
use App\Models\Project;
use App\Models\Skill;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('welcome', [
            'profile' => Profile::query()->first(),
            'projects' => Project::query()
                ->latest()
                ->get(),
        ]);
    }

    public function about(): Response
    {
        return Inertia::render('AboutSection', [
            'profile' => Profile::query()->first(),
            'skills' => Skill::query()
                ->where('is_visible', true)
                ->orderBy('sort_order')
                ->orderBy('name')
                ->get(),
            'educations' => Education::query()
                ->orderByDesc('start_year')
                ->get(),
            'experiences' => Experience::query()
                ->orderByDesc('start_date')
                ->get(),
        ]);
    }

    public function portfolio(): Response
    {
        return Inertia::render('Portfolio', [
            'profile' => Profile::query()->first(),
            'projects' => Project::query()
                ->latest()
                ->paginate(6)
                ->withQueryString(),
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('Contact', [
            'profile' => Profile::query()->first(),
        ]);
    }
}
