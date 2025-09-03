import type { Tag } from './Tag';
import type { Author } from './Author';

export interface Article {
    id: number;
    title: string;
    blurb: string;
    content: string;
    source: string;
    datePublished: string;
    imageUrl: string;
    createdAt: number;
    updatedAt: number;
    tags: Tag[];
    authors: Author[];
}