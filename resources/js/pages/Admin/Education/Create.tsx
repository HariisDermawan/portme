import admin from '@/routes/admin';
import FormPage from '../components/FormPage';
import EducationForm from './Form';

export default function EducationCreate() {
    return (
        <FormPage
            active="education"
            title="New Education"
            description="Tambahkan riwayat pendidikan baru."
            backHref={admin.educations.index.url()}
            backLabel="Back to Education"
        >
            <EducationForm />
        </FormPage>
    );
}
