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

export type PublicProfile = {
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

export type PublicProject = {
    id: number;
    title: string;
    slug: string;
    category: string | null;
    thumbnail: string | null;
    description: string | null;
    technologies: string[] | null;
    demo_url: string | null;
    github_url: string | null;
};

export type PublicSkill = {
    id: number;
    name: string;
    category: string;
    icon: string | null;
    proficiency: number | null;
};

export type PublicEducation = {
    id: number;
    institution: string;
    degree: string | null;
    major: string | null;
    start_year: number | null;
    end_year: number | null;
    description: string | null;
};

export type PublicExperience = {
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
