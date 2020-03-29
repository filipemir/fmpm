import React from 'react';

export default function Span({ isWelcome }: { isWelcome: boolean }) {
    return <span>{isWelcome ? 'Hello world!' : 'Goodbye world!'}</span>;
}
