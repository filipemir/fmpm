import React from 'react';

import { RootWithDropShadow, Wrapper, ExternalLinkSvg } from './styles';
import GithubSvg from 'images/github.svg';
import LinkedInSvg from 'images/linkedin.svg';
import EnvelopeSvg from 'images/envelope.svg';

export default function PersonalLinks() {
    return (
        <RootWithDropShadow>
            <Wrapper>
                <ExternalLinkSvg href={'https://github.com/filipemir'} target={'_blank'} rel='noopener noreferrer'>
                    <GithubSvg />
                </ExternalLinkSvg>
                <ExternalLinkSvg href={'https://linkedin.com/in/filipemir'} target={'_blank'} rel='noopener noreferrer'>
                    <LinkedInSvg />
                </ExternalLinkSvg>
                <ExternalLinkSvg href={'mailto:filipe@fmpm.dev'} target={'_blank'} rel='noopener noreferrer'>
                    <EnvelopeSvg />
                </ExternalLinkSvg>
            </Wrapper>
        </RootWithDropShadow>
    );
}
