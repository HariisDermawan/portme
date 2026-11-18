<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Profile/Index', [
            'profile' => Profile::query()->first(),
        ]);
    }

    public function edit(): Response
    {
        return Inertia::render('Admin/Profile/Edit', [
            'profile' => Profile::query()->first(),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'profession' => ['nullable', 'string', 'max:255'],
            'photo' => ['nullable', 'image', 'max:4096'],
            'about_photo' => ['nullable', 'image', 'max:4096'],
            'email' => ['nullable', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:30'],
            'location' => ['nullable', 'string', 'max:255'],
            'short_description' => ['nullable', 'string', 'max:500'],
            'github_url' => ['nullable', 'url', 'max:255'],
            'linkedin_url' => ['nullable', 'url', 'max:255'],
            'instagram_url' => ['nullable', 'url', 'max:255'],
            'website_url' => ['nullable', 'url', 'max:255'],
        ]);

        $profile = Profile::query()->first() ?? new Profile;

        if ($request->hasFile('photo')) {
            $validated['photo'] = Storage::disk('public')->url(
                $request->file('photo')->store('profile', 'public'),
            );
        } else {
            unset($validated['photo']);
        }

        if ($request->hasFile('about_photo')) {
            $validated['about_photo'] = Storage::disk('public')->url(
                $request->file('about_photo')->store('profile', 'public'),
            );
        } else {
            unset($validated['about_photo']);
        }

        $profile->fill($validated)->save();

        return redirect()->route('admin.profile.index')
            ->with('success', 'Profile berhasil diperbarui.');
    }
}
