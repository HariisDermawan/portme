<?php

use App\Models\Message;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('stores a contact message', function () {
    $response = $this->post(route('contact.store'), [
        'name' => 'Budi',
        'email' => 'budi@example.com',
        'subject' => 'Kerja sama',
        'message' => 'Saya tertarik bekerja sama.',
    ]);

    $response->assertRedirect();

    $message = Message::query()->first();

    expect($message)
        ->not->toBeNull()
        ->and($message->name)->toBe('Budi')
        ->and($message->email)->toBe('budi@example.com')
        ->and($message->subject)->toBe('Kerja sama')
        ->and($message->is_read)->toBeFalse();
});

test('validates the contact message payload', function () {
    $response = $this->post(route('contact.store'), []);

    $response->assertSessionHasErrors(['name', 'email', 'message']);
    expect(Message::query()->count())->toBe(0);
});
