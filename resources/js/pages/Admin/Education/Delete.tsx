import admin from '@/routes/admin';
import DeletePage from '../components/DeletePage';
import type { Education } from '../types';

export default function EducationDelete({
    education,
}: {
    education: Education;
}) {
    return (
        <DeletePage
            active="education"
            title="Delete Education"
            description="Konfirmasi penghapusan pendidikan."
            heading={`Hapus pendidikan di "${education.institution}"?`}
            warning="Data pendidikan ini akan dihapus permanen. Tindakan ini tidak bisa dibatalkan."
            cancelHref={admin.educations.index.url()}
            deleteUrl={admin.educations.destroy.url(education.id)}
            deleteLabel="Delete Education"
            details={
                <>
                    <p className="font-semibold text-white">
                        {education.institution}
                    </p>
                    <p className="mt-0.5 text-gray-500">
                        {[education.degree, education.major]
                            .filter(Boolean)
                            .join(' · ') || 'Tanpa keterangan'}
                    </p>
                </>
            }
        />
    );
}
