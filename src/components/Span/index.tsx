import React from 'react';
import { Container } from './styles';

export default function Span({ isWelcome }: { isWelcome: boolean }) {
    return (
        <Container>{isWelcome ? 'Hello world!' : 'Goodbye world!'}</Container>
    );
}
