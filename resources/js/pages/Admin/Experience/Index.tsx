import { Link } from '@inertiajs/react';
import { FaBriefcase, FaPlus } from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import {
    DeleteButton,
    EditButton,
    EmptyState,
    PanelHeader,
    formatDateId,
    formatDuration,
} from '../components/ui';
import type { Experience } from '../types';

export default function ExperienceIndex({
    experiences,
}: {
    experiences: Experience[];
}) {
    return (
        <AdminLayout active="experience">
            <section className="rounded-2xl border border-white/10 bg-[#111111]">
                <PanelHeader
                    title="Experience"
                    description={`${experiences.length} pengalaman tersimpan`}
                    action={
                        <Link
                            href={admin.experiences.create.url()}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                        >
                            <FaPlus size={11} />
                            New Experience
                        </Link>
                    }
                />

                {experiences.length === 0 ? (
                    <EmptyState
                        icon={FaBriefcase}
                        title="Belum ada pengalaman"
                        description="Tambahkan pengalaman kerja pertama kamu."
                    />
                ) : (
                    <ul className="divide-y divide-white/5">
                        {experiences.map((experience) => (
                            <li
                                key={experience.id}
                                className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:justify-between"
                            >
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-white">
                                        {experience.position}
                                    </p>
                                    <p className="mt-0.5 text-xs text-gray-500">
                                        {experience.company}
                                        {experience.location
                                            ? ` · ${experience.location}`
                                            : ''}
                                    </p>
                                    <p className="mt-1 flex flex-wrap items-center gap-x-2 text-[10px] text-gray-600">
                                        <span>
                                            {formatDateId(
                                                experience.start_date,
                                            ) || '-'}{' '}
                                            -{' '}
                                            {experience.is_current ||
                                            !experience.end_date
                                                ? 'Sekarang'
                                                : formatDateId(
                                                      experience.end_date,
                                                  ) || '-'}
                                        </span>
                                        {formatDuration(
                                            experience.start_date,
                                            experience.end_date,
                                            experience.is_current ||
                                                !experience.end_date,
                                        ) ? (
                                            <span className="text-orange-400/80">
                                                ·{' '}
                                                {formatDuration(
                                                    experience.start_date,
                                                    experience.end_date,
                                                    experience.is_current ||
                                                        !experience.end_date,
                                                )}
                                            </span>
                                        ) : null}
                                    </p>
                                </div>

                                <div className="flex shrink-0 items-center gap-2">
                                    {experience.is_current && (
                                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold tracking-wide text-emerald-400 uppercase">
                                            Current
                                        </span>
                                    )}
                                    <EditButton
                                        href={admin.experiences.edit.url(
                                            experience.id,
                                        )}
                                    />
                                    <DeleteButton
                                        href={admin.experiences.delete.url(
                                            experience.id,
                                        )}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </AdminLayout>
    );
}
