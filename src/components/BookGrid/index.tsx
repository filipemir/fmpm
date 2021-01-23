import React, { useState } from 'react';
import { BookEntry } from '../../models/media';
import styled from '@emotion/styled';
import BookModal from 'components/BookModal';
import { useTransition, animated } from 'react-spring';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_QUATERNARY,
    FONT_FAMILY_SANS_SERIF
} from 'styles/global';
import getYear from 'date-fns/getYear';

const Root = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30px, 120px));
    gap: 15px;
    justify-content: center;
    align-items: center;
`;

const Book = styled.div`
    position: relative;
    cursor: pointer;
    transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;
    grid-auto-flow: row dense;

    &:before {
        content: '';
        display: block;
        height: 0;
        width: 0;
        padding-bottom: calc(1.5 * 100%);
    }

    &:hover {
        box-shadow: rgba(2, 12, 27, 0.5) 10px 20px 30px 0;
        transform: scale(1.3);
        z-index: 1;
    }
`;

const StyledYear = styled.div`
    color: ${COLOR_ACCENT};
    font-size: 70px;
    font-weight: 700;
    font-family: ${FONT_FAMILY_SANS_SERIF};
    background-color: ${COLOR_BG_ACCENT};
    height: 100%;
    width: 100%;
    border-radius: 5px;
    line-height: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px 0 ${COLOR_QUATERNARY};
    border: 1px solid ${COLOR_ACCENT};
    transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;

    &:hover {
        transform: scale(1.1);
        z-index: 1;
        box-shadow: unset;
    }
`;

const BookCover = styled.img`
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    top: 0;
    transition: 150ms ease-in-out;

    &:hover {
        object-fit: fill;
    }
`;

const YearCard = ({ date }: { date: Date }) => {
    const yearStr = `${getYear(date)}`;

    return (
        <StyledYear>
            {yearStr.slice(0, 2)}
            <br />
            {yearStr.slice(2, 4)}
        </StyledYear>
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
                const { title, author, image, endDate } = book,
                    description = `"${title}" by ${author}`,
                    prevBook = index === 0 ? null : books[index - 1],
                    prevBookYear = prevBook ? getYear(prevBook.endDate) : -9999,
                    isFirstOfYear = getYear(endDate) != prevBookYear;

                return (
                    <React.Fragment key={title + endDate}>
                        {isFirstOfYear && <YearCard date={endDate} />}
                        <Book onClick={() => setActiveBook(book)}>
                            <BookCover
                                src={image}
                                alt={description}
                                title={description}
                                loading='lazy'
                            />
                        </Book>
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
