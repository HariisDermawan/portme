<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ExperienceController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Experience/Index', [
            'experiences' => Experience::query()
                ->orderByDesc('start_date')
                ->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Experience/Create');
    }

    public function edit(Experience $experience): Response
    {
        return Inertia::render('Admin/Experience/Edit', [
            'experience' => $experience,
        ]);
    }

    public function delete(Experience $experience): Response
    {
        return Inertia::render('Admin/Experience/Delete', [
            'experience' => $experience,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $experience = new Experience;
        $experience->fill($this->validated($request));
        $experience->save();

        return redirect()->route('admin.experiences.index')
            ->with('success', 'Pengalaman berhasil ditambahkan.');
    }

    public function update(Request $request, Experience $experience): RedirectResponse
    {
        $experience->update($this->validated($request));

        return redirect()->route('admin.experiences.index')
            ->with('success', 'Pengalaman berhasil diperbarui.');
    }

    public function destroy(Experience $experience): RedirectResponse
    {
        $experience->delete();

        return redirect()->route('admin.experiences.index')
            ->with('success', 'Pengalaman berhasil dihapus.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request): array
    {
        $validated = $request->validate([
            'company' => ['required', 'string', 'max:255'],
            'position' => ['required', 'string', 'max:255'],
            'employment_type' => ['nullable', 'string', 'max:255'],
            'location' => ['nullable', 'string', 'max:255'],
            'start_date' => ['nullable', 'date'],
            'end_date' => ['nullable', 'date', 'after_or_equal:start_date'],
            'is_current' => ['boolean'],
            'description' => ['nullable', 'string'],
        ]);

        if ((bool) ($validated['is_current'] ?? false)) {
            $validated['end_date'] = null;
        }

        return $validated;
    }
}
