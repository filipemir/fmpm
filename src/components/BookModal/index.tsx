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

const getDateRangeString = (book: BookEntry) => {
    const { startDate, endDate } = book,
        sameYear = !!endDate && getYear(startDate) === getYear(endDate),
        startDateStr = format(startDate, sameYear ? 'MMM d' : 'MMM d, yyy'),
        endDateStr = endDate && format(endDate, 'MMM d, yyy');

    return `${startDateStr} to ${endDateStr}`;
};

const BookModal = ({ book, onClose }: { book: BookEntry; onClose?: () => void }) => {
    const { title, subtitle, image, author, url } = book;

    useCancelKeydown(onClose);

    return (
        <StyledRoot>
            <StyledModalShadowBox onClick={() => onClose && onClose()} />
            <StyledContent onClick={() => window.open(url, '_blank')}>
                <StyledCover src={image} />
                <StyledInfo>
                    <DogearedTile maxWidth={'350px'}>
                        <StyledTitle href={url} target={'_blank'}>
                            {title}
                        </StyledTitle>
                        {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
                        <StyledAuthor>by {author}</StyledAuthor>
                        <StyledDates>read {getDateRangeString(book)}</StyledDates>
                    </DogearedTile>
                </StyledInfo>
            </StyledContent>
        </StyledRoot>
    );
};

export default BookModal;
