import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import FakeBrowser from './index';
import { Project, ProjectId } from 'models/project';

function useProjectFixedImage(project: Project) {
    const data = useStaticQuery(graphql`
        query {
            sbs: file(relativePath: { eq: "sbs-screen.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            musicabulary: file(relativePath: { eq: "musicabulary-screen.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            bpd: file(relativePath: { eq: "bpd-screen.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tbw: file(relativePath: { eq: "tbw-screen.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    switch (project.id) {
        case ProjectId.BPD:
            return data.bpd.childImageSharp.fluid;
        case ProjectId.SBS:
            return data.sbs.childImageSharp.fluid;
        case ProjectId.MUSICABULARY:
            return data.musicabulary.childImageSharp.fluid;
        case ProjectId.TBW:
            return data.tbw.childImageSharp.fluid;
    }
}

export default function ConnectedFakeBrowser({ project, active }: { project: Project; active?: boolean }) {
    const img = useProjectFixedImage(project);

    return <FakeBrowser active={active} image={<Img alt={project.name} fluid={img} />} />;
}
