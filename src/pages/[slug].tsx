import { GetStaticProps, GetStaticPaths } from 'next'
import {getAllPosts, getPostBySlug} from "../lib/posts";

export default function Doc({ content }: { content: string }) {
  return <div>{content}</div>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug || "hello-world"
  const post = getPostBySlug(Array.isArray(slug) ? slug[0] : slug)

  return {
    props: {
      ...post
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(),
      paths = posts.map(p => ({ params: { slug: p.slug }}))

  return {
    paths,
    fallback: false
  }
}