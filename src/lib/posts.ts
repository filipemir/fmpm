import fs from 'fs'
import { join } from 'path'
import format from "date-fns/format"
import isValid from "date-fns/isValid"
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'src', 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(slug => /\.mdx$/.test(slug))
}

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  if (isValid(data.date)) {
    data.date = format(data.date, 'yyyyyyyy')
  }

  return { slug: realSlug, data, content }
}

export const getAllPosts = ()  => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}