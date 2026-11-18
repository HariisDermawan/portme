import { Link, useForm } from '@inertiajs/react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { FaLayerGroup, FaPlus, FaUpload } from 'react-icons/fa6';
import admin from '@/routes/admin';
import AdminLayout from '../components/AdminLayout';
import {
    DeleteButton,
    EditButton,
    EmptyState,
    Field,
    PanelHeader,
    TextArea,
    primaryButton,
} from '../components/ui';
import type { Profile, Skill } from '../types';

type AboutForm = {
    short_description: string;
    about_photo: File | null;
};

async function compressImage(
    file: File,
    maxDimension = 1200,
    quality = 0.8,
): Promise<File> {
    if (!file.type.startsWith('image/')) {
        return file;
    }

    try {
        const bitmap = await createImageBitmap(file);
        const scale = Math.min(
            1,
            maxDimension / Math.max(bitmap.width, bitmap.height),
        );
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(bitmap.width * scale));
        canvas.height = Math.max(1, Math.round(bitmap.height * scale));

        const context = canvas.getContext('2d');

        if (!context) {
            return file;
        }

        context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        bitmap.close();

        const outputType =
            file.type === 'image/png' || file.type === 'image/webp'
                ? file.type
                : 'image/jpeg';
        const extension =
            outputType === 'image/png'
                ? 'png'
                : outputType === 'image/webp'
                  ? 'webp'
                  : 'jpg';

        const blob = await new Promise<Blob | null>((resolve) => {
            canvas.toBlob(resolve, outputType, quality);
        });

        if (!blob || blob.size >= file.size) {
            return file;
        }

        return new File(
            [blob],
            `${file.name.replace(/\.[^./\\]+$/, '')}.${extension}`,
            {
                type: outputType,
                lastModified: Date.now(),
            },
        );
    } catch {
        return file;
    }
}

export default function SkillsIndex({
    skills,
    profile,
}: {
    skills: Skill[];
    profile: Profile | null;
}) {
    const form = useForm<AboutForm>({
        short_description: profile?.short_description ?? '',
        about_photo: null,
    });
    const [aboutPhotoPreview, setAboutPhotoPreview] = useState<string | null>(
        profile?.about_photo ?? null,
    );

    const handleAboutPhotoChange = async (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const compressed = await compressImage(file);
        form.setData('about_photo', compressed);
        setAboutPhotoPreview(URL.createObjectURL(compressed));
    };

    const submitAbout = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        form.transform((data) => {
            const payload: Record<string, unknown> = { ...data };

            if (!payload.about_photo) {
                delete payload.about_photo;
            }

            return payload;
        });

        form.put(admin.skills.about.update.url(), { preserveScroll: true });
    };

    return (
        <AdminLayout active="skills">
            <div className="space-y-6">
                <section className="rounded-2xl border border-white/10 bg-[#111111]">
                    <PanelHeader
                        title="About"
                        description="Kelola foto dan deskripsi halaman About."
                    />

                    <form onSubmit={submitAbout} className="space-y-4 p-5">
                        <Field
                            label="About Description"
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
                                placeholder="Deskripsi yang tampil di halaman About"
                            />
                        </Field>

                        <Field
                            label="About Photo"
                            error={form.errors.about_photo}
                        >
                            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b0b0b] p-3">
                                {aboutPhotoPreview ? (
                                    <img
                                        src={aboutPhotoPreview}
                                        alt="Preview foto about"
                                        className="h-16 w-16 shrink-0 rounded-xl object-cover"
                                    />
                                ) : (
                                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">
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
                                            onChange={handleAboutPhotoChange}
                                            className="hidden"
                                        />
                                    </label>
                                    <p className="mt-1 text-[10px] text-gray-600">
                                        JPG, PNG, atau WEBP. Otomatis dikompres.
                                    </p>
                                </div>
                            </div>
                        </Field>

                        <div className="flex justify-end border-t border-white/10 pt-4">
                            <button
                                type="submit"
                                disabled={form.processing}
                                className={primaryButton}
                            >
                                {form.processing
                                    ? 'Menyimpan...'
                                    : 'Simpan About'}
                            </button>
                        </div>
                    </form>
                </section>

                <section className="rounded-2xl border border-white/10 bg-[#111111]">
                    <PanelHeader
                        title="Skills"
                        description={`${skills.length} skill tersimpan`}
                        action={
                            <Link
                                href={admin.skills.create.url()}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                            >
                                <FaPlus size={11} />
                                New Skill
                            </Link>
                        }
                    />

                    {skills.length === 0 ? (
                        <EmptyState
                            icon={FaLayerGroup}
                            title="Belum ada skill"
                            description="Tambahkan skill pertama kamu lewat tombol di atas."
                        />
                    ) : (
                        <ul className="divide-y divide-white/5">
                            {skills.map((skill) => (
                                <li
                                    key={skill.id}
                                    className="flex items-center justify-between gap-3 px-5 py-4"
                                >
                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <p className="truncate text-sm font-semibold text-white">
                                                {skill.name}
                                            </p>
                                            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] font-bold tracking-wide text-gray-500 uppercase">
                                                {skill.category}
                                            </span>
                                            {!skill.is_visible && (
                                                <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[9px] font-bold tracking-wide text-red-400 uppercase">
                                                    Hidden
                                                </span>
                                            )}
                                        </div>

                                        <div className="mt-2 flex items-center gap-2">
                                            <div className="h-1.5 w-32 overflow-hidden rounded-full bg-white/10">
                                                <div
                                                    className="h-full rounded-full bg-orange-500"
                                                    style={{
                                                        width: `${skill.proficiency ?? 0}%`,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-[10px] text-gray-500">
                                                {skill.proficiency ?? 0}%
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex shrink-0 items-center gap-2">
                                        <EditButton
                                            href={admin.skills.edit.url(
                                                skill.id,
                                            )}
                                        />
                                        <DeleteButton
                                            href={admin.skills.delete.url(
                                                skill.id,
                                            )}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </AdminLayout>
    );
}
