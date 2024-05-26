import { getDocumentSlugs } from "outstatic/server"


export default async function PagesFetch() {
    const pages = getDocumentSlugs('pages')
    if (pages.length === 0) {
        return [];
      }
      return [{ slug: pages[0] }];
  }





  