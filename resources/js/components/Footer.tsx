import { Link } from '@inertiajs/react';
import { FaArrowUp, FaEnvelope } from 'react-icons/fa';
import Reveal from '@/components/Reveal';
import { getSocialLinks } from '@/lib/socials';
import type { PublicProfile } from '@/types/public';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
];

export default function Footer({
    profile,
}: {
    profile?: PublicProfile | null;
}) {
    const name = profile?.name ?? 'Haris Darmawan';
    const brand = name.split(' ')[0];
    const description =
        profile?.short_description ??
        'Freelance Web Developer yang berfokus pada pengembangan website modern, responsif, dan fungsional.';

    const socialLinks = getSocialLinks(profile);

    return (
        <footer className="border-t border-white/10 bg-[#0b0b0b] px-6 pt-16 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-2 lg:grid-cols-3">
                    <Reveal>
                        <Link
                            href="/"
                            className="font-heading text-2xl font-extrabold tracking-tight text-white"
                        >
                            {brand}
                            <span className="text-orange-500">.</span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                            {description}
                        </p>

                        {socialLinks.length > 0 && (
                            <div className="mt-7 flex items-center gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                                    >
                                        <social.icon size={16} />
                                    </a>
                                ))}
                            </div>
                        )}
                    </Reveal>

                    <Reveal delay={100}>
                        <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase">
                            Navigation
                        </h3>

                        <ul className="mt-6 space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 transition hover:text-orange-500"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={200}>
                        <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase">
                            Let's Connect
                        </h3>

                        <p className="mt-6 text-sm leading-7 text-gray-400">
                            Punya ide atau project yang ingin dikembangkan? Mari
                            terhubung dan diskusikan bersama.
                        </p>

                        <a
                            href={`mailto:${profile?.email ?? 'your-email@gmail.com'}`}
                            className="mt-5 inline-flex items-center gap-3 text-sm font-medium text-orange-500 transition hover:text-orange-400"
                        >
                            <FaEnvelope size={16} />
                            Get In Touch
                        </a>
                    </Reveal>
                </div>

                <Reveal className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-7 md:flex-row">
                    <p className="text-center text-xs text-gray-500 md:text-left">
                        © {new Date().getFullYear()} {name}. All rights
                        reserved.
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        aria-label="Back to top"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                        <FaArrowUp size={15} />
                    </button>
                </Reveal>
            </div>
        </footer>
    );
}
