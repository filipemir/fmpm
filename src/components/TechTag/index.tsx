import React from 'react';

import { RootDiv } from './styles';
import { Tech } from 'models/tech';

export default function TechTag({ technology }: { technology: Tech }) {
    return <RootDiv>{technology}</RootDiv>;
}
