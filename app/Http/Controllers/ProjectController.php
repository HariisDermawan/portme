<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Projects/Index', [
            'projects' => Project::query()
                ->orderByDesc('created_at')
                ->get([
                    'id',
                    'title',
                    'slug',
                    'category',
                    'thumbnail',
                    'description',
                    'technologies',
                    'demo_url',
                    'github_url',
                    'created_at',
                ]),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Projects/Create');
    }

    public function edit(Project $project): Response
    {
        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project,
        ]);
    }

    public function delete(Project $project): Response
    {
        return Inertia::render('Admin/Projects/Delete', [
            'project' => $project,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $project = new Project;
        $project->fill($this->validated($request));
        $project->save();

        return redirect()->route('admin.projects.index')
            ->with('success', 'Project berhasil ditambahkan.');
    }

    public function update(Request $request, Project $project): RedirectResponse
    {
        $project->update($this->validated($request, $project));

        return redirect()->route('admin.projects.index')
            ->with('success', 'Project berhasil diperbarui.');
    }

    public function destroy(Project $project): RedirectResponse
    {
        $project->delete();

        return redirect()->route('admin.projects.index')
            ->with('success', 'Project berhasil dihapus.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request, ?Project $project = null): array
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255'],
            'category' => ['nullable', 'string', 'max:255'],
            'thumbnail' => ['nullable', 'image', 'max:4096'],
            'description' => ['nullable', 'string'],
            'technologies' => ['nullable', 'array'],
            'technologies.*' => ['string', 'max:50'],
            'demo_url' => ['nullable', 'url', 'max:255'],
            'github_url' => ['nullable', 'url', 'max:255'],
        ]);

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = Storage::disk('public')->url(
                $request->file('thumbnail')->store('projects', 'public'),
            );
        } else {
            unset($validated['thumbnail']);
        }

        $validated['slug'] = $this->uniqueSlug(
            (string) (($validated['slug'] ?? '') ?: $validated['title']),
            $project,
        );

        return $validated;
    }

    private function uniqueSlug(string $value, ?Project $project = null): string
    {
        $base = Str::slug($value);
        $base = $base !== '' ? $base : Str::random(8);
        $slug = $base;
        $counter = 1;

        while ($this->slugExists($slug, $project)) {
            $slug = $base.'-'.$counter++;
        }

        return $slug;
    }

    private function slugExists(string $slug, ?Project $project = null): bool
    {
        return Project::query()
            ->where('slug', $slug)
            ->when(
                $project !== null,
                fn ($query) => $query->whereKeyNot($project->getKey()),
            )
            ->exists();
    }
}
