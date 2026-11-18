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

export type Project = {
    id: number;
    title: string;
    slug: string;
    category: string | null;
    thumbnail: string | null;
    description: string | null;
    technologies: string[] | null;
    demo_url: string | null;
    github_url: string | null;
    created_at: string;
};

export type Skill = {
    id: number;
    name: string;
    category: string;
    icon: string | null;
    proficiency: number | null;
    is_visible: boolean;
    sort_order: number;
};

export type Experience = {
    id: number;
    company: string;
    position: string;
    employment_type: string | null;
    location: string | null;
    start_date: string | null;
    end_date: string | null;
    is_current: boolean;
    description: string | null;
};

export type Education = {
    id: number;
    institution: string;
    degree: string | null;
    major: string | null;
    start_year: number | null;
    end_year: number | null;
    description: string | null;
};

export type Profile = {
    id: number;
    name: string;
    profession: string | null;
    photo: string | null;
    about_photo: string | null;
    email: string | null;
    phone: string | null;
    location: string | null;
    short_description: string | null;
    github_url: string | null;
    linkedin_url: string | null;
    instagram_url: string | null;
    website_url: string | null;
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

export type ActivityLogStats = {
    today: number;
    uniqueVisitorsToday: number;
    onlineNow: number;
    total: number;
};

export type Paginated<T> = {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
    links: Array<{ url: string | null; label: string; active: boolean }>;
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
