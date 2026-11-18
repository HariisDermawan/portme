export type {
    Education,
    Experience,
    Profile,
    Project,
    Skill,
} from '@/types/models';

export type Stats = {
    projects: number;
    skills: number;
    experiences: number;
    educations: number;
    messages: number;
    unreadMessages: number;
};

export type Message = {
    id: number;
    name: string;
    email: string;
    subject: string | null;
    message: string;
    is_read: boolean;
    read_at: string | null;
    created_at: string;
};

export type ActivityLog = {
    id: number;
    ip_address: string | null;
    method: string;
    path: string;
    user_agent: string | null;
    referer: string | null;
    visited_at: string | null;
    user: { id: number; name: string } | null;
};

export type AdminNavKey =
    | 'overview'
    | 'messages'
    | 'projects'
    | 'profile'
    | 'skills'
    | 'experience'
    | 'education'
    | 'logs';
