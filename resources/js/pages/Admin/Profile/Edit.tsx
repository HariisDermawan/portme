import { Link, useForm } from '@inertiajs/react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { FaUpload } from 'react-icons/fa6';
import { compressImage } from '@/lib/compressImage';
import admin from '@/routes/admin';
import FormPage from '../components/FormPage';
import {
    Field,
    TextArea,
    TextInput,
    primaryButton,
    secondaryButton,
} from '../components/ui';
import type { Profile } from '../types';

type ProfileForm = {
    name: string;
    profession: string;
    photo: File | null;
    email: string;
    phone: string;
    location: string;
    short_description: string;
    github_url: string;
    linkedin_url: string;
    instagram_url: string;
    website_url: string;
};

const valuesFrom = (profile: Profile | null): ProfileForm => ({
    name: profile?.name ?? '',
    profession: profile?.profession ?? '',
    photo: null,
    email: profile?.email ?? '',
    phone: profile?.phone ?? '',
    location: profile?.location ?? '',
    short_description: profile?.short_description ?? '',
    github_url: profile?.github_url ?? '',
    linkedin_url: profile?.linkedin_url ?? '',
    instagram_url: profile?.instagram_url ?? '',
    website_url: profile?.website_url ?? '',
});

export default function ProfileEdit({ profile }: { profile: Profile | null }) {
    const form = useForm<ProfileForm>(valuesFrom(profile));
    const [photoPreview, setPhotoPreview] = useState<string | null>(
        profile?.photo ?? null,
    );

    const handlePhotoChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const compressed = await compressImage(file, 900);
        form.setData('photo', compressed);
        setPhotoPreview(URL.createObjectURL(compressed));
    };

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        form.transform((data) => {
            const payload: Record<string, unknown> = { ...data };

            if (!payload.photo) {
                delete payload.photo;
            }

            return payload;
        });

        form.put(admin.profile.update.url(), { preserveScroll: true });
    };

    return (
        <FormPage
            active="profile"
            title="Edit Profile"
            description="Perbarui informasi profil kamu."
            backHref={admin.profile.index.url()}
            backLabel="Back to Profile"
        >
            <form onSubmit={submit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Name" error={form.errors.name}>
                        <TextInput
                            value={form.data.name}
                            onChange={(event) =>
                                form.setData('name', event.target.value)
                            }
                        />
                    </Field>

                    <Field label="Profession" error={form.errors.profession}>
                        <TextInput
                            value={form.data.profession}
                            onChange={(event) =>
                                form.setData('profession', event.target.value)
                            }
                            placeholder="Web Developer"
                        />
                    </Field>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Email" error={form.errors.email}>
                        <TextInput
                            type="email"
                            value={form.data.email}
                            onChange={(event) =>
                                form.setData('email', event.target.value)
                            }
                        />
                    </Field>

                    <Field label="Phone" error={form.errors.phone}>
                        <TextInput
                            value={form.data.phone}
                            onChange={(event) =>
                                form.setData('phone', event.target.value)
                            }
                        />
                    </Field>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Location" error={form.errors.location}>
                        <TextInput
                            value={form.data.location}
                            onChange={(event) =>
                                form.setData('location', event.target.value)
                            }
                        />
                    </Field>

                    <Field label="Hero Photo" error={form.errors.photo}>
                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b0b0b] p-3">
                            {photoPreview ? (
                                <img
                                    src={photoPreview}
                                    alt="Preview foto profil"
                                    className="h-14 w-14 shrink-0 rounded-full object-cover"
                                />
                            ) : (
                                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400">
                                    <FaUpload size={14} />
                                </span>
                            )}

                            <div className="min-w-0">
                                <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-gray-300 transition hover:border-orange-500 hover:text-orange-400">
                                    <FaUpload size={10} />
                                    Pilih Foto
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        className="hidden"
                                    />
                                </label>
                                <p className="mt-1 text-[10px] text-gray-600">
                                    JPG, PNG, atau WEBP. Otomatis dikompres.
                                </p>
                            </div>
                        </div>
                    </Field>
                </div>

                <Field
                    label="Short Description"
                    error={form.errors.short_description}
                >
                    <TextArea
                        value={form.data.short_description}
                        onChange={(event) =>
                            form.setData(
                                'short_description',
                                event.target.value,
                            )
                        }
                        placeholder="Deskripsi singkat tentang kamu"
                    />
                </Field>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="GitHub URL" error={form.errors.github_url}>
                        <TextInput
                            value={form.data.github_url}
                            onChange={(event) =>
                                form.setData('github_url', event.target.value)
                            }
                        />
                    </Field>

                    <Field
                        label="LinkedIn URL"
                        error={form.errors.linkedin_url}
                    >
                        <TextInput
                            value={form.data.linkedin_url}
                            onChange={(event) =>
                                form.setData('linkedin_url', event.target.value)
                            }
                        />
                    </Field>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field
                        label="Instagram URL"
                        error={form.errors.instagram_url}
                    >
                        <TextInput
                            value={form.data.instagram_url}
                            onChange={(event) =>
                                form.setData(
                                    'instagram_url',
                                    event.target.value,
                                )
                            }
                        />
                    </Field>

                    <Field label="Website URL" error={form.errors.website_url}>
                        <TextInput
                            value={form.data.website_url}
                            onChange={(event) =>
                                form.setData('website_url', event.target.value)
                            }
                        />
                    </Field>
                </div>

                <div className="flex items-center justify-end gap-2 border-t border-white/10 pt-4">
                    <Link
                        href={admin.profile.index.url()}
                        className={secondaryButton}
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={form.processing}
                        className={primaryButton}
                    >
                        {form.processing ? 'Menyimpan...' : 'Simpan Profile'}
                    </button>
                </div>
            </form>
        </FormPage>
    );
}
