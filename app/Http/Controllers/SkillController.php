<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Skill;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class SkillController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Skills/Index', [
            'profile' => Profile::query()->first(),
            'skills' => Skill::query()
                ->orderBy('sort_order')
                ->orderBy('name')
                ->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Skills/Create');
    }

    public function edit(Skill $skill): Response
    {
        return Inertia::render('Admin/Skills/Edit', [
            'skill' => $skill,
        ]);
    }

    public function delete(Skill $skill): Response
    {
        return Inertia::render('Admin/Skills/Delete', [
            'skill' => $skill,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $skill = new Skill;
        $skill->fill($this->validated($request));
        $skill->save();

        return redirect()->route('admin.skills.index')
            ->with('success', 'Skill berhasil ditambahkan.');
    }

    public function update(Request $request, Skill $skill): RedirectResponse
    {
        $skill->update($this->validated($request));

        return redirect()->route('admin.skills.index')
            ->with('success', 'Skill berhasil diperbarui.');
    }

    public function destroy(Skill $skill): RedirectResponse
    {
        $skill->delete();

        return redirect()->route('admin.skills.index')
            ->with('success', 'Skill berhasil dihapus.');
    }

    public function updateAbout(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'short_description' => ['nullable', 'string', 'max:500'],
            'about_photo' => ['nullable', 'image', 'max:4096'],
        ]);

        $profile = Profile::query()->first();

        if ($profile === null) {
            $profile = new Profile([
                'name' => $request->user()?->name ?? 'Profile',
            ]);
        }

        if ($request->hasFile('about_photo')) {
            $validated['about_photo'] = Storage::disk('public')->url(
                $request->file('about_photo')->store('profile', 'public'),
            );
        } else {
            unset($validated['about_photo']);
        }

        $profile->fill($validated)->save();

        return back()->with('success', 'About berhasil diperbarui.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'category' => ['required', 'string', 'max:255'],
            'icon' => ['nullable', 'string', 'max:255'],
            'proficiency' => ['nullable', 'integer', 'between:0,100'],
            'is_visible' => ['boolean'],
            'sort_order' => ['integer', 'min:0'],
        ]);
    }
}
