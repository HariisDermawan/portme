import type { IconType } from 'react-icons';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Reveal from '@/components/Reveal';
import { FaCode, FaGraduationCap } from 'react-icons/fa6';
import {
    SiLaravel,
    SiReact,
    SiInertia,
    SiTypescript,
    SiTailwindcss,
    SiMysql,
    SiJavascript,
    SiPhp,
    SiHtml5,
    SiCss,
    SiNodedotjs,
    SiGit,
} from 'react-icons/si';
import type {
    PublicEducation,
    PublicExperience,
    PublicProfile,
    PublicSkill,
} from '@/types/public';

const skillIcons: { match: string; icon: IconType; color: string }[] = [
    { match: 'laravel', icon: SiLaravel, color: '#FF2D20' },
    { match: 'react', icon: SiReact, color: '#61DAFB' },
    { match: 'inertia', icon: SiInertia, color: '#9553E9' },
    { match: 'typescript', icon: SiTypescript, color: '#3178C6' },
    { match: 'tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { match: 'mysql', icon: SiMysql, color: '#4479A1' },
    { match: 'javascript', icon: SiJavascript, color: '#F7DF1E' },
    { match: 'php', icon: SiPhp, color: '#777BB4' },
    { match: 'html', icon: SiHtml5, color: '#E34F26' },
    { match: 'css', icon: SiCss, color: '#1572B6' },
    { match: 'node', icon: SiNodedotjs, color: '#5FA04E' },
    { match: 'git', icon: SiGit, color: '#F05032' },
];

function skillIcon(name: string): { icon: IconType; color: string } {
    const key = name.toLowerCase();
    const found = skillIcons.find((item) => key.includes(item.match));

    return found ?? { icon: FaCode, color: '#f97316' };
}

function formatMonth(value: string | null): string {
    if (!value) {
        return '';
    }

    return new Intl.DateTimeFormat('id-ID', {
        month: 'short',
        year: 'numeric',
    }).format(new Date(value));
}

function formatPeriod(experience: PublicExperience): string {
    const start = formatMonth(experience.start_date);
    const end = experience.is_current
        ? 'Sekarang'
        : formatMonth(experience.end_date);

    return [start, end].filter(Boolean).join(' - ');
}

function EducationCard({ education }: { education: PublicEducation }) {
    const period = [education.start_year, education.end_year ?? 'Sekarang']
        .filter(Boolean)
        .join(' - ');

    return (
        <div className="group flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-orange-500/40 hover:bg-white/[0.04]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                <FaGraduationCap size={20} />
            </div>

            <div>
                <p className="mb-1 text-xs font-semibold tracking-widest text-gray-500 uppercase">
                    {education.degree ?? 'Education'}
                </p>

                <p className="font-semibold text-white">
                    {education.institution}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                    {[education.major, period].filter(Boolean).join(' · ')}
                </p>
            </div>
        </div>
    );
}

export default function AboutSection({
    profile,
    skills,
    educations,
    experiences,
}: {
    profile: PublicProfile | null;
    skills: PublicSkill[];
    educations: PublicEducation[];
    experiences: PublicExperience[];
}) {
    const description =
        profile?.short_description ??
        'Saya adalah seorang Web Developer yang memiliki ketertarikan dalam membangun dan mengembangkan aplikasi berbasis web. Saya terbiasa menggunakan teknologi seperti Laravel, React, dan Tailwind CSS untuk membuat website yang responsif, fungsional, dan mudah digunakan.';
    const photo = profile?.about_photo ?? profile?.photo ?? '/assets/me1.png';
    const hasInfo =
        educations.length > 0 || skills.length > 0 || experiences.length > 0;

    return (
        <>
            <Navbar profile={profile} />
            <main className="min-h-screen overflow-hidden bg-[#0b0b0b] pt-20 md:pt-24">
                <section className="relative overflow-hidden px-6 pt-8 pb-20 md:px-8 md:py-28">
                    <div className="pointer-events-none absolute top-20 -right-32 hidden h-80 w-80 rounded-full bg-orange-500/10 blur-[120px] md:block" />

                    <div className="pointer-events-none absolute top-0 -right-24 h-[420px] w-[420px] opacity-35 sm:-right-10 sm:h-[550px] sm:w-[550px] md:right-0 md:h-[650px] md:w-[650px] md:opacity-70">
                        <div
                            className="absolute inset-0 md:hidden"
                            style={{
                                backgroundImage:
                                    'radial-gradient(circle, rgba(249,115,22,0.4) 1.4px, transparent 1.5px)',
                                backgroundSize: '16px 16px',
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
                        <Reveal className="mb-14 md:mb-16">
                            <p className="mb-4 text-sm font-bold tracking-[0.3em] text-orange-500 uppercase">
                                Get To Know Me
                            </p>

                            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                                About{' '}
                                <span className="text-orange-500">Me.</span>
                            </h2>
                        </Reveal>

                        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
                            <Reveal className="w-full">
                                <div className="relative mx-auto w-full max-w-md -translate-y-4 lg:-translate-y-10">
                                    <div className="absolute -top-4 -left-4 h-full w-full rounded-2xl border border-orange-500/40" />

                                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#151515]">
                                        <img
                                            src={photo}
                                            alt={profile?.name ?? 'Foto profil'}
                                            className="h-full w-full object-cover object-top"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>

                                    <div className="absolute -right-5 -bottom-5 h-24 w-24 rounded-2xl border border-orange-500/30 bg-orange-500/10 blur-[1px]" />
                                </div>
                            </Reveal>

                            <Reveal delay={150}>
                                <div className="mb-8 flex items-center gap-4">
                                    <div className="h-12 w-1 shrink-0 rounded-full bg-orange-500" />

                                    <h3 className="text-2xl font-bold text-white">
                                        Who Am I?
                                    </h3>
                                </div>

                                <p className="text-base leading-8 text-gray-400">
                                    {description}
                                </p>

                                {hasInfo && (
                                    <div className="mt-12">
                                        <h3 className="mb-6 text-2xl font-bold text-white">
                                            Education{' '}
                                            <span className="text-orange-500">
                                                & Skills
                                            </span>
                                        </h3>

                                        <div className="space-y-4">
                                            {educations.map((education) => (
                                                <EducationCard
                                                    key={education.id}
                                                    education={education}
                                                />
                                            ))}

                                            {skills.length > 0 && (
                                                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-orange-500/40">
                                                    <div className="mb-6">
                                                        <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                                                            What I Use
                                                        </p>

                                                        <h4 className="mt-2 text-lg font-bold text-white">
                                                            Technical Skills
                                                        </h4>
                                                    </div>

                                                    <div className="grid grid-cols-4 gap-3">
                                                        {skills.map((skill) => {
                                                            const {
                                                                icon: Icon,
                                                                color,
                                                            } = skillIcon(
                                                                skill.name,
                                                            );

                                                            return (
                                                                <div
                                                                    key={
                                                                        skill.id
                                                                    }
                                                                    title={
                                                                        skill.name
                                                                    }
                                                                    className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-2 py-4 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05]"
                                                                >
                                                                    <span
                                                                        className="text-2xl transition duration-300 group-hover:scale-110"
                                                                        style={{
                                                                            color,
                                                                        }}
                                                                    >
                                                                        <Icon />
                                                                    </span>

                                                                    <span className="text-center text-[10px] font-semibold text-gray-400 transition group-hover:text-white sm:text-xs">
                                                                        {
                                                                            skill.name
                                                                        }
                                                                    </span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}

                                            {experiences.length > 0 && (
                                                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-orange-500/40">
                                                    <div className="mb-6">
                                                        <p className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
                                                            Where I've Worked
                                                        </p>

                                                        <h4 className="mt-2 text-lg font-bold text-white">
                                                            Experience
                                                        </h4>
                                                    </div>

                                                    <div className="space-y-5">
                                                        {experiences.map(
                                                            (experience) => (
                                                                <div
                                                                    key={
                                                                        experience.id
                                                                    }
                                                                    className="border-l-2 border-orange-500/40 pl-4"
                                                                >
                                                                    <p className="text-sm font-semibold text-white">
                                                                        {
                                                                            experience.position
                                                                        }
                                                                    </p>

                                                                    <p className="mt-0.5 text-xs text-orange-500">
                                                                        {
                                                                            experience.company
                                                                        }
                                                                    </p>

                                                                    <p className="mt-1 text-[11px] text-gray-500">
                                                                        {formatPeriod(
                                                                            experience,
                                                                        )}
                                                                    </p>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </Reveal>
                        </div>
                    </div>
                </section>
            </main>

            <Footer profile={profile} />
        </>
    );
}
