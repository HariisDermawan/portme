import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

export default function Reveal({
    children,
    className = '',
    delay = 0,
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setVisible(true);

            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transform-gpu transition-all duration-700 ease-out ${
                visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
            } ${className}`}
        >
            {children}
        </div>
    );
}
