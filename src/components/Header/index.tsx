import React from 'react';
import Emoji from 'a11y-react-emoji';

import { Root, TextSpan, EmojiSpan, SlashDiv } from './styles';
import Underline from 'images/underline.svg';

export default function Header({
    text,
    emoji,
    fontSize = 30
}: {
    text: string;
    emoji?: string;
    fontSize?: number;
}) {
    return (
        <Root style={{ fontSize }}>
            {emoji && (
                <EmojiSpan>
                    <Emoji symbol={emoji} />
                </EmojiSpan>
            )}
            <TextSpan>{text}</TextSpan>
            <SlashDiv>
                <Underline />
            </SlashDiv>
        </Root>
    );
}
