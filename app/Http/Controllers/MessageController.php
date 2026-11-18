<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MessageController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'subject' => ['nullable', 'string', 'max:255'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        Message::query()->create($validated);

        return back()->with('success', 'Pesan berhasil dikirim. Terima kasih!');
    }

    public function index(): Response
    {
        return Inertia::render('Admin/Messages/Index', [
            'messages' => Message::query()
                ->latest()
                ->get(['id', 'name', 'email', 'subject', 'message', 'is_read', 'read_at', 'created_at']),
        ]);
    }

    public function delete(Message $message): Response
    {
        return Inertia::render('Admin/Messages/Delete', [
            'message' => $message,
        ]);
    }

    public function markAsRead(Message $message): RedirectResponse
    {
        $message->update([
            'is_read' => true,
            'read_at' => now(),
        ]);

        return redirect()->route('admin.messages.index')
            ->with('success', 'Pesan ditandai sudah dibaca.');
    }

    public function markAsUnread(Message $message): RedirectResponse
    {
        $message->update([
            'is_read' => false,
            'read_at' => null,
        ]);

        return redirect()->route('admin.messages.index')
            ->with('success', 'Pesan ditandai belum dibaca.');
    }

    public function destroy(Message $message): RedirectResponse
    {
        $message->delete();

        return redirect()->route('admin.messages.index')
            ->with('success', 'Pesan berhasil dihapus.');
    }
}
