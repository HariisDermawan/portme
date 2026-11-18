import type { FormEvent } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import {
    FaEnvelope,
    FaPhone,
    FaLocationDot,
    FaArrowUpRightFromSquare,
    FaCircleCheck,
    FaPaperPlane,
} from 'react-icons/fa6';
import contact from '@/routes/contact';
import type { PublicProfile } from '@/types/public';

function whatsappNumber(phone: string | null): string {
    const digits = (phone ?? '').replace(/\D/g, '');

    if (!digits) {
        return '';
    }

    if (digits.startsWith('0')) {
        return `62${digits.slice(1)}`;
    }

    if (digits.startsWith('8')) {
        return `62${digits}`;
    }

    return digits;
}

export default function Contact({
    profile,
}: {
    profile: PublicProfile | null;
}) {
    const email = profile?.email ?? 'your-email@example.com';
    const phone = profile?.phone ?? null;
    const wa = whatsappNumber(phone);
    const { flash } = usePage().props;

    const form = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const contactInfo = [
        {
            icon: <FaEnvelope size={18} />,
            label: 'Email',
            value: email,
            link: `mailto:${email}`,
        },
        {
            icon: <FaPhone size={18} />,
            label: 'WhatsApp',
            value: phone ?? 'Contact me directly',
            link: wa ? `https://wa.me/${wa}` : null,
        },
        {
            icon: <FaLocationDot size={18} />,
            label: 'Location',
            value: profile?.location ?? 'Indonesia',
            link: null,
        },
    ];

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        form.post(contact.store.url(), {
            preserveScroll: true,
            onSuccess: () => form.reset(),
        });
    };

    return (
        <>
            <Navbar profile={profile} />

            <main className="relative min-h-screen overflow-hidden bg-[#0b0b0b] px-6 pt-32 pb-24 md:px-10 md:pt-40 md:pb-28 lg:px-16">
                {/* Background dots */}
                <div className="pointer-events-none absolute top-0 -right-24 h-[650px] w-[650px] opacity-35 sm:-right-10 md:right-0 md:opacity-50">
                    <div
                        className="absolute inset-0 md:hidden"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle, rgba(249,115,22,0.4) 1px, transparent 1.2px)',
                            backgroundSize: '18px 18px',
                            clipPath:
                                'path("M 650 0 L 650 650 C 500 620 420 550 330 430 C 240 310 130 220 0 200 L 0 0 Z")',
                            maskImage:
                                'linear-gradient(to left, black 0%, black 65%, transparent 100%)',
                            WebkitMaskImage:
                                'linear-gradient(to left, black 0%, black 65%, transparent 100%)',
                        }}
                    />

                    <div
                        className="absolute inset-0 hidden md:block"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle, rgba(249,115,22,0.85) 1.4px, transparent 1.5px)',
                            backgroundSize: '16px 16px',
                            clipPath:
                                'path("M 650 0 L 650 650 C 500 620 420 550 330 430 C 240 310 130 220 0 200 L 0 0 Z")',
                            maskImage:
                                'linear-gradient(to left, black 0%, black 65%, transparent 100%)',
                            WebkitMaskImage:
                                'linear-gradient(to left, black 0%, black 65%, transparent 100%)',
                        }}
                    />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    {/* Heading */}
                    <Reveal className="mb-14 max-w-2xl">
                        <p className="mb-3 text-sm font-bold tracking-[0.3em] text-orange-500 uppercase">
                            Get In Touch
                        </p>

                        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                            Let's Work{' '}
                            <span className="text-orange-500">Together.</span>
                        </h1>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
                            Punya ide project atau ingin bekerja sama? Jangan
                            ragu untuk menghubungi saya. Saya terbuka untuk
                            diskusi dan kesempatan baru.
                        </p>
                    </Reveal>

                    <Reveal
                        delay={150}
                        className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
                    >
                        {/* Contact Information */}
                        <div>
                            <h2 className="mb-3 text-xl font-bold text-white">
                                Let's Talk
                            </h2>

                            <p className="mb-8 text-sm leading-7 text-gray-400">
                                Kamu bisa menghubungi saya melalui beberapa
                                informasi kontak berikut.
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#111111] p-4 transition-colors hover:border-orange-500/40"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                                            {item.icon}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="mb-1 text-xs text-gray-500">
                                                {item.label}
                                            </p>

                                            <p className="text-sm font-semibold break-all text-white">
                                                {item.value}
                                            </p>
                                        </div>

                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open ${item.label}`}
                                                className="text-gray-500 transition-colors hover:text-orange-500"
                                            >
                                                <FaArrowUpRightFromSquare
                                                    size={14}
                                                />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8">
                            <div className="mb-7">
                                <h2 className="text-xl font-bold text-white">
                                    Send Me a Message
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Isi form berikut untuk memulai percakapan
                                    dengan saya.
                                </p>
                            </div>

                            {flash?.success && (
                                <div className="mb-5 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                                    <FaCircleCheck size={14} />
                                    {flash.success}
                                </div>
                            )}

                            {flash?.error && (
                                <div className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                                    {flash.error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-xs font-semibold text-gray-300"
                                        >
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={form.data.name}
                                            onChange={(event) =>
                                                form.setData(
                                                    'name',
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="Masukkan nama"
                                            className="w-full rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-3 text-sm text-white transition outline-none placeholder:text-gray-600 focus:border-orange-500"
                                        />

                                        {form.errors.name && (
                                            <p className="mt-2 text-xs text-red-400">
                                                {form.errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-xs font-semibold text-gray-300"
                                        >
                                            Your Email
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={form.data.email}
                                            onChange={(event) =>
                                                form.setData(
                                                    'email',
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="nama@email.com"
                                            className="w-full rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-3 text-sm text-white transition outline-none placeholder:text-gray-600 focus:border-orange-500"
                                        />

                                        {form.errors.email && (
                                            <p className="mt-2 text-xs text-red-400">
                                                {form.errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-xs font-semibold text-gray-300"
                                    >
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={form.data.subject}
                                        onChange={(event) =>
                                            form.setData(
                                                'subject',
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Topik pesan (opsional)"
                                        className="w-full rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-3 text-sm text-white transition outline-none placeholder:text-gray-600 focus:border-orange-500"
                                    />

                                    {form.errors.subject && (
                                        <p className="mt-2 text-xs text-red-400">
                                            {form.errors.subject}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-xs font-semibold text-gray-300"
                                    >
                                        Your Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={form.data.message}
                                        onChange={(event) =>
                                            form.setData(
                                                'message',
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Tuliskan pesan kamu di sini..."
                                        className="w-full resize-none rounded-lg border border-white/10 bg-[#0b0b0b] px-4 py-3 text-sm text-white transition outline-none placeholder:text-gray-600 focus:border-orange-500"
                                    />

                                    {form.errors.message && (
                                        <p className="mt-2 text-xs text-red-400">
                                            {form.errors.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={form.processing}
                                    className="flex w-full items-center justify-center gap-3 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {form.processing
                                        ? 'Mengirim...'
                                        : 'Send Message'}
                                    <FaPaperPlane size={14} />
                                </button>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </main>

            <Footer profile={profile} />
        </>
    );
}
