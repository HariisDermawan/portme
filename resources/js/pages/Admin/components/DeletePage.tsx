import { Link, router } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { FaTriangleExclamation } from 'react-icons/fa6';
import AdminLayout from './AdminLayout';
import { PageHeader, dangerButton, secondaryButton } from './ui';
import type { AdminNavKey } from '../types';

export default function DeletePage({
    active,
    title,
    description,
    heading,
    warning,
    details,
    cancelHref,
    deleteUrl,
    deleteLabel,
}: {
    active: AdminNavKey;
    title: string;
    description: string;
    heading: string;
    warning: string;
    details: ReactNode;
    cancelHref: string;
    deleteUrl: string;
    deleteLabel: string;
}) {
    return (
        <AdminLayout active={active}>
            <div className="mx-auto max-w-xl">
                <PageHeader title={title} description={description} />

                <div className="mt-6 rounded-2xl border border-red-500/20 bg-[#111111] p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-red-400">
                        <FaTriangleExclamation size={16} />
                    </span>

                    <h3 className="mt-4 text-base font-bold text-white">
                        {heading}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                        {warning}
                    </p>

                    <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs">
                        {details}
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-2">
                        <Link href={cancelHref} className={secondaryButton}>
                            Cancel
                        </Link>
                        <button
                            type="button"
                            onClick={() =>
                                router.delete(deleteUrl, {
                                    preserveScroll: true,
                                })
                            }
                            className={dangerButton}
                        >
                            {deleteLabel}
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
