import { Link, useForm } from '@inertiajs/react';
import {
    useEffect,
    useRef,
    useState,
    type ChangeEvent,
    type FormEvent,
} from 'react';
import { FaCheck, FaChevronDown, FaUpload } from 'react-icons/fa6';
import { compressImage } from '@/lib/compressImage';
import { cn } from '@/lib/utils';
import admin from '@/routes/admin';
import {
    Field,
    TextArea,
    TextInput,
    inputClass,
    primaryButton,
    secondaryButton,
} from '../components/ui';
import type { Project } from '../types';

export type ProjectForm = {
    title: string;
    slug: string;
    category: string;
    description: string;
    technologies: string[];
    thumbnail: File | null;
    demo_url: string;
    github_url: string;
};

const technologyGroups: Array<{ label: string; options: string[] }> = [
    {
        label: 'Frontend',
        options: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Vue.js',
            'Nuxt.js',
            'Angular',
            'Svelte',
            'SvelteKit',
            'Astro',
            'jQuery',
        ],
    },
    {
        label: 'CSS Framework',
        options: [
            'Tailwind CSS',
            'Bootstrap',
            'Material UI',
            'Chakra UI',
            'Sass',
            'Bulma',
        ],
    },
    {
        label: 'Backend',
        options: [
            'PHP',
            'Laravel',
            'CodeIgniter',
            'Node.js',
            'Express.js',
            'NestJS',
            'Python',
            'Django',
            'Flask',
            'FastAPI',
            'Ruby',
            'Ruby on Rails',
            'Java',
            'Spring Boot',
            'Go',
            'C#',
            '.NET',
        ],
    },
    {
        label: 'Database',
        options: [
            'MySQL',
            'PostgreSQL',
            'SQLite',
            'MariaDB',
            'MongoDB',
            'Redis',
            'Oracle',
            'SQL Server',
            'Firebase',
            'Supabase',
        ],
    },
    {
        label: 'Mobile',
        options: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Electron'],
    },
    {
        label: 'Lainnya',
        options: [
            'Docker',
            'Git',
            'REST API',
            'GraphQL',
            'AWS',
            'Vercel',
            'Nginx',
        ],
    },
];

const valuesFrom = (project?: Project): ProjectForm => ({
    title: project?.title ?? '',
    slug: project?.slug ?? '',
    category: project?.category ?? '',
    description: project?.description ?? '',
    technologies: project?.technologies ?? [],
    thumbnail: null,
    demo_url: project?.demo_url ?? '',
    github_url: project?.github_url ?? '',
});

