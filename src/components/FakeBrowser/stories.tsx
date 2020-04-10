import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import tbwScreen from 'images/tbw-screen.png';
import sbsScreen from 'images/sbs-screen.png';
import musicabularyScreen from 'images/musicabulary-screen.png';
import bpdScreen from 'images/bpd-screen.png';

import FakeBrowser from './index';

const images = [tbwScreen, sbsScreen, musicabularyScreen, bpdScreen];

storiesOf(`FakeBrowser`, module).add(`default`, () => {
    const img = select('Image', images, tbwScreen);
    return <FakeBrowser img={img} />;
});
