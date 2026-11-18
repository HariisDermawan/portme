export default function BackgroundDots({
    className = 'h-[650px] w-[650px] opacity-35 sm:-right-10 md:right-0 md:opacity-50',
    compact = false,
}: {
    className?: string;
    compact?: boolean;
}) {
    return (
        <div
            className={`pointer-events-none absolute top-0 -right-24 ${className}`}
        >
            <div
                className="absolute inset-0 md:hidden"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(249,115,22,0.4) ${compact ? '1.4px' : '1px'}, transparent ${compact ? '1.5px' : '1.2px'})`,
                    backgroundSize: `${compact ? 16 : 18}px ${compact ? 16 : 18}px`,
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
    );
}
