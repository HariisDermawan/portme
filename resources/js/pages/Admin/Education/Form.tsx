import { Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import admin from '@/routes/admin';
import {
    Field,
    TextArea,
    TextInput,
    primaryButton,
    secondaryButton,
} from '../components/ui';
import type { Education } from '../types';

export type EducationForm = {
    institution: string;
    degree: string;
    major: string;
    start_year: string;
    end_year: string;
    description: string;
};

const valuesFrom = (education?: Education): EducationForm => ({
    institution: education?.institution ?? '',
    degree: education?.degree ?? '',
    major: education?.major ?? '',
    start_year: String(education?.start_year ?? ''),
    end_year: String(education?.end_year ?? ''),
    description: education?.description ?? '',
});

export default function EducationForm({
    education,
}: {
    education?: Education;
}) {
    const form = useForm<EducationForm>(valuesFrom(education));

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (education) {
            form.put(admin.educations.update.url(education.id), {
                preserveScroll: true,
            });
        } else {
            form.post(admin.educations.store.url(), { preserveScroll: true });
        }
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <Field label="Institution" error={form.errors.institution}>
                <TextInput
                    value={form.data.institution}
                    onChange={(event) =>
                        form.setData('institution', event.target.value)
                    }
                    placeholder="Nama kampus / sekolah"
                />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Degree" error={form.errors.degree}>
                    <TextInput
                        value={form.data.degree}
                        onChange={(event) =>
                            form.setData('degree', event.target.value)
                        }
                        placeholder="S1"
                    />
                </Field>

                <Field label="Major" error={form.errors.major}>
                    <TextInput
                        value={form.data.major}
                        onChange={(event) =>
                            form.setData('major', event.target.value)
                        }
                        placeholder="Teknik Informatika"
                    />
                </Field>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Start Year" error={form.errors.start_year}>
                    <TextInput
                        type="number"
                        min={1900}
                        max={2100}
                        value={form.data.start_year}
                        onChange={(event) =>
                            form.setData('start_year', event.target.value)
                        }
                        placeholder="2020"
                    />
                </Field>

                <Field label="End Year" error={form.errors.end_year}>
                    <TextInput
                        type="number"
                        min={1900}
                        max={2100}
                        value={form.data.end_year}
                        onChange={(event) =>
                            form.setData('end_year', event.target.value)
                        }
                        placeholder="2024"
                    />
                </Field>
            </div>

            <Field label="Description" error={form.errors.description}>
                <TextArea
                    value={form.data.description}
                    onChange={(event) =>
                        form.setData('description', event.target.value)
                    }
                    placeholder="Keterangan tambahan"
                />
            </Field>

            <div className="flex items-center justify-end gap-2 border-t border-white/10 pt-4">
                <Link
                    href={admin.educations.index.url()}
                    className={secondaryButton}
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={form.processing}
                    className={primaryButton}
                >
                    {form.processing
                        ? 'Menyimpan...'
                        : education
                          ? 'Update Education'
                          : 'Simpan Education'}
                </button>
            </div>
        </form>
    );
}
