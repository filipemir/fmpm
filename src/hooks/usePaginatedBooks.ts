import { useState } from 'react';
import { BOOKS_SORTED } from 'data/books';
import { BookEntry } from 'models/media';

const usePaginatedBooks = (pageSize = 25) => {
    const [offset, setOffset] = useState(0),
        [books, setBooks] = useState<BookEntry[]>([]),
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
