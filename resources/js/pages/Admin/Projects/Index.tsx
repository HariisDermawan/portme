import { Link } from '@inertiajs/react';
import { FaFolderOpen, FaPlus } from 'react-icons/fa6';
import ProjectThumbnail from '@/components/ProjectThumbnail';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import {
    DeleteButton,
    EditButton,
    EmptyState,
    PanelHeader,
} from '../components/ui';
import type { Project } from '../types';

export default function ProjectsIndex({ projects }: { projects: Project[] }) {
    return (
        <AdminLayout active="projects">
            <section className="rounded-2xl border border-white/10 bg-[#111111]">
                <PanelHeader
                    title="Projects"
                    description={`${projects.length} project tersimpan`}
                    action={
                        <Link
                            href={admin.projects.create.url()}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                        >
                            <FaPlus size={11} />
                            New Project
                        </Link>
                    }
                />

                {projects.length === 0 ? (
                    <EmptyState
                        icon={FaFolderOpen}
                        title="Belum ada project"
                        description="Tambahkan project pertama kamu lewat tombol di atas."
                    />
                ) : (
                    <ul className="divide-y divide-white/5">
                        {projects.map((project) => (
                            <li
                                key={project.id}
                                className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div className="flex min-w-0 items-center gap-4">
                                    <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#191919]">
                                        <ProjectThumbnail
                                            project={project}
                                            imageClassName="object-top"
                                            titleClassName="text-lg"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <p className="truncate text-sm font-semibold text-white">
                                                {project.title}
                                            </p>
                                        </div>

                                        <p className="mt-1 truncate text-xs text-gray-500">
                                            {project.category ??
                                                'Uncategorized'}{' '}
                                            · /{project.slug}
                                        </p>

                                        {project.technologies &&
                                            project.technologies.length > 0 && (
                                                <div className="mt-2 flex flex-wrap gap-1.5">
                                                    {project.technologies.map(
                                                        (technology) => (
                                                            <span
                                                                key={technology}
                                                                className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-gray-400"
                                                            >
                                                                {technology}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            )}
                                    </div>
                                </div>

                                <div className="flex shrink-0 items-center gap-2">
                                    <EditButton
                                        href={admin.projects.edit.url(
                                            project.id,
                                        )}
                                    />
                                    <DeleteButton
                                        href={admin.projects.delete.url(
                                            project.id,
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
