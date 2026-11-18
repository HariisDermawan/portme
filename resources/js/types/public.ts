import type { Education, Experience, Profile, Project, Skill } from './models';

export type PublicProfile = Profile;

export type PublicProject = Omit<Project, 'created_at'>;

export type PublicSkill = Pick<Skill, 'id' | 'name' | 'category' | 'icon'>;

export type PublicEducation = Education;

export type PublicExperience = Experience;
