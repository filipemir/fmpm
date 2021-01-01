import React from 'react';
import DogearedTile from 'components/DogearedTile';
import { BookEntry } from '../../models/media';
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
import { config, useSpring, animated } from 'react-spring';

const getDateRangeString = (book: BookEntry) => {
    const { startDate, endDate } = book,
        sameYear = !!endDate && getYear(startDate) === getYear(endDate),
        startDateStr = format(startDate, sameYear ? 'MMM d' : 'MMM d, yyy'),
        endDateStr = endDate && format(endDate, 'MMM d, yyy');

    return `${startDateStr} to ${endDateStr}`;
};

const BookModal = ({ book, onClose }: { book: BookEntry; onClose?: () => void }) => {
    const { title, subtitle, image, author, url } = book,
        spring = useSpring({ opacity: 1, from: { opacity: 0 }, config: config.default });

    return (
        <StyledRoot>
            <animated.div style={spring}>
                <StyledModalShadowBox onClick={() => onClose && onClose()} />
                <StyledContent>
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
            </animated.div>
        </StyledRoot>
    );
};

export default BookModal;
