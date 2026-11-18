import Content from '@/components/Content';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import type { PublicProfile, PublicProject } from '@/types/public';

export default function Welcome({
    profile,
    projects,
}: {
    profile: PublicProfile | null;
    projects: PublicProject[];
}) {
    return (
        <>
            <Navbar profile={profile} />
            <HeroSection profile={profile} />
            <Content projects={projects} />
            <Footer profile={profile} />
        </>
    );
}
