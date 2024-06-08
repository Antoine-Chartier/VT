"use client"
import { setThemeLight, setThemeDark, setThemeSystem } from '@/lib/theme';
import { usePathname } from "next/navigation";
import Link from "next/link";
import SVGComponent from "./SVGComponent";
import { josefin_sans } from "../lib/fonts";
import Hamburger from "./Hamburger";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  Variants,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export default function Nav() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
      setHamburgerOpen(false);
    } else {
      setHidden(false);
    }
  });
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const variants: Variants = {
    closed: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 0.1,
      },
    },
    open: {
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
    fadeOut: { opacity: 0, transition: { duration: 0.05 } },
    fadeIn: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.25,
      },
    },
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-120%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="flex flex-row md:p-main-clamp z-30 sticky top-0"
    >
      <div className="w-full bg-main">
        <div className="flex justify-between text-xl p-8">
          <div>
            <Link href={"/"}>
              <span className="flex">
                <div className="flex flex-col justify-center w-4 mr-2">
                  <SVGComponent />
                </div>
                <span className={`${josefin_sans.className} mt-1 font-semibold`}>Viva Tremblant</span>
              </span>
            </Link>
          </div>
          <div className="md:flex gap-8 hidden">
            <div className="flex flex-col justify-center mt-1"><Link href={"/services"}>Services</Link></div>
            <div className="flex flex-col justify-center mt-1"><Link href={"/mission"}>La mission</Link></div>
            <div className='flex-col justify-center mt-1 hidden dark:flex'><button onClick={setThemeLight}><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 mr-2 "><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-slate-400"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-slate-400 "></path></svg></button></div>
            <div className='flex flex-col justify-center mt-1 dark:hidden'><button onClick={setThemeDark}><svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2 "><path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-transparent"></path><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-slate-400"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-slate-400"></path></svg></button></div>
          </div>
          <div className="flex gap-8 md:hidden">
            <div onClick={toggleHamburger}>
              <Hamburger isOpen={hamburgerOpen} />
            </div>
          </div>
        </div>
        <div className="relative bg-inherit ">
          <AnimatePresence>
            {hamburgerOpen && (
              <motion.div
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                whileInView="open"
                className={`md:hidden text-xl w-full absolute bg-inherit -top-1`}
              >
                <motion.div
                  variants={variants}
                  initial="fadeOut"
                  animate="fadeIn"
                  exit="fadeOut"
                  className="flex flex-col gap-6 m-8"
                >
                  <motion.div className="self-center"><Link href={"/services"}>Services</Link></motion.div>
                  <motion.div className="self-center"><Link href={"/mission"}>La mission</Link></motion.div>      


                  <motion.div className="self-center hidden dark:block"><button onClick={setThemeLight}><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 mr-2 "><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-slate-400"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-slate-400 "></path></svg></button></motion.div>
                  <motion.div className="self-center dark:hidden"><button onClick={setThemeDark}><svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2 "><path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-transparent"></path><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-slate-400"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-slate-400"></path></svg></button></motion.div>
                  {/* <motion.div className="self-center"><button onClick={setThemeSystem}>Systeme</button></motion.div> */}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
