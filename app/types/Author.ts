import type { Tag } from './Tag';

export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string | null;
    deathDate: string | null;
    birthPlace: string | null;
    deathPlace: string | null;
    description: string;
    imageData: string | null;
    mimeType: string | null;
    createdAt: number;
    updatedAt: number;
    tags: Tag[] | null;
}