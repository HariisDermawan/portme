import admin from '@/routes/admin';
import FormPage from '../components/FormPage';
import type { Experience } from '../types';
import ExperienceForm from './Form';

export default function ExperienceEdit({
    experience,
}: {
    experience: Experience;
}) {
    return (
        <FormPage
            active="experience"
            title="Edit Experience"
            description={`Perbarui pengalaman di "${experience.company}".`}
            backHref={admin.experiences.index.url()}
            backLabel="Back to Experience"
        >
            <ExperienceForm experience={experience} />
        </FormPage>
    );
}
