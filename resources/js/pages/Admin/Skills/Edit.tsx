import admin from '@/routes/admin';
import FormPage from '../components/FormPage';
import type { Skill } from '../types';
import SkillForm from './Form';

export default function SkillsEdit({ skill }: { skill: Skill }) {
    return (
        <FormPage
            active="skills"
            title="Edit Skill"
            description={`Perbarui skill "${skill.name}".`}
            backHref={admin.skills.index.url()}
            backLabel="Back to Skills"
        >
            <SkillForm skill={skill} />
        </FormPage>
    );
}
