import { router } from '@inertiajs/react';
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import {
    DeleteButton,
    EmptyState,
    PanelHeader,
    formatDate,
} from '../components/ui';
import type { Message } from '../types';

export default function MessagesIndex({ messages }: { messages: Message[] }) {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const markAsRead = (message: Message) => {
        router.patch(
            admin.messages.read.url(message.id),
            {},
            { preserveScroll: true },
        );
    };

    const markAsUnread = (message: Message) => {
        router.patch(
            admin.messages.unread.url(message.id),
            {},
            { preserveScroll: true },
        );
    };

    return (
        <AdminLayout active="messages">
            <section className="rounded-2xl border border-white/10 bg-[#111111]">
                <PanelHeader
                    title="Inbox"
                    description={`${messages.filter((message) => !message.is_read).length} unread of ${messages.length} messages`}
                />

                {messages.length === 0 ? (
                    <EmptyState
                        icon={FaEnvelope}
                        title="Belum ada pesan"
                        description="Pesan dari form contact akan muncul di sini."
                    />
                ) : (
                    <ul className="divide-y divide-white/5">
                        {messages.map((message) => (
                            <li key={message.id} className="px-5 py-4">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                            {!message.is_read && (
                                                <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                                            )}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setExpandedId(
                                                        expandedId ===
                                                            message.id
                                                            ? null
                                                            : message.id,
                                                    )
                                                }
                                                className="truncate text-left text-sm font-semibold text-white transition hover:text-orange-400"
                                            >
                                                {message.subject ??
                                                    '(No subject)'}
                                            </button>
                                        </div>

                                        <p className="mt-1 truncate text-xs text-gray-500">
                                            {message.name} · {message.email} ·{' '}
                                            {formatDate(message.created_at)}
                                        </p>

                                        <p
                                            className={cn(
                                                'mt-2 text-xs leading-6 text-gray-400',
                                                expandedId === message.id
                                                    ? ''
                                                    : 'line-clamp-2',
                                            )}
                                        >
                                            {message.message}
                                        </p>
                                    </div>

                                    <div className="flex shrink-0 items-center gap-2">
                                        <span
                                            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                                                message.is_read
                                                    ? 'bg-white/5 text-gray-500'
                                                    : 'bg-orange-500/10 text-orange-400'
                                            }`}
                                        >
                                            {message.is_read
                                                ? 'Read'
                                                : 'Unread'}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                message.is_read
                                                    ? markAsUnread(message)
                                                    : markAsRead(message)
                                            }
                                            className="rounded-lg border border-white/10 px-2.5 py-1.5 text-[10px] font-semibold text-gray-400 transition hover:border-orange-500 hover:text-orange-400"
                                        >
                                            {message.is_read
                                                ? 'Mark unread'
                                                : 'Mark read'}
                                        </button>

                                        <DeleteButton
                                            href={admin.messages.delete.url(
                                                message.id,
                                            )}
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </AdminLayout>
    );
}
