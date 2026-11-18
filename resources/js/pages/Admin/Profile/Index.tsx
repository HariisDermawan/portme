import { Link } from '@inertiajs/react';
import {
    FaEnvelope,
    FaLocationDot,
    FaPen,
    FaPhone,
    FaUser,
} from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import { PanelHeader, primaryButton, secondaryButton } from '../components/ui';
import type { Profile } from '../types';

export default function ProfileIndex({ profile }: { profile: Profile | null }) {
    return (
        <AdminLayout active="profile">
            <section className="rounded-2xl border border-white/10 bg-[#111111]">
                <PanelHeader
                    title="Profile"
                    description="Informasi ini tampil di halaman about dan contact"
                    action={
                        profile ? (
                            <Link
                                href={admin.profile.edit.url()}
                                className={secondaryButton}
                            >
                                <FaPen size={11} />
                                Edit Profile
                            </Link>
                        ) : null
                    }
                />

                {!profile ? (
                    <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400">
                            <FaUser size={18} />
                        </span>
                        <p className="mt-4 text-sm font-semibold text-white">
                            Profil belum diisi
                        </p>
                        <p className="mt-1 max-w-sm text-xs leading-5 text-gray-500">
                            Lengkapi nama, profesi, dan kontak kamu agar tampil
                            di halaman about dan contact.
                        </p>
                        <Link
                            href={admin.profile.edit.url()}
                            className={`${primaryButton} mt-5`}
                        >
                            <FaPen size={11} />
                            Lengkapi Profile
                        </Link>
                    </div>
                ) : (
                    <div className="p-5">
                        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                            {profile.photo ? (
                                <img
                                    src={profile.photo}
                                    alt={profile.name}
                                    className="h-20 w-20 rounded-full object-cover"
                                />
                            ) : (
                                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-2xl font-bold text-orange-400">
                                    {profile.name.charAt(0).toUpperCase()}
                                </span>
                            )}

                            <div className="min-w-0">
                                <p className="text-base font-bold text-white">
                                    {profile.name || 'Belum diisi'}
                                </p>
                                <p className="text-xs font-semibold text-orange-400">
                                    {profile.profession || '-'}
                                </p>
                                <p className="mt-2 max-w-xl text-xs leading-5 text-gray-500">
                                    {profile.short_description ||
                                        'Belum ada deskripsi profil.'}
                                </p>

                                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <FaEnvelope size={10} />
                                        {profile.email || '-'}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <FaPhone size={10} />
                                        {profile.phone || '-'}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <FaLocationDot size={10} />
                                        {profile.location || '-'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </AdminLayout>
    );
}
