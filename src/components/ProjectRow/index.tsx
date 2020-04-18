import React from 'react';
import useMedia from 'use-media';
import { ProjectRowProps } from 'components/ProjectRow/common/props';
import ProjectRowMobile from 'components/ProjectRow/Mobile';
import ProjectRowDesktop from 'components/ProjectRow/Desktop';

export default function ProjectRow(props: ProjectRowProps) {
    const isMobile = useMedia({ maxWidth: '900px' });

    return isMobile ? <ProjectRowMobile {...props} /> : <ProjectRowDesktop {...props} />;
}
