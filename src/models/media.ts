import { ResponsiveLoaderResult } from '*.jpg';

export interface BookEntry {
    title: string;
    subtitle?: string;
    author: string;
    favorite: boolean;
    startDate?: Date;
    endDate: Date;
    url?: string;
    cover: ResponsiveLoaderResult;
}
