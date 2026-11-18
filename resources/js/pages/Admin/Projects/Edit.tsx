import { Link } from '@inertiajs/react';
import { FaArrowLeft } from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import { PageHeader, secondaryButton } from '../components/ui';
import type { Project } from '../types';
import ProjectForm from './Form';

export default function ProjectsEdit({ project }: { project: Project }) {
    return (
        <AdminLayout active="projects">
            <div className="mx-auto max-w-3xl">
                <PageHeader
                    title="Edit Project"
                    description={`Perbarui project "${project.title}".`}
                    action={
                        <Link
                            href={admin.projects.index.url()}
                            className={secondaryButton}
                        >
                            <FaArrowLeft size={11} />
                            Back to Projects
                        </Link>
                    }
                />

                <div className="mt-6 rounded-2xl border border-white/10 bg-[#111111] p-5">
                    <ProjectForm project={project} />
                </div>
            </div>
        </AdminLayout>
    );
}
