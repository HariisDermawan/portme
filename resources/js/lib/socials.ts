import type { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import type { PublicProfile } from '@/types/public';

export type SocialLink = { icon: IconType; href: string; label: string };

export function getSocialLinks(profile?: PublicProfile | null): SocialLink[] {
    return [
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
    ].filter((social): social is SocialLink => Boolean(social.href));
}
