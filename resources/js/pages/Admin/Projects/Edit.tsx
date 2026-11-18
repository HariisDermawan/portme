import admin from '@/routes/admin';
import FormPage from '../components/FormPage';
import type { Project } from '../types';
import ProjectForm from './Form';

export default function ProjectsEdit({ project }: { project: Project }) {
    return (
        <FormPage
            active="projects"
            title="Edit Project"
            description={`Perbarui project "${project.title}".`}
            backHref={admin.projects.index.url()}
            backLabel="Back to Projects"
        >
            <ProjectForm project={project} />
        </FormPage>
    );
}
