import admin from '@/routes/admin';
import FormPage from '../components/FormPage';
import ExperienceForm from './Form';

export default function ExperienceCreate() {
    return (
        <FormPage
            active="experience"
            title="New Experience"
            description="Tambahkan pengalaman kerja baru."
            backHref={admin.experiences.index.url()}
            backLabel="Back to Experience"
        >
            <ExperienceForm />
        </FormPage>
    );
}
