import { Link, router } from '@inertiajs/react';
import { FaEye, FaTrash } from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import {
    EmptyState,
    PanelHeader,
    dangerButton,
    formatDateTime,
} from '../components/ui';
import type { ActivityLog } from '../types';
import type { Paginated } from '@/types/pagination';

function describeDevice(userAgent: string | null): string {
    if (!userAgent) {
        return 'Tidak diketahui';
    }

    const browser = /Edg\//.test(userAgent)
        ? 'Edge'
        : /OPR\//.test(userAgent)
          ? 'Opera'
          : /Chrome\//.test(userAgent)
            ? 'Chrome'
            : /Firefox\//.test(userAgent)
              ? 'Firefox'
              : /Safari\//.test(userAgent)
                ? 'Safari'
                : 'Browser';

    const platform = /Android/.test(userAgent)
        ? 'Android'
        : /iPhone|iPad|iPod/.test(userAgent)
          ? 'iOS'
          : /Windows/.test(userAgent)
            ? 'Windows'
            : /Mac OS X/.test(userAgent)
              ? 'macOS'
              : /Linux/.test(userAgent)
                ? 'Linux'
                : 'Lainnya';

    return `${browser} · ${platform}`;
}

export default function ActivityLogIndex({
    logs,
}: {
    logs: Paginated<ActivityLog>;
}) {
    const previousPage = logs.links[0]?.url;
    const nextPage = logs.links[logs.links.length - 1]?.url;

    const clearLogs = () => {
        if (!window.confirm('Hapus semua activity log?')) {
            return;
        }

        router.delete(admin.logs.destroy.url(), { preserveScroll: true });
    };

    return (
        <AdminLayout active="logs">
            <section className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-[#111111]">
                    <PanelHeader
                        title="Activity Log"
                        description={`${logs.total} kunjungan tercatat`}
                        action={
                            <button
                                type="button"
                                onClick={clearLogs}
                                className={dangerButton}
                            >
                                <FaTrash size={11} />
                                Bersihkan Log
                            </button>
                        }
                    />

                    {logs.data.length === 0 ? (
                        <EmptyState
                            icon={FaEye}
                            title="Belum ada kunjungan"
                            description="Aktivitas pengunjung akan muncul di sini."
                        />
                    ) : (
                        <>
                            <ul className="divide-y divide-white/5">
                                {logs.data.map((log) => (
                                    <li
                                        key={log.id}
                                        className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-semibold text-white">
                                                {log.path}
                                            </p>
                                            <p className="mt-0.5 text-xs text-gray-500">
                                                {log.visited_at
                                                    ? formatDateTime(
                                                          log.visited_at,
                                                      )
                                                    : '-'}
                                                {' · '}
                                                {log.user?.name ?? 'Guest'}
                                            </p>
                                        </div>

                                        <div className="flex shrink-0 flex-wrap items-center gap-2 text-[11px]">
                                            <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-gray-300">
                                                {log.ip_address ?? '-'}
                                            </span>
                                            <span className="rounded-md bg-white/5 px-2 py-1 text-gray-500">
                                                {describeDevice(log.user_agent)}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 px-5 py-3 text-xs text-gray-500 sm:flex-row">
                                <span>
                                    Menampilkan {logs.from ?? 0}-{logs.to ?? 0}{' '}
                                    dari {logs.total}
                                </span>

                                <div className="flex items-center gap-2">
                                    {previousPage ? (
                                        <Link
                                            href={previousPage}
                                            preserveScroll
                                            className="rounded-lg border border-white/10 px-3 py-1.5 font-semibold text-gray-400 transition hover:border-orange-500 hover:text-orange-400"
                                        >
                                            Sebelumnya
                                        </Link>
                                    ) : null}
                                    <span className="px-2">
                                        {logs.current_page} / {logs.last_page}
                                    </span>
                                    {nextPage ? (
                                        <Link
                                            href={nextPage}
                                            preserveScroll
                                            className="rounded-lg border border-white/10 px-3 py-1.5 font-semibold text-gray-400 transition hover:border-orange-500 hover:text-orange-400"
                                        >
                                            Berikutnya
                                        </Link>
                                    ) : null}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </AdminLayout>
    );
}
