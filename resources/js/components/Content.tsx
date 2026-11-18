import type { CSSProperties } from 'react';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectThumbnail from '@/components/ProjectThumbnail';
import Reveal from '@/components/Reveal';
import type { PublicProject } from '@/types/public';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperStyle = {
    '--swiper-navigation-color': '#f97316',
    '--swiper-navigation-size': '18px',
    '--swiper-pagination-color': '#f97316',
    '--swiper-pagination-bullet-inactive-color': '#525252',
    '--swiper-pagination-bullet-inactive-opacity': '1',
} as CSSProperties;

export default function Content({ projects }: { projects: PublicProject[] }) {
    return (
        <section
            id="project"
            className="bg-[#0b0b0b] px-6 py-20 md:px-10 md:py-24 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                        <p className="mb-3 text-xs font-bold tracking-[0.3em] text-orange-500 uppercase">
                            My Portfolio
                        </p>

                        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                            Selected{' '}
                            <span className="text-orange-500">Projects.</span>
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                            Beberapa project yang pernah saya kerjakan, mulai
                            dari website hingga aplikasi berbasis web.
                        </p>
                    </div>

                    <span className="text-xs font-medium text-gray-500">
                        ({projects.length.toString().padStart(2, '0')} Projects)
                    </span>
                </Reveal>

                {projects.length === 0 ? (
                    <div className="rounded-xl border border-white/10 bg-[#111111] px-6 py-14 text-center text-sm text-gray-500">
                        Belum ada project untuk ditampilkan.
                    </div>
                ) : (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        loop={projects.length > 3}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 24 },
                        }}
                        className="!pb-14"
                        style={swiperStyle}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id} className="h-auto">
                                <article className="group h-full overflow-hidden rounded-xl border border-white/10 bg-[#111111] transition duration-300 hover:-translate-y-1 hover:border-orange-500/50">
                                    <div className="relative aspect-[16/10] overflow-hidden bg-[#191919]">
                                        <ProjectThumbnail project={project} />

                                        {project.category && (
                                            <div className="absolute top-3 left-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                                                {project.category}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-4">
                                        <div className="mb-2 flex items-center justify-between gap-2">
                                            <h3 className="text-base font-bold text-white transition group-hover:text-orange-500">
                                                {project.title}
                                            </h3>

                                            {project.demo_url && (
                                                <a
                                                    href={project.demo_url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={`View ${project.title}`}
                                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                                                >
                                                    <FaArrowUpRightFromSquare
                                                        size={12}
                                                    />
                                                </a>
                                            )}
                                        </div>

                                        <p className="min-h-[60px] text-xs leading-5 text-gray-400">
                                            {project.description}
                                        </p>

                                        {(project.technologies ?? []).length >
                                            0 && (
                                            <div className="mt-4 flex flex-wrap gap-1.5">
                                                {(
                                                    project.technologies ?? []
                                                ).map((item) => (
                                                    <span
                                                        key={item}
                                                        className="rounded-md bg-white/5 px-2.5 py-1 text-[10px] font-medium text-gray-300"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {project.github_url && (
                                            <div className="mt-4 border-t border-white/10 pt-3">
                                                <a
                                                    href={project.github_url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 transition hover:text-orange-500"
                                                >
                                                    <FaGithub size={15} />
                                                    Source Code
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
}
