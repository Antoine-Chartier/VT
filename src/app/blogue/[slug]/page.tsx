import Image from 'next/image'
import { Metadata } from 'next'
import { absoluteUrl } from '@/lib/utils'
import { OstDocument } from 'outstatic'
// import Header from '@/components/Header'
import markdownToHtml from '@/lib/markdownToHtml'
import { getDocumentSlugs, load } from 'outstatic/server'
import DateFormatter from '@/components/DateFormatter'
import { notFound } from 'next/navigation'
import MDXComponent from '@/components/mdx/MDX-component'
import MDXServer from '@/lib/mdx-server'

type Post = {
  tags: { value: string; label: string }[]
} & OstDocument

interface Params {
  params: {
    slug: string
  }
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const post = await getData(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(`/posts/${post.slug}`),
      images: [
        {
          url: absoluteUrl(post?.coverImage || '/images/og-image.png'),
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: absoluteUrl(post?.coverImage || '/images/og-image.png')
    }
  }
}

export default async function Post(params: Params) {
  const post = await getData(params)
  // console.log(post)
  console.log("post")
  return (
    <>
      <h1 className='[font-size:_clamp(1em,3vw,3em)] font-semibold '>{post.title}</h1>
      <div className="hidden md:block md:mb-12 text-slate-600 dark:text-slate-400">
        Écrit le <DateFormatter dateString={post.publishedAt} /> par{" "}
        {post?.author?.name || ""}.
      </div>
      <div className="w-full mb-2 md:mb-4 sm:mx-0 ">
      {Array.isArray(post?.tags)
        ? post.tags.map(({ label }) => (
            <span
              key={label}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 mt-4"
            >
              {label}
            </span>
          ))
        : null}
        <div className='relative w-full h-52'>
          {post?.coverImage && (
            <Image
              alt={post.title}
              src={post.coverImage}
              fill
              className="object-cover object-center rounded-md border"
              priority
            />
          )}
        </div>
      </div>
      <div className='prose min-w-full'>
        <MDXComponent content={post.content} />
      </div>
    </>
  );
}

async function getData({ params }: Params) {
  const db = await load()

  const post = await db
    .find<Post>({ collection: 'articles', slug: params.slug }, [
      'title',
      'publishedAt',
    //   'description',
      'slug',
      'author',
      'content',
      'coverImage',
      'tags'
    ])
    .first()

  if (!post) {
    notFound()
  }

  // const content = await markdownToHtml(post.content)
  const content = await MDXServer(post.content);

  return {
    ...post,
    content
  }
}

/// Generate static paths for all posts in the collection 'articles' 
export async function generateStaticParams() {
  const posts = getDocumentSlugs('articles')
  return posts.map((slug) =>  ({ slug }) )
}