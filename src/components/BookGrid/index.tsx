import React, { useState } from 'react';
import Image from 'next/image';
import { BookEntry } from 'models/media';
import BookModal from 'components/BookModal';
import { useTransition, animated } from 'react-spring';
import getYear from 'date-fns/getYear';
import { Root, StyledBook, StyledYear } from './styles';

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
        description = `"${title}" by ${author}`;

    return (
        <StyledBook onClick={() => onClick(book)}>
            <Image
                src={cover}
                alt={description}
                title={description}
                width={122}
                height={182}
                quality={50}
                placeholder='blur'
                layout='fixed'
                objectFit='cover'
                objectPosition='center center'
                loading={'eager'}
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
