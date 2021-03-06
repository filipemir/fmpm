import React, { useState } from 'react';
import { BookEntry } from '../../models/media';
import BookModal from 'components/BookModal';
import { useTransition, animated } from 'react-spring';
import getYear from 'date-fns/getYear';
import useProgressiveImg from 'hooks/useProgressiveImg';
import { Root, StyledBook, StyledBookCover, StyledYear } from './styles';

const YearTile = ({ date }: { date: Date }) => {
    const yearStr = `${getYear(date)}`;

    return (
        <StyledYear>
            {yearStr.slice(0, 2)}
            <br />
            {yearStr.slice(2, 4)}
        </StyledYear>
    );
};

const BookTile = ({
    book,
    onClick
}: {
    book: BookEntry;
    onClick: (book: BookEntry) => void;
}) => {
    const { title, author, cover } = book,
        { placeholder, images } = cover,
        thumbnail = images[0],
        description = `"${title}" by ${author}`,
        { src, isLoading } = useProgressiveImg({
            initialImg: placeholder,
            finalImg: thumbnail.path
        });

    return (
        <StyledBook onClick={() => onClick(book)}>
            <StyledBookCover
                src={src}
                alt={description}
                title={description}
                loading='lazy'
                blur={isLoading}
            />
        </StyledBook>
    );
};

const BookGrid = ({ books }: { books: BookEntry[] }) => {
    const [activeBook, setActiveBook] = useState<BookEntry | null>(null),
        modalTransitions = useTransition(activeBook, null, {
            from: { zIndex: 100, opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: { duration: 100 }
        });

    return (
        <Root>
            {books.map((book, index) => {
                const { title, endDate } = book,
                    prevBook = index === 0 ? null : books[index - 1],
                    prevBookYear = prevBook ? getYear(prevBook.endDate) : -9999,
                    isFirstOfYear = getYear(endDate) != prevBookYear;

                return (
                    <React.Fragment key={title + endDate}>
                        {isFirstOfYear && <YearTile date={endDate} />}
                        <BookTile
                            book={book}
                            onClick={() => setActiveBook(book)}
                            key={title + endDate}
                        />
                    </React.Fragment>
                );
            })}
            {modalTransitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} style={props}>
                            <BookModal
                                book={item}
                                onClose={() => setActiveBook(null)}
                            />
                        </animated.div>
                    )
            )}
        </Root>
    );
};

export default BookGrid;
