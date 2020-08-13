export interface Curriculum {
    main: Main;
    about: string[];
    experience: Experience[];
    education: string[];
    skills: string[];
    interests: string[];
}

export interface Experience {
    jobPosition: string;
    company: string;
    desc: string[];
    start: string;
    end: string;
}

export interface Main {
    about: string;
    experience: string;
    education: string;
    skills: string;
    interests: string;
    projects: string;
    language: string;
    languagesAndTools: string;
    workflow: string;
}