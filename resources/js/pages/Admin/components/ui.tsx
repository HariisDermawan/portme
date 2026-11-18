import {
    type InputHTMLAttributes,
    type ReactNode,
    type TextareaHTMLAttributes,
} from 'react';
import { Link } from '@inertiajs/react';
import type { IconType } from 'react-icons';
import { FaPen, FaTrash } from 'react-icons/fa6';
import { cn } from '@/lib/utils';

export const inputClass =
    'w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-orange-500';

export const labelClass =
    'mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500';

export const primaryButton =
    'inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60';

export const secondaryButton =
    'inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-gray-400 transition hover:border-orange-500 hover:text-orange-400';

export const dangerButton =
    'inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60';

export function PageHeader({
    title,
    description,
    action,
}: {
    title: string;
    description: string;
    action?: ReactNode;
}) {
    return (
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
                <h2 className="font-heading text-2xl font-extrabold text-white">
                    {title}
                </h2>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
            </div>
            {action}
        </div>
    );
}

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
});

export function formatDate(value: string): string {
    return dateFormatter.format(new Date(value));
}

const dateTimeFormatter = new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
});

export function formatDateTime(value: string): string {
    return dateTimeFormatter.format(new Date(value));
}

const numericDateFormatter = new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
});

export function formatDateId(value: string | null): string {
    if (!value) {
        return '';
    }

    const date = new Date(value);

    return Number.isNaN(date.getTime())
        ? ''
        : numericDateFormatter.format(date);
}

export function formatDuration(
    start: string | null,
    end: string | null,
    ongoing = false,
): string | null {
    if (!start) {
        return null;
    }

    const startDate = new Date(start);
    const endDate = ongoing ? new Date() : end ? new Date(end) : null;

    if (
        !endDate ||
        Number.isNaN(startDate.getTime()) ||
        Number.isNaN(endDate.getTime()) ||
        endDate < startDate
    ) {
        return null;
    }

    let months =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());

    if (endDate.getDate() < startDate.getDate()) {
        months -= 1;
    }

    if (months < 1) {
        const days = Math.max(
            1,
            Math.round((endDate.getTime() - startDate.getTime()) / 86_400_000),
        );

        return `${days} hari`;
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const parts: string[] = [];

    if (years > 0) {
        parts.push(`${years} tahun`);
    }

    if (remainingMonths > 0) {
        parts.push(`${remainingMonths} bulan`);
    }

    return parts.join(' ');
}

export function toDateInput(value: string | null): string {
    return value ? value.slice(0, 10) : '';
}

export function Field({
    label,
    error,
    className,
    children,
}: {
    label: string;
    error?: string;
    className?: string;
    children: ReactNode;
}) {
    return (
        <div className={className}>
            <label className={labelClass}>{label}</label>
            {children}
            {error ? (
                <p className="mt-1.5 text-xs text-red-400">{error}</p>
            ) : null}
        </div>
    );
}

export function TextInput({
    className,
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return <input {...props} className={cn(inputClass, className)} />;
}

export function TextArea({
    className,
    ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            className={cn(inputClass, 'min-h-24 resize-y', className)}
        />
    );
}

export function Switch({
    checked,
    onChange,
    label,
}: {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label: string;
}) {
    return (
        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-400">
            <input
                type="checkbox"
                checked={checked}
                onChange={(event) => onChange(event.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-[#0b0b0b] text-orange-500 focus:ring-orange-500"
            />
            {label}
        </label>
    );
}

export function EmptyState({
    icon: Icon,
    title,
    description,
}: {
    icon: IconType;
    title: string;
    description: string;
}) {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-500">
                <Icon size={16} />
            </span>
            <p className="mt-4 text-sm font-semibold text-white">{title}</p>
            <p className="mt-1 text-xs text-gray-500">{description}</p>
        </div>
    );
}

export function PanelHeader({
    title,
    description,
    action,
}: {
    title: string;
    description: string;
    action?: ReactNode;
}) {
    return (
        <div className="flex flex-col justify-between gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center">
            <div>
                <h3 className="text-sm font-bold text-white">{title}</h3>
                <p className="mt-0.5 text-xs text-gray-500">{description}</p>
            </div>
            {action}
        </div>
    );
}

const actionLinkClass =
    'flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition';

export function DeleteButton({
    onClick,
    href,
}: {
    onClick?: () => void;
    href?: string;
}) {
    const className = cn(
        actionLinkClass,
        'hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400',
    );

    if (href) {
        return (
            <Link href={href} aria-label="Delete" className={className}>
                <FaTrash size={11} />
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Delete"
            className={className}
        >
            <FaTrash size={11} />
        </button>
    );
}

export function EditButton({
    onClick,
    href,
}: {
    onClick?: () => void;
    href?: string;
}) {
    const className = cn(
        actionLinkClass,
        'hover:border-orange-500 hover:text-orange-400',
    );

    if (href) {
        return (
            <Link href={href} aria-label="Edit" className={className}>
                <FaPen size={10} />
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Edit"
            className={className}
        >
            <FaPen size={10} />
        </button>
    );
}
