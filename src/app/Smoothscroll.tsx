"use client";
import React, { useEffect, useRef, useState } from "react";
import Maincomponent from "./Maincomponent";
import AOS from "aos";
import "aos/dist/aos.css";

function Smoothscroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const currentY = useRef(0);
  const targetY = useRef(0);
  const [speed, setSpeed] = useState(0.07);
  const [innerwidth, setinnerwidth] = useState<number>(0); // Initialize with 0

  useEffect(() => {
    // Set initial width after component mounts (client-side only)
    setinnerwidth(window.innerWidth);
    
    const updateSpeed = () => {
      setSpeed(window.innerWidth < 768 ? 1 : 0.07);
      setinnerwidth(window.innerWidth);
    };
    
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  useEffect(() => {
    // Only run smooth scroll on desktop
    if (innerwidth < 768) return;
    
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    
    const smoothScroll = () => {
      targetY.current = window.pageYOffset;
      currentY.current += (targetY.current - currentY.current) * speed;
      wrapper.style.transform = `translate3d(0, -${currentY.current}px, 0)`;
      requestRef.current = requestAnimationFrame(smoothScroll);
    };

    requestRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      wrapper.style.transform = "";
    };
  }, [speed, innerwidth]); // Add dependencies

  useEffect(() => {
    // Only run these effects on desktop
    if (innerwidth < 768) return;
    
    const style = document.createElement("style");
    style.textContent = `
      .page-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        will-change: transform;
      }
    `;
    document.head.appendChild(style);
    
    const calculateHeight = () => {
      const wrapper = wrapperRef.current;
      if (wrapper) {
        const height = wrapper.scrollHeight;
        document.body.style.height = `${height}px`;
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(calculateHeight);
    
    window.addEventListener("resize", calculateHeight);
    window.addEventListener("load", calculateHeight);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", calculateHeight);
      window.removeEventListener("load", calculateHeight);
      document.body.style.height = "";
    };
  }, [innerwidth]); // Add innerwidth as dependency

  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);

  return (
    <div>
      {innerwidth < 768
        ? <div className="overflow-hidden" style={{ scrollBehavior: "smooth" }}>
            <Maincomponent />
          </div>
        : <div className="page-wrapper" ref={wrapperRef}>
            <Maincomponent />
          </div>}
    </div>
  );
}

export default Smoothscroll;