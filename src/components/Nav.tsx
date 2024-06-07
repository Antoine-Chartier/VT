"use client"
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
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
