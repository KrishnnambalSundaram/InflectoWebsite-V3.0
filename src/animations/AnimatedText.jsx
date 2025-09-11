'use client';
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useInView } from "framer-motion";

gsap.registerPlugin(SplitText);

const LineFadeText = ({ children, className = "", once = true }) => {
  const containerRef = useRef(null);
  // margin lets you trigger earlier/later
  const [isAnimateOnce,setIsAnimateOnce] = useState(false)
    useEffect(()=>{
      setTimeout(() => {
      setIsAnimateOnce(true)
        
      }, 800);
    },[])
  const isInView = useInView(containerRef, { isAnimateOnce, margin: "-100px" }); 

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
      split.revert();
    };
  }, [isInView]);

  return (
    <div ref={containerRef} className={`overflow-hidden leading-relaxed ${className}`}>
      {children}
    </div>
  );
};

export default LineFadeText;
