import type { PublicProject } from '@/types/public';

type ProjectImage = Pick<PublicProject, 'title' | 'thumbnail'>;

export default function ProjectThumbnail({
    project,
    imageClassName = '',
    titleClassName = 'text-4xl',
}: {
    project: ProjectImage;
    imageClassName?: string;
    titleClassName?: string;
}) {
    if (project.thumbnail) {
        return (
            <img
                src={project.thumbnail}
                alt={project.title}
                className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${imageClassName}`}
            />
        );
    }

    return (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500/20 via-[#191919] to-[#191919]">
            <span
                className={`${titleClassName} font-extrabold text-orange-500/70`}
            >
                {project.title.charAt(0).toUpperCase()}
            </span>
        </div>
    );
}
