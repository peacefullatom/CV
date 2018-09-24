export interface Link {
    HREF: string;
    value: string;
}

export interface Messenger extends Link {
    messenger: string;
}

interface EntryName {
    name: string;
}

interface EntryStart {
    start: Date;
}

interface EntryDescription {
    description: string;
}

export interface Skill extends EntryName, EntryStart {
    end?: Date;
}

export interface Experience extends EntryStart, EntryDescription {
    role: string;
    company: string;
    technologies: string[];
    location: string;
}

export interface Education extends EntryName, EntryStart, EntryDescription {
    link: string;
    end: Date;
    location: string;
}

export interface Readings extends EntryName, EntryDescription {
    link: string;
}

export interface Languages {
    languages: string[];
}
