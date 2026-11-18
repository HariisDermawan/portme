import admin from '@/routes/admin';
import DeletePage from '../components/DeletePage';
import type { Experience } from '../types';

export default function ExperienceDelete({
    experience,
}: {
    experience: Experience;
}) {
    return (
        <DeletePage
            active="experience"
            title="Delete Experience"
            description="Konfirmasi penghapusan pengalaman."
            heading={`Hapus pengalaman di "${experience.company}"?`}
            warning="Data pengalaman ini akan dihapus permanen. Tindakan ini tidak bisa dibatalkan."
            cancelHref={admin.experiences.index.url()}
            deleteUrl={admin.experiences.destroy.url(experience.id)}
            deleteLabel="Delete Experience"
            details={
                <>
                    <p className="font-semibold text-white">
                        {experience.position}
                    </p>
                    <p className="mt-0.5 text-gray-500">
                        {experience.company}
                        {experience.location ? ` · ${experience.location}` : ''}
                    </p>
                </>
            }
        />
    );
}
