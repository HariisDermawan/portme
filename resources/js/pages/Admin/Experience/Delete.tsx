import { Link, router } from '@inertiajs/react';
import { FaTriangleExclamation } from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import { PageHeader, dangerButton, secondaryButton } from '../components/ui';
import type { Experience } from '../types';

export default function ExperienceDelete({
    experience,
}: {
    experience: Experience;
}) {
    const remove = () => {
        router.delete(admin.experiences.destroy.url(experience.id), {
            preserveScroll: true,
        });
    };

    return (
        <AdminLayout active="experience">
            <div className="mx-auto max-w-xl">
                <PageHeader
                    title="Delete Experience"
                    description="Konfirmasi penghapusan pengalaman."
                />

                <div className="mt-6 rounded-2xl border border-red-500/20 bg-[#111111] p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-red-400">
                        <FaTriangleExclamation size={16} />
                    </span>

                    <h3 className="mt-4 text-base font-bold text-white">
                        Hapus pengalaman di "{experience.company}"?
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                        Data pengalaman ini akan dihapus permanen. Tindakan ini
                        tidak bisa dibatalkan.
                    </p>

                    <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs">
                        <p className="font-semibold text-white">
                            {experience.position}
                        </p>
                        <p className="mt-0.5 text-gray-500">
                            {experience.company}
                            {experience.location
                                ? ` · ${experience.location}`
                                : ''}
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-2">
                        <Link
                            href={admin.experiences.index.url()}
                            className={secondaryButton}
                        >
                            Cancel
                        </Link>
                        <button
                            type="button"
                            onClick={remove}
                            className={dangerButton}
                        >
                            Delete Experience
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
