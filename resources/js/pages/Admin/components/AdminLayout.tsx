import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState, type ReactNode } from 'react';
import type { IconType } from 'react-icons';
import {
    FaBars,
    FaBriefcase,
    FaChartPie,
    FaCircleCheck,
    FaEnvelope,
    FaEye,
    FaFolderOpen,
    FaGraduationCap,
    FaLayerGroup,
    FaRightFromBracket,
    FaUser,
    FaXmark,
} from 'react-icons/fa6';
import { dashboard, home, logout } from '@/routes';
import admin from '@/routes/admin';
import type { AdminNavKey } from '../types';

type NavItem = {
    key: AdminNavKey;
    label: string;
    icon: IconType;
    href: () => string;
};

const navGroups: Array<{ label: string; items: NavItem[] }> = [
    {
        label: 'Menu',
        items: [
            {
                key: 'overview',
                label: 'Overview',
                icon: FaChartPie,
                href: () => dashboard.url(),
            },
            {
                key: 'messages',
                label: 'Messages',
                icon: FaEnvelope,
                href: () => admin.messages.index.url(),
            },
        ],
    },
    {
        label: 'Master Data',
        items: [
            {
                key: 'projects',
                label: 'Projects',
                icon: FaFolderOpen,
                href: () => admin.projects.index.url(),
            },
            {
                key: 'skills',
                label: 'About & Skills',
                icon: FaLayerGroup,
                href: () => admin.skills.index.url(),
            },
            {
                key: 'experience',
                label: 'Experience',
                icon: FaBriefcase,
                href: () => admin.experiences.index.url(),
            },
            {
                key: 'education',
                label: 'Education',
                icon: FaGraduationCap,
                href: () => admin.educations.index.url(),
            },
        ],
    },
    {
        label: 'Akun',
        items: [
            {
                key: 'profile',
                label: 'Profile',
                icon: FaUser,
                href: () => admin.profile.index.url(),
            },
        ],
    },
    {
        label: 'Sistem',
        items: [
            {
                key: 'logs',
                label: 'Activity Log',
                icon: FaEye,
                href: () => admin.logs.index.url(),
            },
        ],
    },
];

export default function AdminLayout({
    active,
    children,
}: {
    active: AdminNavKey;
    children: ReactNode;
}) {
    const { auth, flash, adminNav } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const activeLabel =
        navGroups
            .flatMap((group) => group.items)
            .find((item) => item.key === active)?.label ?? 'Dashboard';
    const unreadMessages = adminNav?.unreadMessages ?? 0;

    const handleLogout = () => {
        router.post(logout.url(), {}, { preserveScroll: false });
    };

    return (
        <>
            <Head title={`${activeLabel} - Admin`} />

            <div className="min-h-screen bg-[#0b0b0b] text-white">
                {sidebarOpen && (
                    <button
                        type="button"
                        aria-label="Close sidebar"
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
                    />
                )}

                <aside
                    className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-[#111111] transition-transform duration-300 md:translate-x-0 ${
                        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="relative flex items-center justify-center px-6 py-6">
                        <Link
                            href={home.url()}
                            className="font-heading text-xl font-extrabold tracking-tight text-white"
                        >
                            HR's<span className="text-orange-500">.</span>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setSidebarOpen(false)}
                            aria-label="Close sidebar"
                            className="absolute right-6 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-orange-500 hover:text-white md:hidden"
                        >
                            <FaXmark size={14} />
                        </button>
                    </div>

                    <nav className="flex-1 [scrollbar-width:none] space-y-1 overflow-y-auto px-4 pb-4 [&::-webkit-scrollbar]:hidden">
                        {navGroups.map((group) => (
                            <div key={group.label}>
                                <p className="px-3 pt-4 pb-2 text-[10px] font-bold tracking-[0.25em] text-gray-600 uppercase">
                                    {group.label}
                                </p>

                                {group.items.map((item) => {
                                    const isActive = active === item.key;
                                    const badge =
                                        item.key === 'messages'
                                            ? unreadMessages
                                            : 0;

                                    return (
                                        <Link
                                            key={item.key}
                                            href={item.href()}
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                            className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                                                isActive
                                                    ? 'bg-orange-500/10 text-orange-400'
                                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                            }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span
                                                    className={`flex h-9 w-9 items-center justify-center rounded-lg border transition ${
                                                        isActive
                                                            ? 'border-orange-500/40 bg-orange-500/10 text-orange-400'
                                                            : 'border-white/10 bg-white/5 text-gray-500 group-hover:text-orange-400'
                                                    }`}
                                                >
                                                    <item.icon size={14} />
                                                </span>
                                                {item.label}
                                            </span>

                                            {badge > 0 ? (
                                                <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white">
                                                    {badge}
                                                </span>
                                            ) : null}
                                        </Link>
                                    );
                                })}
                            </div>
                        ))}
                    </nav>

                    <div className="border-t border-white/10 p-4">
                        <div className="mb-3 flex items-center gap-3 rounded-xl bg-white/5 p-3">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                                {auth.user.name.charAt(0).toUpperCase()}
                            </span>

                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-white">
                                    {auth.user.name}
                                </p>
                                <p className="truncate text-xs text-gray-500">
                                    {auth.user.email}
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-gray-400 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
                        >
                            <FaRightFromBracket size={13} />
                            Sign Out
                        </button>
                    </div>
                </aside>

                <div className="md:pl-72">
                    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0b0b0b]/80 backdrop-blur-xl">
                        <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-8">
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setSidebarOpen(true)}
                                    aria-label="Open sidebar"
                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-orange-500 hover:text-white md:hidden"
                                >
                                    <FaBars size={15} />
                                </button>

                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.25em] text-orange-500 uppercase">
                                        Admin Panel
                                    </p>
                                    <h1 className="font-heading text-lg font-extrabold text-white md:text-2xl">
                                        {activeLabel}
                                    </h1>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="hidden text-right sm:block">
                                    <span className="block text-xs font-semibold text-white">
                                        {auth.user.name}
                                    </span>
                                    <span className="block text-[11px] text-gray-500">
                                        Administrator
                                    </span>
                                </span>

                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-sm font-bold text-orange-400">
                                    {auth.user.name.charAt(0).toUpperCase()}
                                </span>
                            </div>
                        </div>
                    </header>

                    <main className="px-5 py-8 md:px-8 md:py-10">
                        {flash?.success ? (
                            <div className="mb-5 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                                <FaCircleCheck size={13} />
                                {flash.success}
                            </div>
                        ) : null}

                        {flash?.error ? (
                            <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                                {flash.error}
                            </div>
                        ) : null}

                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
