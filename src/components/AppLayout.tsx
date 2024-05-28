
import { inter, josefin_slab } from "../lib/fonts";
import Footer from "./Footer";
import Nav from "./client/Nav";



export default function AppLayout({ children}: Readonly<{children: React.ReactNode;}>) {
  return (
      <body className={josefin_slab.className + " flex flex-col min-h-screen"}>
        <Nav />
          <main className="bg-inherit p-[_clamp(1em,6vw,10em)]" >
            {children}
          </main>
        <Footer />
      </body>
  );
}
