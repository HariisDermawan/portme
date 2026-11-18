import { Link } from '@inertiajs/react';
import { FaArrowLeft } from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import { PageHeader, secondaryButton } from '../components/ui';
import type { Skill } from '../types';
import SkillForm from './Form';

export default function SkillsEdit({ skill }: { skill: Skill }) {
    return (
        <AdminLayout active="skills">
            <div className="mx-auto max-w-3xl">
                <PageHeader
                    title="Edit Skill"
                    description={`Perbarui skill "${skill.name}".`}
                    action={
                        <Link
                            href={admin.skills.index.url()}
                            className={secondaryButton}
                        >
                            <FaArrowLeft size={11} />
                            Back to Skills
                        </Link>
                    }
                />

                <div className="mt-6 rounded-2xl border border-white/10 bg-[#111111] p-5">
                    <SkillForm skill={skill} />
                </div>
            </div>
        </AdminLayout>
    );
}
