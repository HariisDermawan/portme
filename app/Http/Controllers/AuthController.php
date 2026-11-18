<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Maximum failed login attempts before the account is temporarily locked.
     */
    private const MAX_ATTEMPTS = 5;

    /**
     * Number of seconds the login lockout lasts per failed attempt.
     */
    private const DECAY_SECONDS = 60;

    /**
     * Authenticate the user and start an authenticated session.
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->merge([
            'email' => Str::lower(trim((string) $request->input('email'))),
        ]);

        $validated = $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string'],
            'remember' => ['sometimes', 'boolean'],
        ]);

        $throttleKey = $this->throttleKey((string) $validated['email'], $request);

        if (RateLimiter::tooManyAttempts($throttleKey, self::MAX_ATTEMPTS)) {
            $seconds = RateLimiter::availableIn($throttleKey);

            throw ValidationException::withMessages([
                'email' => "Too many login attempts. Please try again in {$seconds} seconds.",
            ]);
        }

        $credentials = [
            'email' => (string) $validated['email'],
            'password' => (string) $validated['password'],
        ];

        if (! Auth::attempt($credentials, $request->boolean('remember'))) {
            RateLimiter::hit($throttleKey, self::DECAY_SECONDS);

            Log::warning('Failed login attempt.', [
                'email' => $credentials['email'],
                'ip' => $request->ip(),
                'user_agent' => Str::limit((string) $request->userAgent(), 255),
            ]);

            throw ValidationException::withMessages([
                'email' => 'These credentials do not match our records.',
            ]);
        }

        RateLimiter::clear($throttleKey);

        $request->session()->regenerate();

        Log::info('User logged in.', [
            'user_id' => $request->user()?->getAuthIdentifier(),
            'ip' => $request->ip(),
        ]);

        return redirect()->intended(route('dashboard'));
    }

    /**
     * End the authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }

    /**
     * Build a unique, normalized throttle key for the login attempt.
     */
    private function throttleKey(string $email, Request $request): string
    {
        return Str::transliterate($email.'|'.$request->ip());
    }
}