export default function ProjectForm({ project }: { project?: Project }) {
    const form = useForm<ProjectForm>(valuesFrom(project));
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(
        project?.thumbnail ?? null,
    );

    const handleThumbnailChange = async (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const compressed = await compressImage(file);
        form.setData('thumbnail', compressed);
        setThumbnailPreview(URL.createObjectURL(compressed));
    };

    const [isTechnologyOpen, setIsTechnologyOpen] = useState(false);
    const technologyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isTechnologyOpen) {
            return;
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (
                technologyRef.current &&
                !technologyRef.current.contains(event.target as Node)
            ) {
                setIsTechnologyOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsTechnologyOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isTechnologyOpen]);

    const handleTechnologiesChange = (technology: string) => {
        form.setData(
            'technologies',
            form.data.technologies.includes(technology)
                ? form.data.technologies.filter((item) => item !== technology)
                : [...form.data.technologies, technology],
        );
    };

    const knownTechnologies = technologyGroups.flatMap(
        (group) => group.options,
    );
    const extraTechnologies = form.data.technologies.filter(
        (technology) => !knownTechnologies.includes(technology),
    );
    const technologyOptions =
        extraTechnologies.length > 0
            ? [
                  ...technologyGroups,
                  { label: 'Tersimpan', options: extraTechnologies },
              ]
            : technologyGroups;

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        form.transform((values) => {
            const payload: Record<string, unknown> = { ...values };

            if (!payload.thumbnail) {
                delete payload.thumbnail;
            }

            return payload;
        });

        if (project) {
            form.put(admin.projects.update.url(project.id), {
                preserveScroll: true,
            });
        } else {
            form.post(admin.projects.store.url(), { preserveScroll: true });
        }
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <Field label="Title" error={form.errors.title}>
                <TextInput
                    value={form.data.title}
                    onChange={(event) =>
                        form.setData('title', event.target.value)
                    }
                    placeholder="Nama project"
                />
            </Field>

            <Field label="Slug" error={form.errors.slug}>
                <TextInput
                    value={form.data.slug}
                    onChange={(event) =>
                        form.setData('slug', event.target.value)
                    }
                    placeholder="otomatis dari title"
                />
            </Field>

            <Field label="Category" error={form.errors.category}>
                <TextInput
                    value={form.data.category}
                    onChange={(event) =>
                        form.setData('category', event.target.value)
                    }
                    placeholder="Web Development"
                />
            </Field>

            <Field label="Thumbnail" error={form.errors.thumbnail}>
                <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-[#0b0b0b] p-3 sm:flex-row sm:items-center">
                    {thumbnailPreview ? (
                        <img
                            src={thumbnailPreview}
                            alt="Preview thumbnail project"
                            className="h-28 w-full shrink-0 rounded-lg object-cover sm:w-44"
                        />
                    ) : (
                        <span className="flex h-28 w-full shrink-0 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/10 text-orange-400 sm:w-44">
                            <FaUpload size={16} />
                        </span>
                    )}

                    <div className="min-w-0">
                        <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold text-gray-300 transition hover:border-orange-500 hover:text-orange-400">
                            <FaUpload size={10} />
                            Pilih Gambar
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleThumbnailChange}
                                className="hidden"
                            />
                        </label>
                        <p className="mt-1 text-[10px] text-gray-600">
                            JPG, PNG, atau WEBP. Otomatis dikompres.
                        </p>
                    </div>
                </div>
            </Field>

            <Field label="Description" error={form.errors.description}>
                <TextArea
                    value={form.data.description}
                    onChange={(event) =>
                        form.setData('description', event.target.value)
                    }
                    placeholder="Deskripsi lengkap project"
                />
            </Field>

            <Field label="Technologies" error={form.errors.technologies}>
                <div ref={technologyRef} className="relative">
                    <button
                        type="button"
                        onClick={() => setIsTechnologyOpen((isOpen) => !isOpen)}
                        className={cn(
                            inputClass,
                            'flex items-center justify-between gap-2 text-left',
                        )}
                    >
                        <span
                            className={cn(
                                form.data.technologies.length > 0
                                    ? 'text-white'
                                    : 'text-gray-600',
                            )}
                        >
                            {form.data.technologies.length > 0
                                ? `${form.data.technologies.length} teknologi dipilih`
                                : 'Pilih teknologi'}
                        </span>
                        <FaChevronDown
                            size={11}
                            className={cn(
                                'shrink-0 text-gray-500 transition',
                                isTechnologyOpen && 'rotate-180',
                            )}
                        />
                    </button>

                    {form.data.technologies.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                            {form.data.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="inline-flex items-center gap-1.5 rounded-md bg-orange-500/10 px-2 py-1 text-[11px] text-orange-300"
                                >
                                    {technology}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleTechnologiesChange(technology)
                                        }
                                        aria-label={`Hapus ${technology}`}
                                        className="text-orange-400 transition hover:text-white"
                                    >
                                        &times;
                                    </button>
                                </span>
                            ))}
                        </div>
                    )}

                    {isTechnologyOpen && (
                        <div className="absolute right-0 left-0 z-20 mt-2 max-h-72 [scrollbar-width:thin] [scrollbar-color:#f97316_#1f1f1f] overflow-y-auto rounded-xl border border-white/10 bg-[#111111] p-2 shadow-xl shadow-black/50 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-orange-500/50 [&::-webkit-scrollbar-track]:bg-[#1f1f1f]">
                            {technologyOptions.map((group) => (
                                <div key={group.label} className="py-1">
                                    <p className="px-2 py-1 text-[10px] font-semibold tracking-wider text-orange-400 uppercase">
                                        {group.label}
                                    </p>
                                    <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
                                        {group.options.map((technology) => {
                                            const isSelected =
                                                form.data.technologies.includes(
                                                    technology,
                                                );

                                            return (
                                                <button
                                                    key={technology}
                                                    type="button"
                                                    onClick={() =>
                                                        handleTechnologiesChange(
                                                            technology,
                                                        )
                                                    }
                                                    className={cn(
                                                        'flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-left text-xs transition',
                                                        isSelected
                                                            ? 'bg-orange-500/10 text-orange-300'
                                                            : 'text-gray-300 hover:bg-white/5',
                                                    )}
                                                >
                                                    <span className="truncate">
                                                        {technology}
                                                    </span>
                                                    {isSelected && (
                                                        <FaCheck
                                                            size={9}
                                                            className="shrink-0 text-orange-400"
                                                        />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Demo URL" error={form.errors.demo_url}>
                    <TextInput
                        value={form.data.demo_url}
                        onChange={(event) =>
                            form.setData('demo_url', event.target.value)
                        }
                        placeholder="https://..."
                    />
                </Field>

                <Field label="GitHub URL" error={form.errors.github_url}>
                    <TextInput
                        value={form.data.github_url}
                        onChange={(event) =>
                            form.setData('github_url', event.target.value)
                        }
                        placeholder="https://..."
                    />
                </Field>
            </div>

            <div className="flex items-center justify-end gap-2 border-t border-white/10 pt-4">
                <Link
                    href={admin.projects.index.url()}
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
                        : project
                          ? 'Update Project'
                          : 'Simpan Project'}
                </button>
            </div>
        </form>
    );
}
