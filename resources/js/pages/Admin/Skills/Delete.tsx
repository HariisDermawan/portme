import admin from '@/routes/admin';
import DeletePage from '../components/DeletePage';
import type { Skill } from '../types';

export default function SkillsDelete({ skill }: { skill: Skill }) {
    return (
        <DeletePage
            active="skills"
            title="Delete Skill"
            description="Konfirmasi penghapusan skill."
            heading={`Hapus skill "${skill.name}"?`}
            warning="Skill ini akan dihapus permanen. Tindakan ini tidak bisa dibatalkan."
            cancelHref={admin.skills.index.url()}
            deleteUrl={admin.skills.destroy.url(skill.id)}
            deleteLabel="Delete Skill"
            details={
                <>
                    <p className="font-semibold text-white">{skill.name}</p>
                    <p className="mt-0.5 text-gray-500">{skill.category}</p>
                </>
            }
        />
    );
}
