import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts, getPostBySlug } from '../lib/posts';
import { MDXRemote } from 'next-mdx-remote';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import {
    COLOR_ACCENT,
    COLOR_BG_ACCENT,
    COLOR_PRIMARY,
    COLOR_QUATERNARY,
    FONT_FAMILY_SERIF,
    MOBILE_MAX_WIDTH,
    PADDING_TOP_PAGE
} from 'styles/global';
import BlogPostHeader from '../components/BlogPostHeader';
import format from 'date-fns/format';
import CodeBlock from '../components/CodeBlock';
import Image, { ImageProps } from 'next/image';
import SEO from 'components/SEO';

const baseTextStyles = css`
    max-width: 650px;
    margin-right: auto;
    margin-left: auto;
`;

const baseHeaderStyles = css`
    ${baseTextStyles};
    font-weight: 400;
    z-index: 2;
    text-shadow: 1px 2px 0 ${COLOR_BG_ACCENT};
    line-height: 1;
    font-style: italic;
`;

const h2 = styled.h2`
    ${baseHeaderStyles};
    font-size: 30px;
    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        font-size: 26px;
    }
`;

const h3 = styled.h3`
    ${baseHeaderStyles};
    font-size: 24px;
`;

const h4 = styled.h3`
    ${baseHeaderStyles};
    font-size: 22px;
`;

const h5 = styled.h3`
    ${baseHeaderStyles};
    font-size: 20px;
`;

const p = styled.div`
    ${baseTextStyles};
`;

const li = styled.li`
    ${baseTextStyles};
    margin-bottom: 5px;

    &::marker {
        font-style: italic;
        color: ${COLOR_ACCENT};
    }

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        margin-left: 0;
    }
`;

const ol = styled.ol`
    ${baseTextStyles};

    li::marker {
        font-size: 14px;
    }

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        padding-inline-start: 20px;
    }
`;

const ul = styled.ul`
    ${baseTextStyles};

    li::marker {
        font-size: 10px;
    }

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        padding-inline-start: 20px;
    }
`;

const strong = styled.strong`
    ${baseTextStyles};
    font-weight: 500;
`;

const inlineCode = styled.code`
    background-color: ${COLOR_QUATERNARY};
    color: ${COLOR_ACCENT};
    border-radius: 6px;
    padding: 3px 0.5ch;
    font-weight: 400;
    font-style: normal;
    text-shadow: none;
    font-size: 90%;
`;

const hr = styled.hr`
    border-top: 1px solid ${COLOR_QUATERNARY};
    max-width: 500px;
    margin: 20px auto;
`;

const blockquote = styled.blockquote`
    ${baseTextStyles};
    font-style: italic;
    position: relative;
    font-size: 1.1em;
    padding: 15px 30px;
    box-sizing: border-box;
    line-height: 1.4;
    max-width: 650px;
    z-index: 0;
    background-color: ${COLOR_QUATERNARY};
    border-radius: 6px;

    * {
        max-width: unset;
        margin: 0;
    }

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
        padding: 10px;
    }

    &:before {
        z-index: -10;
        top: -40px;
        left: -10px;
        position: absolute;
        content: '“';
        color: #bc412480;
        font-size: 80px;
        text-shadow: 2px 4px 0 ${COLOR_BG_ACCENT};
    }
`;

const Root = styled.main`
    font-family: ${FONT_FAMILY_SERIF};
    color: ${COLOR_PRIMARY};
    letter-spacing: -0.02em;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
    margin: 0 auto;
    padding: ${PADDING_TOP_PAGE}px 10px;
    min-height: 100vh;
    max-width: 90ch;

    > div {
        margin: 1em auto;
    }

    figcaption {
        ${baseTextStyles};
        text-align: center;
        font-size: 0.9em;
        font-style: italic;
        margin-top: -15px;
    }

    a.anchor {
        svg {
            fill: ${COLOR_ACCENT};
        }

        :after {
            display: none;
        }
    }

    .footnote-ref {
        font-size: 14px;
        margin-right: 0.2ch;
    }

    .footnotes {
        font-size: 0.9em;

        hr {
            margin: 40px auto;
        }

        li {
            margin-bottom: 5px;
        }

        .footnote-backref {
            visibility: hidden;

            :after {
                content: ' ^';
                visibility: visible;
                position: absolute;
                left: 3px;
            }
        }
    }
`;

interface Props {
    title: string;
    date: string;
    compiledSource: string;
}

const img = (props: ImageProps) => (
    <Image alt={props.alt || ''} loading={'eager'} {...props} />
);

export default function Doc({ title, date, compiledSource }: Props) {
    return (
        <Root>
            <SEO pageTitle={title} />
            <BlogPostHeader title={title} date={date} />
            <MDXRemote
                compiledSource={compiledSource}
                components={{
                    h2,
                    h3,
                    h4,
                    h5,
                    p,
                    li,
                    ol,
                    ul,
                    strong,
                    inlineCode,
                    blockquote,
                    hr,
                    img,
                    pre: CodeBlock
                }}
            />
        </Root>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug || 'hello-world';
    const { date, ...rest } = await getPostBySlug(
        Array.isArray(slug) ? slug[0] : slug
    );

    return {
        props: {
            ...rest,
            date: format(new Date(date), 'MMMM d, yyy')
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts(),
        paths = posts.map((p) => ({ params: { slug: p.slug } }));

    return {
        paths,
        fallback: false
    };
};
