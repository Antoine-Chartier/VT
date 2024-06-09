import { Metadata } from "next";
import { load } from "outstatic/server";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import markdownToHtml from "@/lib/markdownToHtml";
import CarteArticle from "@/components/CarteArticle";

export const metadata: Metadata = {
  title: "Services",
  description: "Les services de Viva Tremblant",
};

export default async function Blog() {
  const { allArticles } = await getData()

  // console.log("allo");
  // console.log(allArticles);

  return (
    <>
        <div>Qu&apos;est-ce qui se passe à Mont-Tremblant.</div>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
        {allArticles.map((article) => (
          <CarteArticle key={article.slug} Article={article} />
        ))}
        </ul>
    </>
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
      'tags'
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
