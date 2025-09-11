'use client';
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useInView } from "framer-motion";

gsap.registerPlugin(SplitText);

const LineFadeText = ({ children, className = "", once = true }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once, margin: "-100px" }); 
  // margin lets you trigger earlier/later

  useEffect(() => {
    if (!containerRef.current || !isInView) return;

    const split = new SplitText(containerRef.current.querySelectorAll("p"), {
      type: "lines",
      linesClass: "lineChild",
    });

    gsap.fromTo(
      split.lines,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 0.8,
        stagger: 0.2,
      }
    );

    return () => {
      split.revert(); // clean up SplitText
    };
  }, [isInView]);

  return (
    <div ref={containerRef} className={`overflow-hidden leading-relaxed ${className}`}>
      {children}
    </div>
  );
};

export default LineFadeText;
