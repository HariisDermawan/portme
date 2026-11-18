import admin from '@/routes/admin';
import FormPage from '../components/FormPage';
import SkillForm from './Form';

export default function SkillsCreate() {
    return (
        <FormPage
            active="skills"
            title="New Skill"
            description="Tambahkan skill baru ke portfolio kamu."
            backHref={admin.skills.index.url()}
            backLabel="Back to Skills"
        >
            <SkillForm />
        </FormPage>
    );
}
