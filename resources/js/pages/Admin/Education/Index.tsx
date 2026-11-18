import { Link } from '@inertiajs/react';
import { FaGraduationCap, FaPlus } from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import {
    DeleteButton,
    EditButton,
    EmptyState,
    PanelHeader,
} from '../components/ui';
import type { Education } from '../types';

export default function EducationIndex({
    educations,
}: {
    educations: Education[];
}) {
    return (
        <AdminLayout active="education">
            <section className="rounded-2xl border border-white/10 bg-[#111111]">
                <PanelHeader
                    title="Education"
                    description={`${educations.length} pendidikan tersimpan`}
                    action={
                        <Link
                            href={admin.educations.create.url()}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                        >
                            <FaPlus size={11} />
                            New Education
                        </Link>
                    }
                />

                {educations.length === 0 ? (
                    <EmptyState
                        icon={FaGraduationCap}
                        title="Belum ada pendidikan"
                        description="Tambahkan riwayat pendidikan pertama kamu."
                    />
                ) : (
                    <ul className="divide-y divide-white/5">
                        {educations.map((education) => (
                            <li
                                key={education.id}
                                className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:justify-between"
                            >
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-white">
                                        {education.institution}
                                    </p>
                                    <p className="mt-0.5 text-xs text-gray-500">
                                        {[education.degree, education.major]
                                            .filter(Boolean)
                                            .join(' · ') || 'Tanpa keterangan'}
                                    </p>
                                    <p className="mt-1 text-[10px] text-gray-600">
                                        {education.start_year ?? '-'} -{' '}
                                        {education.end_year ?? '-'}
                                    </p>
                                </div>

                                <div className="flex shrink-0 items-center gap-2">
                                    <EditButton
                                        href={admin.educations.edit.url(
                                            education.id,
                                        )}
                                    />
                                    <DeleteButton
                                        href={admin.educations.delete.url(
                                            education.id,
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
