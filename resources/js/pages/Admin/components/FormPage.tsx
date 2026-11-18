import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import AdminLayout from './AdminLayout';
import { PageHeader, secondaryButton } from './ui';
import type { AdminNavKey } from '../types';

export default function FormPage({
    active,
    title,
    description,
    backHref,
    backLabel,
    children,
}: {
    active: AdminNavKey;
    title: string;
    description: string;
    backHref: string;
    backLabel: string;
    children: ReactNode;
}) {
    return (
        <AdminLayout active={active}>
            <div className="mx-auto max-w-3xl">
                <PageHeader
                    title={title}
                    description={description}
                    action={
                        <Link href={backHref} className={secondaryButton}>
                            <FaArrowLeft size={11} />
                            {backLabel}
                        </Link>
                    }
                />

                <div className="mt-6 rounded-2xl border border-white/10 bg-[#111111] p-5">
                    {children}
                </div>
            </div>
        </AdminLayout>
    );
}
