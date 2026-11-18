import { Link, router } from '@inertiajs/react';
import { FaTriangleExclamation } from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import {
    PageHeader,
    dangerButton,
    formatDate,
    secondaryButton,
} from '../components/ui';
import type { Message } from '../types';

export default function MessagesDelete({ message }: { message: Message }) {
    const remove = () => {
        router.delete(admin.messages.destroy.url(message.id), {
            preserveScroll: true,
        });
    };

    return (
        <AdminLayout active="messages">
            <div className="mx-auto max-w-xl">
                <PageHeader
                    title="Delete Message"
                    description="Konfirmasi penghapusan pesan."
                />

                <div className="mt-6 rounded-2xl border border-red-500/20 bg-[#111111] p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-red-400">
                        <FaTriangleExclamation size={16} />
                    </span>

                    <h3 className="mt-4 text-base font-bold text-white">
                        Hapus pesan dari {message.name}?
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                        Pesan ini akan dihapus permanen. Tindakan ini tidak bisa
                        dibatalkan.
                    </p>

                    <div className="mt-5 space-y-2 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs">
                        <p className="font-semibold text-white">
                            {message.subject ?? '(No subject)'}
                        </p>
                        <p className="text-gray-500">
                            {message.name} · {message.email} ·{' '}
                            {formatDate(message.created_at)}
                        </p>
                        <p className="line-clamp-3 leading-6 text-gray-400">
                            {message.message}
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-2">
                        <Link
                            href={admin.messages.index.url()}
                            className={secondaryButton}
                        >
                            Cancel
                        </Link>
                        <button
                            type="button"
                            onClick={remove}
                            className={dangerButton}
                        >
                            Delete Message
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
