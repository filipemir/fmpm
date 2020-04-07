import React from 'react';
import Emoji from 'a11y-react-emoji';

import { Root, TextSpan, EmojiSpan, SlashDiv } from './styles';
import Underline from 'images/underline.svg';

export default function Header({ text, emoji }: { text: string; emoji?: string }) {
    return (
        <Root>
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
