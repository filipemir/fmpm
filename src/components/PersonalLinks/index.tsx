import React from 'react';

import { RootWithDropShadow, Wrapper, ExternalLinkSvg } from './styles';
import GithubSvg from 'images/github.svg';
import LinkedInSvg from 'images/linkedin.svg';
import EnvelopeSvg from 'images/envelope.svg';
import { GITHUB_LINK, LINKEDIN_LINK, PERSONAL_EMAIL } from 'data/personal';

export default function PersonalLinks() {
    return (
        <RootWithDropShadow>
            <Wrapper>
                <ExternalLinkSvg
                    href={GITHUB_LINK}
                    target={'_blank'}
                    rel='noopener noreferrer'
                >
                    <GithubSvg />
                </ExternalLinkSvg>
                <ExternalLinkSvg
                    href={LINKEDIN_LINK}
                    target={'_blank'}
                    rel='noopener noreferrer'
                >
                    <LinkedInSvg />
                </ExternalLinkSvg>
                <ExternalLinkSvg
                    href={`mailto:${PERSONAL_EMAIL}`}
                    target={'_blank'}
                    rel='noopener noreferrer'
                >
                    <EnvelopeSvg />
                </ExternalLinkSvg>
            </Wrapper>
        </RootWithDropShadow>
    );
}
