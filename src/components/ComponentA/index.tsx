import React from 'react';
import { Root } from './styles';

export default function ComponentA({ isWelcome }: { isWelcome: boolean }) {
    return <Root>{isWelcome ? 'Hello world!' : 'Goodbye world!'}</Root>;
}
