import { Metadata } from "next";
import { load } from "outstatic/server";
import AppLayout from "@/components/AppLayout";
import Nav from "@/components/client/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import markdownToHtml from "@/lib/markdownToHtml";

export const metadata: Metadata = {
  title: "Services",
  description: "Les services de Viva Tremblant",
};

export default async function Blog() {
  const { allArticles } = await getData()
  // console.log(allArticles);
  console.log("allo");

  return (
    <AppLayout>
        <div>nos Articles</div>
        {allArticles.map((article) => (
          <div key={article.slug}>
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </div>
        ))}      
    </AppLayout>
  );    
}




async function getData() {
  const db = await load()
  

  
  const allArticles = await db
    .find({ collection: 'articles' }, [
      'title',
      'publishedAt',
      'slug',
      'coverImage',
      'description',
      // 'tags'
    ])
    .sort({ publishedAt: -1 })
    .toArray()

  // const allProjects = await db
  //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
  //   .sort({ publishedAt: -1 })
  //   .toArray()

    

  return {

    allArticles

  }
}
