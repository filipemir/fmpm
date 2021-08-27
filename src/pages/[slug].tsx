import {GetStaticProps, GetStaticPaths} from 'next'
import {getAllPosts, getPostBySlug} from "../lib/posts";
import {MDXRemote } from 'next-mdx-remote'
import styled from '@emotion/styled';
import {css} from '@emotion/react';
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
import format from "date-fns/format";

const baseTextStyles = css`
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
`;

const baseHeaderStyles = css`
  ${baseTextStyles};
  max-width: 620px;
  font-weight: 400;
  z-index: 2;
  text-shadow: 1px 2px 0 ${COLOR_BG_ACCENT};
  line-height: 1;
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

const p = styled.p`
  ${baseTextStyles};
`;

const li = styled.li`
  ${baseTextStyles};
`;

const ol = styled.ol`
  ${baseTextStyles};
`;

const ul = styled.ul`
  ${baseTextStyles};
`;

const strong = styled.strong`
  ${baseTextStyles};
  font-weight: 500;
`;

const code = styled.code`
  background-color: ${COLOR_QUATERNARY};
  color: ${COLOR_ACCENT};
  border-radius: 6px;
  padding-left: 0.3ch;
  padding-right: 0.3ch;
  font-weight: 400;
  font-style: normal;
  text-shadow: none;
`;

const hr = styled.hr`
  border-top: 1px solid ${COLOR_QUATERNARY};
  max-width: 500px;
  margin: 20px auto;
`;

export const blockquote = styled.blockquote`
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

export const Root = styled.main`
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

  .gatsby-highlight {
    box-shadow: -10px 10px ${COLOR_QUATERNARY};
    border-radius: 6px;
    max-width: 70ch;
    margin-bottom: 30px;
  }

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

  .footnotes {
    padding: 0;
    font-size: 0.9em;
  }
`;


interface Props {
    title: string
    date: string
    compiledSource: string
}


export default function Doc({ title, date, compiledSource }: Props) {
    return <Root>
        <BlogPostHeader title={title} date={date}/>
        <MDXRemote compiledSource={compiledSource} components={{
            h2,
            h3,
            h4,
            h5,
            p,
            li,
            ol,
            ul,
            strong,
            code,
            blockquote,
            hr
        }}/>
    </Root>
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const slug = params?.slug || "hello-world"
    console.log("static props")
    const { date, ...rest } = await getPostBySlug(Array.isArray(slug) ? slug[0] : slug)

    return {
        props: {
            ...rest,
            date: format(new Date(date), 'MMMM d, yyy')
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    console.log("static paths")
    const posts = await getAllPosts(),
        paths = posts.map(p => ({params: {slug: p.slug}}))

    return {
        paths,
        fallback: false
    }
}