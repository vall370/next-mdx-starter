import { Metadata } from 'next'
import fs from 'node:fs/promises'
import path from 'node:path'

export type BlogPostMetadata = Metadata & {
  title: string
  description: string
  date: Date
  tags: string[]
}

export type BlogPostData = {
  slug: string
  metadata: BlogPostMetadata
  component: React.FC
}

export const getBlogPost = async (slug: string): Promise<BlogPostData> => {
  const post = await import(`@/blogs/${slug}.mdx`)
  const data = post.metadata

  if (!data.title || !data.description) {
    throw new Error(`Missing some required metadata fields in: ${slug}`)
  }

  const metadata: BlogPostMetadata = {
    ...data,
    date: new Date(data.date),
    updatedDate: data.updatedDate ? new Date(data.updatedDate) : undefined,
  }

  return {
    slug,
    metadata,
    component: post.default,
  }
}

export const getBlogPostMetadata = async (
  slug: string,
): Promise<BlogPostMetadata> => {
  const post = await getBlogPost(slug)
  return post.metadata
}

export const listBlogPosts = async (): Promise<
  Omit<BlogPostData, 'component'>[]
> => {
  const files = await fs.readdir(path.join(process.cwd(), 'src/blogs'))

  return Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '')
      const { metadata } = await getBlogPost(slug)
      return {
        slug,
        metadata,
      }
    }),
  )
}

type MDXContent = string | null;

const mdxContentMap: Record<string, string> = {
  'hemforsakring': `
# Hemförsäkring

En hemförsäkring är grundskyddet för dig och ditt hem. Den täcker bland annat stöld och skadegörelse, brand-, vatten- och naturskador.

## Vad ingår?

* Egendomsskydd
* Reseskydd
* Ansvarsförsäkring
* Rättsskydd
* Överfallsskydd
  `,
  // Add more MDX content for other insurance types
};

export async function getMdxBySlug(slug: string): Promise<MDXContent> {
  // Simulate async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mdxContentMap[slug] || null);
    }, 100);
  });
}
