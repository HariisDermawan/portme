<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use RuntimeException;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $email = Str::lower(trim((string) config('app.admin.email')));
        $password = (string) config('app.admin.password');
        $name = trim((string) config('app.admin.name')) ?: 'Administrator';

        if ($email === '' || $password === '') {
            throw new RuntimeException('ADMIN_EMAIL dan ADMIN_PASSWORD wajib diisi di file .env.');
        }

        if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            throw new RuntimeException('ADMIN_EMAIL harus berupa alamat email yang valid.');
        }

        if (Str::length($password) < 8) {
            throw new RuntimeException('ADMIN_PASSWORD minimal 8 karakter.');
        }

        $admin = User::query()->updateOrCreate(
            ['email' => $email],
            ['name' => $name, 'password' => $password],
        );

        $admin->forceFill(['email_verified_at' => now()])->save();

        $this->command?->info("Admin account seeded: {$email}");
    }
}
