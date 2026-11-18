import { Link } from '@inertiajs/react';
import { FaArrowLeft } from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import { PageHeader, secondaryButton } from '../components/ui';
import ExperienceForm from './Form';

export default function ExperienceCreate() {
    return (
        <AdminLayout active="experience">
            <div className="mx-auto max-w-3xl">
                <PageHeader
                    title="New Experience"
                    description="Tambahkan pengalaman kerja baru."
                    action={
                        <Link
                            href={admin.experiences.index.url()}
                            className={secondaryButton}
                        >
                            <FaArrowLeft size={11} />
                            Back to Experience
                        </Link>
                    }
                />

                <div className="mt-6 rounded-2xl border border-white/10 bg-[#111111] p-5">
                    <ExperienceForm />
                </div>
            </div>
        </AdminLayout>
    );
}
