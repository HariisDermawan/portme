import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import Reveal from '@/components/Reveal';
import type { PublicProfile } from '@/types/public';

export default function HeroSection({
    profile,
}: {
    profile?: PublicProfile | null;
}) {
    const name = profile?.name ?? 'Haris Darmawan';
    const [firstName, ...restName] = name.split(' ');
    const lastName = restName.join(' ');
    const profession = profile?.profession ?? 'Freelance Web Developer';
    const description =
        profile?.short_description ??
        'Saya seorang Web Developer yang memiliki ketertarikan dalam pengembangan website modern, mulai dari frontend hingga backend. Saya senang membangun aplikasi web yang fungsional, responsif, dan mudah digunakan.';
    const photo = profile?.photo ?? '/assets/me1.png';

    const socials: { icon: IconType; href: string; label: string }[] = [
        {
            icon: FaInstagram,
            href: profile?.instagram_url,
            label: 'Instagram',
        },
        { icon: FaGithub, href: profile?.github_url, label: 'Github' },
        {
            icon: FaLinkedinIn,
            href: profile?.linkedin_url,
            label: 'LinkedIn',
        },
    ].filter(
        (social): social is { icon: IconType; href: string; label: string } =>
            Boolean(social.href),
    );

    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#0b0b0b]"
        >
            <div
                className="pointer-events-none absolute top-0 left-0 z-0 h-[85%] w-[65%] opacity-30"
                style={{
                    backgroundImage:
                        'radial-gradient(#f97316 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    borderRadius: '0 0 100% 0',
                    maskImage:
                        'radial-gradient(ellipse at top left, black 0%, black 55%, transparent 100%)',
                    WebkitMaskImage:
                        'radial-gradient(ellipse at top left, black 0%, black 55%, transparent 100%)',
                }}
            />

            <div className="absolute inset-0 z-0 overflow-hidden lg:hidden">
                <img
                    src={photo}
                    alt={name}
                    className="absolute -right-20 bottom-0 h-[100%] w-auto max-w-none object-contain object-bottom opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b]/70 via-[#0b0b0b]/30 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/20 via-transparent to-[#0b0b0b]/70" />

                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/70 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-8 pt-28 lg:grid-cols-2">
                <Reveal className="relative z-20 max-w-xl pt-16 pb-20 lg:py-0">
                    <p className="mb-6 text-sm font-bold tracking-[0.3em] text-orange-500 uppercase">
                        Hello, I'm
                    </p>

                    <h1 className="text-6xl leading-[1.05] font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl">
                        {firstName}
                        {lastName && (
                            <>
                                <br />
                                <span className="text-orange-500">
                                    {lastName}
                                </span>
                            </>
                        )}
                    </h1>

                    <h2 className="mt-7 text-sm font-bold tracking-[0.2em] text-gray-300 uppercase">
                        {profession}
                    </h2>

                    <p className="mt-6 max-w-lg text-base leading-8 text-gray-400">
                        {description}
                    </p>

                    {socials.length > 0 && (
                        <div className="mt-9 flex items-center gap-4">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-gray-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                                >
                                    <social.icon size={19} />
                                </a>
                            ))}
                        </div>
                    )}
                </Reveal>

                <Reveal
                    delay={200}
                    className="relative hidden h-screen items-end justify-center lg:flex"
                >
                    <img
                        src={photo}
                        alt={name}
                        className="absolute right-0 bottom-0 h-[115%] max-w-full object-contain object-bottom"
                    />
                </Reveal>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-40 bg-gradient-to-t from-[#0b0b0b] to-transparent lg:block" />
        </section>
    );
}
