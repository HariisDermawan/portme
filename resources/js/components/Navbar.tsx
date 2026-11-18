import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { FaHouse, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa6';
import type { PublicProfile } from '@/types/public';

const navItems = [
    { label: 'Home', href: '/', icon: <FaHouse /> },
    { label: 'About', href: '/about', icon: <FaUser /> },
    { label: 'Project', href: '/portfolio', icon: <FaFolderOpen /> },
    { label: 'Contact', href: '/contact', icon: <FaEnvelope /> },
];

export default function Navbar({
    profile,
}: {
    profile?: PublicProfile | null;
}) {
    const { url, props } = usePage();
    const isAuthenticated = Boolean(props.auth?.user);
    const [showMobileNav, setShowMobileNav] = useState(false);
    const brand = profile?.name?.split(' ')[0] ?? 'Haris';

    useEffect(() => {
        const handleScroll = () => {
            setShowMobileNav(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full bg-[#0b0b0b]/90 backdrop-blur-xl">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8 md:py-7">
                    <a
                        href="/"
                        className="font-heading text-2xl font-bold tracking-tight text-white"
                    >
                        {brand}
                        <span className="text-orange-500">.</span>
                    </a>

                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => {
                            const isActive = url === item.href;

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`relative text-[15px] font-semibold transition-colors duration-300 hover:text-orange-500 ${
                                        isActive
                                            ? 'text-orange-500 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-orange-500'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>

                    <a
                        href={isAuthenticated ? '/dashboard' : '/login'}
                        className="hidden rounded-lg border border-orange-500 px-6 py-2.5 text-sm font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white md:block"
                    >
                        {isAuthenticated ? 'Dashboard' : 'Login'}
                    </a>

                    <a
                        href={isAuthenticated ? '/dashboard' : '/login'}
                        className="rounded-lg border border-orange-500 px-4 py-2 text-xs font-semibold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white md:hidden"
                    >
                        {isAuthenticated ? 'Dashboard' : 'Login'}
                    </a>
                </nav>
            </header>

            <nav
                className={`fixed bottom-3 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-xl border border-white/10 bg-[#171717]/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 md:hidden ${
                    showMobileNav
                        ? 'translate-y-0 opacity-100'
                        : 'pointer-events-none translate-y-20 opacity-0'
                }`}
            >
                <div className="grid grid-cols-4 gap-1">
                    {navItems.map((item) => {
                        const isActive = url === item.href;

                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`flex flex-col items-center justify-center gap-1 rounded-lg py-2 transition-all duration-300 ${
                                    isActive
                                        ? 'bg-orange-500/10 text-orange-500'
                                        : 'text-gray-500 hover:text-white'
                                }`}
                            >
                                <span className="text-base">{item.icon}</span>

                                <span className="text-[10px] font-semibold">
                                    {item.label}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
