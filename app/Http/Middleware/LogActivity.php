<?php

namespace App\Http\Middleware;

use App\Models\ActivityLog;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class LogActivity
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): Response  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        if ($this->shouldLog($request, $response)) {
            $this->record($request);
        }

        return $response;
    }

    private function shouldLog(Request $request, Response $response): bool
    {
        if (! $request->isMethod('GET') || $response->getStatusCode() >= 400) {
            return false;
        }

        if ($request->is('up', 'storage/*', 'build/*', '_boost/*', 'boost/*')) {
            return false;
        }

        if ($request->headers->has('X-Inertia-Partial-Data')) {
            return false;
        }

        $routeName = $request->route()?->getName();

        return $routeName === null || ! str_starts_with($routeName, 'boost.');
    }

    private function record(Request $request): void
    {
        try {
            ActivityLog::query()->create([
                'user_id' => $request->user()?->getKey(),
                'ip_address' => $request->ip(),
                'method' => $request->method(),
                'path' => '/'.ltrim($request->path(), '/'),
                'user_agent' => $request->userAgent(),
                'referer' => $request->headers->get('referer'),
                'visited_at' => now(),
            ]);
        } catch (Throwable) {
            // Never let logging break the request.
        }
    }
}
