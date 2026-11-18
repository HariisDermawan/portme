import { Link } from '@inertiajs/react';
import { FaArrowLeft } from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import { PageHeader, secondaryButton } from '../components/ui';
import EducationForm from './Form';

export default function EducationCreate() {
    return (
        <AdminLayout active="education">
            <div className="mx-auto max-w-3xl">
                <PageHeader
                    title="New Education"
                    description="Tambahkan riwayat pendidikan baru."
                    action={
                        <Link
                            href={admin.educations.index.url()}
                            className={secondaryButton}
                        >
                            <FaArrowLeft size={11} />
                            Back to Education
                        </Link>
                    }
                />

                <div className="mt-6 rounded-2xl border border-white/10 bg-[#111111] p-5">
                    <EducationForm />
                </div>
            </div>
        </AdminLayout>
    );
}
