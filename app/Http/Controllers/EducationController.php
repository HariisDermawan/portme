<?php

namespace App\Http\Controllers;

use App\Models\Education;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EducationController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Education/Index', [
            'educations' => Education::query()
                ->orderByDesc('start_year')
                ->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Education/Create');
    }

    public function edit(Education $education): Response
    {
        return Inertia::render('Admin/Education/Edit', [
            'education' => $education,
        ]);
    }

    public function delete(Education $education): Response
    {
        return Inertia::render('Admin/Education/Delete', [
            'education' => $education,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $education = new Education;
        $education->fill($this->validated($request));
        $education->save();

        return redirect()->route('admin.educations.index')
            ->with('success', 'Pendidikan berhasil ditambahkan.');
    }

    public function update(Request $request, Education $education): RedirectResponse
    {
        $education->update($this->validated($request));

        return redirect()->route('admin.educations.index')
            ->with('success', 'Pendidikan berhasil diperbarui.');
    }

    public function destroy(Education $education): RedirectResponse
    {
        $education->delete();

        return redirect()->route('admin.educations.index')
            ->with('success', 'Pendidikan berhasil dihapus.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request): array
    {
        return $request->validate([
            'institution' => ['required', 'string', 'max:255'],
            'degree' => ['nullable', 'string', 'max:255'],
            'major' => ['nullable', 'string', 'max:255'],
            'start_year' => ['nullable', 'integer', 'between:1900,2100'],
            'end_year' => ['nullable', 'integer', 'between:1900,2100', 'gte:start_year'],
            'description' => ['nullable', 'string'],
        ]);
    }
}
