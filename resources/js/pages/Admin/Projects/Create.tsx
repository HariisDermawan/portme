import admin from '@/routes/admin';
import FormPage from '../components/FormPage';
import ProjectForm from './Form';

export default function ProjectsCreate() {
    return (
        <FormPage
            active="projects"
            title="New Project"
            description="Tambahkan project baru ke portfolio kamu."
            backHref={admin.projects.index.url()}
            backLabel="Back to Projects"
        >
            <ProjectForm />
        </FormPage>
    );
}
