import React from 'react';

import { RootDiv } from './styles';
import { Technology } from 'models/tech';

export default function TechTag({ technology }: { technology: Technology }) {
    return <RootDiv>{technology}</RootDiv>;
}
