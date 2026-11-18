import { Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import admin from '@/routes/admin';
import {
    Field,
    Switch,
    TextArea,
    TextInput,
    formatDateId,
    formatDuration,
    primaryButton,
    secondaryButton,
    toDateInput,
} from '../components/ui';
import type { Experience } from '../types';

export type ExperienceForm = {
    company: string;
    position: string;
    employment_type: string;
    location: string;
    start_date: string;
    end_date: string;
    is_current: boolean;
    description: string;
};

const valuesFrom = (experience?: Experience): ExperienceForm => ({
    company: experience?.company ?? '',
    position: experience?.position ?? '',
    employment_type: experience?.employment_type ?? '',
    location: experience?.location ?? '',
    start_date: toDateInput(experience?.start_date ?? null),
    end_date: toDateInput(experience?.end_date ?? null),
    is_current: experience?.is_current ?? false,
    description: experience?.description ?? '',
});

export default function ExperienceForm({
    experience,
}: {
    experience?: Experience;
}) {
    const form = useForm<ExperienceForm>(valuesFrom(experience));

    const isOngoing = form.data.is_current || !form.data.end_date;

    const duration = formatDuration(
        form.data.start_date || null,
        isOngoing ? null : form.data.end_date || null,
        isOngoing,
    );

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (experience) {
            form.put(admin.experiences.update.url(experience.id), {
                preserveScroll: true,
            });
        } else {
            form.post(admin.experiences.store.url(), { preserveScroll: true });
        }
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <Field label="Company" error={form.errors.company}>
                <TextInput
                    value={form.data.company}
                    onChange={(event) =>
                        form.setData('company', event.target.value)
                    }
                    placeholder="Nama perusahaan"
                />
            </Field>

            <Field label="Position" error={form.errors.position}>
                <TextInput
                    value={form.data.position}
                    onChange={(event) =>
                        form.setData('position', event.target.value)
                    }
                    placeholder="Web Developer"
                />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                    label="Employment Type"
                    error={form.errors.employment_type}
                >
                    <TextInput
                        value={form.data.employment_type}
                        onChange={(event) =>
                            form.setData('employment_type', event.target.value)
                        }
                        placeholder="Full-time"
                    />
                </Field>

                <Field label="Location" error={form.errors.location}>
                    <TextInput
                        value={form.data.location}
                        onChange={(event) =>
                            form.setData('location', event.target.value)
                        }
                        placeholder="Jakarta"
                    />
                </Field>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Start Date" error={form.errors.start_date}>
                    <TextInput
                        type="date"
                        value={form.data.start_date}
                        onChange={(event) =>
                            form.setData('start_date', event.target.value)
                        }
                    />
                </Field>

                <Field label="End Date" error={form.errors.end_date}>
                    <TextInput
                        type="date"
                        value={form.data.end_date}
                        disabled={form.data.is_current}
                        onChange={(event) =>
                            form.setData('end_date', event.target.value)
                        }
                    />
                </Field>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-white/10 bg-[#0b0b0b] px-3.5 py-2.5 text-xs">
                <span className="text-gray-500">Durasi otomatis</span>
                <span className="font-semibold text-orange-400">
                    {duration ?? '-'}
                </span>
                {form.data.start_date ? (
                    <span className="text-gray-600">
                        {formatDateId(form.data.start_date)} -{' '}
                        {isOngoing
                            ? 'Sekarang'
                            : formatDateId(form.data.end_date) || '-'}
                    </span>
                ) : null}
                {duration && isOngoing ? (
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold tracking-wide text-emerald-400 uppercase">
                        Berjalan
                    </span>
                ) : null}
            </div>

            <Switch
                checked={form.data.is_current}
                onChange={(checked) => form.setData('is_current', checked)}
                label="Masih bekerja di sini"
            />

            <Field label="Description" error={form.errors.description}>
                <TextArea
                    value={form.data.description}
                    onChange={(event) =>
                        form.setData('description', event.target.value)
                    }
                    placeholder="Deskripsi pekerjaan"
                />
            </Field>

            <div className="flex items-center justify-end gap-2 border-t border-white/10 pt-4">
                <Link
                    href={admin.experiences.index.url()}
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
                        : experience
                          ? 'Update Experience'
                          : 'Simpan Experience'}
                </button>
            </div>
        </form>
    );
}
