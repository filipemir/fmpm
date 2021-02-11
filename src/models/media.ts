type BookCovers = {
    placeholder: string;
    thumbnail: string;
    full: string;
};

export interface BookEntry {
    title: string;
    subtitle?: string;
    author: string;
    favorite: boolean;
    startDate?: Date;
    endDate: Date;
    url?: string;
    covers: BookCovers;
}
