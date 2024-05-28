import Image from 'next/image'
import { Metadata } from 'next'
import { absoluteUrl } from '@/lib/utils'
import { OstDocument } from 'outstatic'
// import Header from '@/components/Header'
import markdownToHtml from '@/lib/markdownToHtml'
import { getDocumentSlugs, load } from 'outstatic/server'
import DateFormatter from '@/components/DateFormatter'
import { notFound } from 'next/navigation'

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
  console.log(post)
  console.log("post")
  return (
        <>
            <h1>{post.title}</h1>
            <div className="relative mb-2 md:mb-4 sm:mx-0 w-full h-52 md:h-96">
            {post?.coverImage && (
              <Image
                alt={post.title}
                src={post.coverImage}
                layout="fill"
                className="object-cover object-center"
                priority
              />
            )}
            </div>
            <div>
              <p> {post?.content || ''} </p>
            </div>
        </>
  )
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
    //   'tags'
    ])
    .first()

  if (!post) {
    notFound()
  }

  const content = await markdownToHtml(post.content)

  return {
    ...post,
    content
  }
}

// This function gets called at build time on server-side. It won't be called on client-side.
// It allows you to fetch data and pre-render the page. This is useful for SEO purposes.
// export async function getStaticPaths() {
//   const paths = await generateStaticParams();
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function generateStaticParams() {
  const posts = getDocumentSlugs('articles')
  return posts.map((slug) =>  ({ slug }) )
}