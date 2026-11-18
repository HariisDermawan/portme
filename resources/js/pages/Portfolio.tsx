import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { FaEye, FaGithub, FaUpRightFromSquare, FaXmark } from 'react-icons/fa6';
import type {
    Paginated,
    PublicProfile,
    PublicProject,
} from '@/types/public';

function formatPageLabel(label: string): string {
    return label
        .replace('&laquo;', '«')
        .replace('&raquo;', '»')
        .replace('Previous', 'Prev');
}

function ProjectThumbnail({ project }: { project: PublicProject }) {
    if (project.thumbnail) {
        return (
            <img
                src={project.thumbnail}
                alt={project.title}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
        );
    }

    return (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500/20 via-[#181818] to-[#181818]">
            <span className="text-5xl font-extrabold text-orange-500/70">
                {project.title.charAt(0).toUpperCase()}
            </span>
        </div>
    );
}

export default function Portfolio({
    profile,
    projects,
}: {
    profile: PublicProfile | null;
    projects: Paginated<PublicProject>;
}) {
    const [selectedProject, setSelectedProject] =
        useState<PublicProject | null>(null);

    useEffect(() => {
        if (!selectedProject) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedProject(null);
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [selectedProject]);

    return (
        <>
            <Navbar profile={profile} />

            <main className="relative min-h-screen overflow-hidden bg-[#0b0b0b] px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-28 lg:px-16">
                <div className="pointer-events-none absolute top-0 -right-24 h-[650px] w-[650px] opacity-35 sm:-right-10 md:right-0 md:opacity-50">
                    <div
                        className="absolute inset-0 md:hidden"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle, rgba(249,115,22,0.4) 1px, transparent 1.2px)',
                            backgroundSize: '18px 18px',
                            clipPath:
                                'path("M 650 0 L 650 650 C 500 620 420 550 330 430 C 240 310 130 220 0 200 L 0 0 Z")',
                            maskImage:
                                'linear-gradient(to left, black 0%, black 65%, transparent 100%)',
                            WebkitMaskImage:
                                'linear-gradient(to left, black 0%, black 65%, transparent 100%)',
                        }}
                    />

                    <div
                        className="absolute inset-0 hidden md:block"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle, rgba(249,115,22,0.85) 1.4px, transparent 1.5px)',
                            backgroundSize: '16px 16px',
                            clipPath:
                                'path("M 650 0 L 650 650 C 500 620 420 550 330 430 C 240 310 130 220 0 200 L 0 0 Z")',
                            maskImage:
                                'linear-gradient(to left, black 0%, black 65%, transparent 100%)',
                            WebkitMaskImage:
                                'linear-gradient(to left, black 0%, black 65%, transparent 100%)',
                        }}
                    />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <Reveal className="mb-12">
                        <p className="mb-3 text-sm font-bold tracking-[0.3em] text-orange-500 uppercase">
                            My Recent Work
                        </p>

                        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                            My{' '}
                            <span className="text-orange-500">Portfolio.</span>
                        </h1>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
                            Beberapa project yang pernah saya kerjakan dalam
                            pengembangan website dan aplikasi.
                        </p>
                    </Reveal>

                    <Reveal
                        delay={100}
                        className="mb-8 flex items-center justify-between border-b border-white/10 pb-5"
                    >
                        <h2 className="text-sm font-semibold text-white">
                            All Projects
                        </h2>

                        <span className="text-xs text-gray-500">
                            {projects.total} Projects
                        </span>
                    </Reveal>

                    {projects.total === 0 ? (
                        <div className="rounded-2xl border border-white/10 bg-[#111111] px-6 py-16 text-center text-sm text-gray-500">
                            Belum ada project untuk ditampilkan.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {projects.data.map((project, index) => (
                                <Reveal
                                    key={project.id}
                                    delay={index * 100}
                                    className="h-full"
                                >
                                    <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40">
                                        <div className="relative aspect-[16/10] overflow-hidden bg-[#181818]">
                                            <ProjectThumbnail
                                                project={project}
                                            />

                                            {project.category && (
                                                <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] font-semibold text-orange-400 backdrop-blur-md">
                                                    {project.category}
                                                </span>
                                            )}
                                        </div>

                                        <div className="p-5">
                                            <h3 className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-orange-500">
                                                {project.title}
                                            </h3>

                                            <p className="min-h-[60px] text-xs leading-6 text-gray-400">
                                                {project.description}
                                            </p>

                                            {(project.technologies ?? [])
                                                .length > 0 && (
                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    {(
                                                        project.technologies ??
                                                        []
                                                    ).map((item) => (
                                                        <span
                                                            key={item}
                                                            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-medium text-gray-400"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                                                <span className="text-xs font-medium text-gray-500">
                                                    Project Details
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedProject(
                                                            project,
                                                        )
                                                    }
                                                    className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-gray-400 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                                                >
                                                    <FaEye size={14} />
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    )}

                    {projects.last_page > 1 && (
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                            {projects.links.map((link, index) => {
                                const label = formatPageLabel(link.label);

                                if (!link.url) {
                                    return (
                                        <span
                                            key={index}
                                            className="cursor-not-allowed rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-gray-600"
                                        >
                                            {label}
                                        </span>
                                    );
                                }

                                return (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        preserveScroll
                                        className={`rounded-lg border px-4 py-2 text-xs font-semibold transition ${
                                            link.active
                                                ? 'border-orange-500 bg-orange-500 text-white'
                                                : 'border-white/10 text-gray-400 hover:border-orange-500 hover:text-orange-500'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </main>

            {selectedProject && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#111111] p-7 shadow-2xl md:p-9"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close modal"
                            className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                        >
                            <FaXmark size={15} />
                        </button>

                        <p className="mb-3 text-xs font-bold tracking-[0.25em] text-orange-500 uppercase">
                            Project Overview
                        </p>

                        <h2 className="pr-8 text-2xl font-extrabold text-white">
                            {selectedProject.title}
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-gray-400">
                            {selectedProject.description}
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                            {selectedProject.demo_url && (
                                <a
                                    href={selectedProject.demo_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-orange-600"
                                >
                                    Live Demo
                                    <FaUpRightFromSquare size={12} />
                                </a>
                            )}

                            {selectedProject.github_url && (
                                <a
                                    href={selectedProject.github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-xs font-semibold text-gray-300 transition hover:border-orange-500 hover:text-orange-500"
                                >
                                    <FaGithub size={14} />
                                    Source Code
                                </a>
                            )}

                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                className="ml-auto rounded-lg border border-white/10 px-5 py-2.5 text-xs font-semibold text-gray-400 transition hover:border-white/30 hover:text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer profile={profile} />
        </>
    );
}
