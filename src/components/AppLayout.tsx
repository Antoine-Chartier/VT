"use client";
import Image from "next/image";
import { inter, josefin_sans } from "../lib/fonts";
import Footer from "./Footer";
import Nav from "./Nav";



export default function AppLayout({ children }: Readonly<{ children: React.ReactNode; }>) {



  return (
    <body className={`${josefin_sans.className} flex flex-col min-h-screen bg-light-main dark:bg-dark-main`}>
        <Image
          src="/images/Parc-national-du-Mont-Tremblant.jpg"
          alt="hero image du Mont-Tremblant l'été"
          fill
          className="object-cover z-0"
        />
      <Nav />
        <main className="bg-inherit flex-grow p-main-side">
          {children}
        </main>

      <Footer />
    </body>
  );
}