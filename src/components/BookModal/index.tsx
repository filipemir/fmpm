import React from 'react';
import DogearedTile from 'components/DogearedTile';
import { BookEntry } from 'models/media';
import format from 'date-fns/format';
import getYear from 'date-fns/getYear';
import {
    StyledAuthor,
    StyledContent,
    StyledCover,
    StyledDates,
    StyledInfo,
    StyledModalShadowBox,
    StyledRoot,
    StyledTitle,
    StyledSubtitle
} from './styles';
import useCancelKeydown from 'hooks/useCancelKeydown';
import Image from 'next/image';

const getDateRangeString = (book: BookEntry) => {
    const { startDate, endDate } = book,
        endDateStr = format(endDate, 'MMM d, yyy');

    if (!startDate) {
        return `finished on ${endDateStr}`;
    }

    const sameYear = getYear(startDate) === getYear(endDate),
        startDateStr = format(startDate, sameYear ? 'MMM d' : 'MMM d, yyy');

    return `read ${startDateStr} to ${endDateStr}`;
};

const BookModal = ({
    book,
    onClose
}: {
    book: BookEntry;
    onClose?: () => void;
}) => {
    const { title, subtitle, cover, author } = book,
        description = `"${title}" by ${author}`;

    useCancelKeydown(onClose);

    return (
        <StyledRoot>
            <StyledModalShadowBox onClick={() => onClose && onClose()} />
            <StyledContent>
                <StyledCover>
                    <Image
                        src={cover}
                        alt={description}
                        title={description}
                        placeholder='blur'
                    />
                </StyledCover>
                <StyledInfo>
                    <DogearedTile maxWidth={'350px'}>
                        <StyledTitle>{title}</StyledTitle>
                        {subtitle && (
                            <StyledSubtitle>{subtitle}</StyledSubtitle>
                        )}
                        <StyledAuthor>by {author}</StyledAuthor>
                        <StyledDates>{getDateRangeString(book)}</StyledDates>
                    </DogearedTile>
                </StyledInfo>
            </StyledContent>
        </StyledRoot>
    );
};

export default BookModal;
