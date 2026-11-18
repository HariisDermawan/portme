import { Link, usePage } from '@inertiajs/react';
import {
    FaArrowUpRightFromSquare,
    FaBriefcase,
    FaClock,
    FaEnvelope,
    FaFolderOpen,
    FaLayerGroup,
} from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import { EmptyState, PanelHeader, formatDate } from '../components/ui';
import type { Message, Project, Stats } from '../types';

export default function DashboardIndex({
    stats,
    recentMessages,
    recentProjects,
}: {
    stats: Stats;
    recentMessages: Message[];
    recentProjects: Project[];
}) {
    const { auth } = usePage().props;

    const statCards = [
        {
            label: 'Total Projects',
            value: stats.projects,
            hint: 'Semua project',
            icon: FaFolderOpen,
            accent: 'border-orange-500/20 bg-orange-500/10 text-orange-400',
        },
        {
            label: 'Unread Messages',
            value: stats.unreadMessages,
            hint: `${stats.messages} total messages`,
            icon: FaEnvelope,
            accent: 'border-sky-500/20 bg-sky-500/10 text-sky-400',
        },
        {
            label: 'Skills',
            value: stats.skills,
            hint: 'Across all categories',
            icon: FaLayerGroup,
            accent: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
        },
        {
            label: 'Experience',
            value: stats.experiences,
            hint: `${stats.educations} education entries`,
            icon: FaBriefcase,
            accent: 'border-violet-500/20 bg-violet-500/10 text-violet-400',
        },
    ];

    return (
        <AdminLayout active="overview">
            <section>
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
                    <div>
                        <h2 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
                            Welcome back,{' '}
                            <span className="text-orange-500">
                                {auth.user.name.split(' ')[0]}
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {statCards.map((card) => (
                        <article
                            key={card.label}
                            className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:-translate-y-0.5 hover:border-white/20"
                        >
                            <div className="flex items-start justify-between">
                                <span
                                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${card.accent}`}
                                >
                                    <card.icon size={18} />
                                </span>

                                <span className="text-[10px] font-semibold tracking-[0.18em] text-gray-600 uppercase">
                                    {card.label}
                                </span>
                            </div>

                            <p className="mt-5 font-heading text-3xl font-extrabold text-white">
                                {card.value}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                                {card.hint}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-6">
                    <div>
                        <div className="rounded-2xl border border-white/10 bg-[#111111]">
                            <PanelHeader
                                title="Recent Messages"
                                description={`${stats.unreadMessages} unread of ${stats.messages} messages`}
                                action={
                                    <Link
                                        href={admin.messages.index.url()}
                                        className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-[11px] font-semibold text-gray-400 transition hover:border-orange-500 hover:text-orange-400"
                                    >
                                        View all
                                        <FaArrowUpRightFromSquare size={10} />
                                    </Link>
                                }
                            />

                            {recentMessages.length === 0 ? (
                                <EmptyState
                                    icon={FaEnvelope}
                                    title="Belum ada pesan"
                                    description="Pesan dari form contact akan muncul di sini."
                                />
                            ) : (
                                <ul className="divide-y divide-white/5">
                                    {recentMessages.map((message) => (
                                        <li
                                            key={message.id}
                                            className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-start sm:justify-between"
                                        >
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2">
                                                    {!message.is_read && (
                                                        <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                                                    )}
                                                    <p className="truncate text-sm font-semibold text-white">
                                                        {message.subject ??
                                                            '(No subject)'}
                                                    </p>
                                                </div>
                                                <p className="mt-1 truncate text-xs text-gray-500">
                                                    {message.name} ·{' '}
                                                    {message.email}
                                                </p>
                                                <p className="mt-1.5 line-clamp-1 text-xs text-gray-400">
                                                    {message.message}
                                                </p>
                                            </div>

                                            <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                                                <span
                                                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                                                        message.is_read
                                                            ? 'bg-white/5 text-gray-500'
                                                            : 'bg-orange-500/10 text-orange-400'
                                                    }`}
                                                >
                                                    {message.is_read
                                                        ? 'Read'
                                                        : 'Unread'}
                                                </span>
                                                <span className="flex items-center gap-1 text-[10px] text-gray-600">
                                                    <FaClock size={9} />
                                                    {formatDate(
                                                        message.created_at,
                                                    )}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-[#111111]">
                            <PanelHeader
                                title="Recent Projects"
                                description={`${stats.projects} projects`}
                                action={
                                    <Link
                                        href={admin.projects.index.url()}
                                        className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-[11px] font-semibold text-gray-400 transition hover:border-orange-500 hover:text-orange-400"
                                    >
                                        Manage
                                        <FaArrowUpRightFromSquare size={10} />
                                    </Link>
                                }
                            />

                            {recentProjects.length === 0 ? (
                                <EmptyState
                                    icon={FaFolderOpen}
                                    title="Belum ada project"
                                    description="Project yang kamu tambahkan akan muncul di sini."
                                />
                            ) : (
                                <ul className="divide-y divide-white/5">
                                    {recentProjects.map((project) => (
                                        <li
                                            key={project.id}
                                            className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                                        >
                                            <div className="min-w-0">
                                                <p className="truncate text-sm font-semibold text-white">
                                                    {project.title}
                                                </p>
                                                <p className="mt-0.5 text-xs text-gray-500">
                                                    {project.category ??
                                                        'Uncategorized'}{' '}
                                                    ·{' '}
                                                    {formatDate(
                                                        project.created_at,
                                                    )}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
}
