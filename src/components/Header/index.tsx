import React from 'react';
import Emoji from 'a11y-react-emoji';

import { RootDiv, TextSpan, EmojiSpan, SlashDiv } from './styles';
import { ReactSVG } from 'react-svg';
import underline from 'images/underline.svg';

export default function Header({ text, emoji }: { text: string; emoji?: string }) {
    return (
        <RootDiv>
            {emoji && (
                <EmojiSpan>
                    <Emoji symbol={emoji} />
                </EmojiSpan>
            )}
            <TextSpan>{text}</TextSpan>
            <SlashDiv>
                <ReactSVG src={underline} />
            </SlashDiv>
        </RootDiv>
    );
}
