"use client";
import Image from "next/image";
import { inter, josefin_sans } from "../lib/fonts";
import Footer from "./Footer";
import Nav from "./client/Nav";
import { useEffect, useRef, useState } from "react";



export default function AppLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [mainHeight, setMainHeight] = useState('auto');

  useEffect(() => {
    const handleResize = () => {
      if (footerRef.current) {
        const footerHeight = footerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        setMainHeight(`${viewportHeight + footerHeight}px`);
      }
    };

    handleResize(); // Call once to set initial height
    window.addEventListener('resize', handleResize); // Update height when window size changes

    return () => {
      // Clean up event listener when component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <body className={`${josefin_sans.className} flex flex-col min-h-screen bg-light-main dark:bg-dark-main`}>
        <Image
          src="/images/Parc-national-du-Mont-Tremblant.jpg"
          alt="hero image du Mont-Tremblant l'été"
          fill
          className="object-cover z-0"
        />
      <Nav />
        <main style={{ height: mainHeight }}  className="bg-inherit flex-grow p-main-side">
          {children}
        </main>
      <Footer ref={footerRef} />
    </body>
  );
}