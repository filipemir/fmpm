import styled from '@emotion/styled';
import { COLOR_SECONDARY, COLOR_TERNARY, FONT_FAMILY_SANS_SERIF, FONT_FAMILY_SERIF } from 'styles/global';
import React from 'react';
import DogearedTile from 'components/DogearedTile';
import { BookEntry } from '../../models/media';
import format from 'date-fns/format';
import getYear from 'date-fns/getYear';

const Root = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const ModalShadowBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 50%);
`;

const Content = styled.div`
    position: absolute;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Cover = styled.img`
    height: 100%;
    box-shadow: rgba(2, 12, 27, 0.5) 10px 20px 30px 0px;
`;

const Info = styled.div`
    position: relative;
    top: -50%;
    transform: translate(50%, -50%);
`;

const Title = styled.a`
    font-style: italic;
    font-family: ${FONT_FAMILY_SANS_SERIF};
    font-size: 18px;
`;

const Subtitle = styled.div`
    font-family: ${FONT_FAMILY_SANS_SERIF};
    font-size: 14px;
`;

const Author = styled.div`
    margin-top: 0.5em;
    font-style: italic;
    font-family: ${FONT_FAMILY_SERIF};
    color: ${COLOR_SECONDARY};
    font-size: 14px;
`;

const Dates = styled.div`
    font-family: ${FONT_FAMILY_SANS_SERIF};
    color: ${COLOR_TERNARY};
    font-size: 12px;
`;

const getDateRangeString = (book: BookEntry) => {
    const { startDate, endDate } = book,
        sameYear = !!endDate && getYear(startDate) === getYear(endDate),
        startDateStr = format(startDate, sameYear ? 'MMM d' : 'MMM d, yyy'),
        endDateStr = endDate && format(endDate, 'MMM d, yyy');

    return `${startDateStr} to ${endDateStr}`;
};

const BookModal = ({ book, onClose }: { book: BookEntry; onClose?: () => void }) => {
    const { title, subtitle, image, author, url } = book;
    return (
        <Root>
            <ModalShadowBox onClick={() => onClose && onClose()} />
            <Content>
                <Cover src={image} />
                <Info>
                    <DogearedTile maxWidth={'300px'}>
                        <Title href={url} target={'_blank'}>
                            {title}
                        </Title>
                        {subtitle && <Subtitle>{subtitle}</Subtitle>}
                        <Author>by {author}</Author>
                        <Dates>read {getDateRangeString(book)}</Dates>
                    </DogearedTile>
                </Info>
            </Content>
        </Root>
    );
};

export default BookModal;
