"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useEffect, useRef, useState } from "react";

export default function Index({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scrolling, setScrolling] = useState(false);
  const [position, setPosition] = useState(0);
  const delta = 5;
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolling) {
        setScrolling(true);
      }
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrolling(false);
        scrollFunction();
      }, 150);
    };

    const scrollFunction = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const header = headerRef.current;
      const hh = header ? header.offsetHeight : 0;
      const dh = document.documentElement.scrollHeight;
      const wh = window.innerHeight;

      if (Math.abs(position - st) <= delta) return;

      if (st > position && st > hh) {
        if (header && !header.classList.contains("scroll-up")) {
          header.classList.remove("scroll-down");
          header.classList.add("scroll-up");
        }
      } else if (st + wh < dh) {
        if (header && !header.classList.contains("scroll-down")) {
          header.classList.remove("scroll-up");
          header.classList.add("scroll-down");
        }
      }
      setPosition(st);
    };

    let scrollTimeout: NodeJS.Timeout;

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling, position]);

  return (
    <div>
      <div ref={headerRef} className="header-to-hide scroll-down">
        <Header />
      </div>
      {children}
      <ToastContainer />
      <Footer />
    </div>
  );
}
