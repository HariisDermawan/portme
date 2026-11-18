import { Link, useForm } from '@inertiajs/react';
import type { FormEvent } from 'react';
import admin from '@/routes/admin';
import {
    Field,
    Switch,
    TextInput,
    primaryButton,
    secondaryButton,
} from '../components/ui';
import type { Skill } from '../types';

export type SkillForm = {
    name: string;
    category: string;
    icon: string;
    is_visible: boolean;
};

const valuesFrom = (skill?: Skill): SkillForm => ({
    name: skill?.name ?? '',
    category: skill?.category ?? '',
    icon: skill?.icon ?? '',
    is_visible: skill?.is_visible ?? true,
});

export default function SkillForm({ skill }: { skill?: Skill }) {
    const form = useForm<SkillForm>(valuesFrom(skill));

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (skill) {
            form.put(admin.skills.update.url(skill.id), {
                preserveScroll: true,
            });
        } else {
            form.post(admin.skills.store.url(), { preserveScroll: true });
        }
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <Field label="Name" error={form.errors.name}>
                <TextInput
                    value={form.data.name}
                    onChange={(event) =>
                        form.setData('name', event.target.value)
                    }
                    placeholder="Laravel"
                />
            </Field>

            <Field label="Description" error={form.errors.category}>
                <TextInput
                    value={form.data.category}
                    onChange={(event) =>
                        form.setData('category', event.target.value)
                    }
                    placeholder="Backend"
                />
            </Field>

            <Field label="Icon" error={form.errors.icon}>
                <TextInput
                    value={form.data.icon}
                    onChange={(event) =>
                        form.setData('icon', event.target.value)
                    }
                    placeholder="fa-brands fa-laravel"
                />
            </Field>

            <Switch
                checked={form.data.is_visible}
                onChange={(checked) => form.setData('is_visible', checked)}
                label="Tampilkan di website"
            />

            <div className="flex items-center justify-end gap-2 border-t border-white/10 pt-4">
                <Link
                    href={admin.skills.index.url()}
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
                        : skill
                          ? 'Update Skill'
                          : 'Simpan Skill'}
                </button>
            </div>
        </form>
    );
}
