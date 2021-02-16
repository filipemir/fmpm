import { useState } from 'react';
import { BOOKS_SORTED } from 'data/books';
import { BookEntry } from 'models/media';

const usePaginatedBooks = ({ pageSize = 25 }) => {
    const firstPage = BOOKS_SORTED.slice(0, pageSize),
        [books, setBooks] = useState<BookEntry[]>(firstPage),
        [offset, setOffset] = useState(pageSize),
        total = BOOKS_SORTED.length,
        allDone = offset > total,
        getMoreBooks = () => {
            if (allDone) {
                return;
            }

            const newBooks = BOOKS_SORTED.slice(offset, offset + pageSize);

            setBooks([...books, ...newBooks]);
            setOffset(offset + pageSize);
        };

    return { books, total, allDone, getMoreBooks };
};

export default usePaginatedBooks;
