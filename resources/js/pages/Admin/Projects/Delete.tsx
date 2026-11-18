import admin from '@/routes/admin';
import DeletePage from '../components/DeletePage';
import type { Project } from '../types';

export default function ProjectsDelete({ project }: { project: Project }) {
    return (
        <DeletePage
            active="projects"
            title="Delete Project"
            description="Konfirmasi penghapusan project."
            heading={`Hapus "${project.title}"?`}
            warning="Project beserta datanya akan dihapus permanen. Tindakan ini tidak bisa dibatalkan."
            cancelHref={admin.projects.index.url()}
            deleteUrl={admin.projects.destroy.url(project.id)}
            deleteLabel="Delete Project"
            details={
                <>
                    <p className="font-semibold text-white">{project.title}</p>
                    <p className="mt-0.5 text-gray-500">
                        {project.category ?? 'Uncategorized'} · /{project.slug}
                    </p>
                </>
            }
        />
    );
}
