<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ActivityLogController extends Controller
{
    public function index(): Response
    {
        $logs = ActivityLog::query()
            ->with('user:id,name')
            ->latest('visited_at')
            ->paginate(25)
            ->withQueryString()
            ->through(fn (ActivityLog $log): array => [
                'id' => $log->id,
                'ip_address' => $log->ip_address,
                'method' => $log->method,
                'path' => $log->path,
                'user_agent' => $log->user_agent,
                'referer' => $log->referer,
                'visited_at' => $log->visited_at?->toISOString(),
                'user' => $log->user === null ? null : [
                    'id' => $log->user->id,
                    'name' => $log->user->name,
                ],
            ]);

        return Inertia::render('Admin/ActivityLog/Index', [
            'logs' => $logs,
            'stats' => [
                'today' => ActivityLog::query()->whereDate('visited_at', today())->count(),
                'uniqueVisitorsToday' => ActivityLog::query()
                    ->whereDate('visited_at', today())
                    ->distinct('ip_address')
                    ->count('ip_address'),
                'onlineNow' => ActivityLog::query()
                    ->where('visited_at', '>=', now()->subMinutes(5))
                    ->distinct('ip_address')
                    ->count('ip_address'),
                'total' => ActivityLog::query()->count(),
            ],
        ]);
    }

    public function destroy(): RedirectResponse
    {
        ActivityLog::query()->delete();

        return redirect()->route('admin.logs.index')
            ->with('success', 'Activity log berhasil dibersihkan.');
    }
}
