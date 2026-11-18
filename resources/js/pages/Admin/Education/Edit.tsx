import admin from '@/routes/admin';
import FormPage from '../components/FormPage';
import type { Education } from '../types';
import EducationForm from './Form';

export default function EducationEdit({ education }: { education: Education }) {
    return (
        <FormPage
            active="education"
            title="Edit Education"
            description={`Perbarui pendidikan di "${education.institution}".`}
            backHref={admin.educations.index.url()}
            backLabel="Back to Education"
        >
            <EducationForm education={education} />
        </FormPage>
    );
}
