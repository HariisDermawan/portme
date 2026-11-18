import admin from '@/routes/admin';
import DeletePage from '../components/DeletePage';
import { formatDate } from '../components/ui';
import type { Message } from '../types';

export default function MessagesDelete({ message }: { message: Message }) {
    return (
        <DeletePage
            active="messages"
            title="Delete Message"
            description="Konfirmasi penghapusan pesan."
            heading={`Hapus pesan dari ${message.name}?`}
            warning="Pesan ini akan dihapus permanen. Tindakan ini tidak bisa dibatalkan."
            cancelHref={admin.messages.index.url()}
            deleteUrl={admin.messages.destroy.url(message.id)}
            deleteLabel="Delete Message"
            details={
                <>
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
                </>
            }
        />
    );
}
