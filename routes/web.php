<?php

use App\Http\Controllers\ActivityLogController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('about', [PageController::class, 'about'])->name('about');
Route::get('portfolio', [PageController::class, 'portfolio'])->name('portfolio');
Route::get('contact', [PageController::class, 'contact'])->name('contact');
Route::post('contact', [MessageController::class, 'store'])->name('contact.store');

Route::middleware('guest')->group(function () {
    Route::inertia('login', 'Auth/Login')->name('login');
    Route::post('login', [AuthController::class, 'store'])->name('login.store');
});

Route::post('logout', [AuthController::class, 'destroy'])->middleware('auth')->name('logout');

Route::middleware('auth')->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('messages', [MessageController::class, 'index'])->name('messages.index');
        Route::get('messages/{message}/delete', [MessageController::class, 'delete'])->name('messages.delete');
        Route::patch('messages/{message}/read', [MessageController::class, 'markAsRead'])->name('messages.read');
        Route::patch('messages/{message}/unread', [MessageController::class, 'markAsUnread'])->name('messages.unread');
        Route::delete('messages/{message}', [MessageController::class, 'destroy'])->name('messages.destroy');

        Route::get('activity-logs', [ActivityLogController::class, 'index'])->name('logs.index');
        Route::delete('activity-logs', [ActivityLogController::class, 'destroy'])->name('logs.destroy');

        Route::get('projects', [ProjectController::class, 'index'])->name('projects.index');
        Route::get('projects/create', [ProjectController::class, 'create'])->name('projects.create');
        Route::post('projects', [ProjectController::class, 'store'])->name('projects.store');
        Route::get('projects/{project}/edit', [ProjectController::class, 'edit'])->name('projects.edit');
        Route::put('projects/{project}', [ProjectController::class, 'update'])->name('projects.update');
        Route::get('projects/{project}/delete', [ProjectController::class, 'delete'])->name('projects.delete');
        Route::delete('projects/{project}', [ProjectController::class, 'destroy'])->name('projects.destroy');

        Route::get('skills', [SkillController::class, 'index'])->name('skills.index');
        Route::get('skills/create', [SkillController::class, 'create'])->name('skills.create');
        Route::post('skills', [SkillController::class, 'store'])->name('skills.store');
        Route::put('skills/about', [SkillController::class, 'updateAbout'])->name('skills.about.update');
        Route::get('skills/{skill}/edit', [SkillController::class, 'edit'])->name('skills.edit');
        Route::put('skills/{skill}', [SkillController::class, 'update'])->name('skills.update');
        Route::get('skills/{skill}/delete', [SkillController::class, 'delete'])->name('skills.delete');
        Route::delete('skills/{skill}', [SkillController::class, 'destroy'])->name('skills.destroy');

        Route::get('experiences', [ExperienceController::class, 'index'])->name('experiences.index');
        Route::get('experiences/create', [ExperienceController::class, 'create'])->name('experiences.create');
        Route::post('experiences', [ExperienceController::class, 'store'])->name('experiences.store');
        Route::get('experiences/{experience}/edit', [ExperienceController::class, 'edit'])->name('experiences.edit');
        Route::put('experiences/{experience}', [ExperienceController::class, 'update'])->name('experiences.update');
        Route::get('experiences/{experience}/delete', [ExperienceController::class, 'delete'])->name('experiences.delete');
        Route::delete('experiences/{experience}', [ExperienceController::class, 'destroy'])->name('experiences.destroy');

        Route::get('educations', [EducationController::class, 'index'])->name('educations.index');
        Route::get('educations/create', [EducationController::class, 'create'])->name('educations.create');
        Route::post('educations', [EducationController::class, 'store'])->name('educations.store');
        Route::get('educations/{education}/edit', [EducationController::class, 'edit'])->name('educations.edit');
        Route::put('educations/{education}', [EducationController::class, 'update'])->name('educations.update');
        Route::get('educations/{education}/delete', [EducationController::class, 'delete'])->name('educations.delete');
        Route::delete('educations/{education}', [EducationController::class, 'destroy'])->name('educations.destroy');

        Route::get('profile', [ProfileController::class, 'index'])->name('profile.index');
        Route::get('profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::put('profile', [ProfileController::class, 'update'])->name('profile.update');
    });
});
