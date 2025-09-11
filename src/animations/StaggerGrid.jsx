import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StaggerGrid = ({ children, className = "", once = false }) => {
  const containerRef = useRef(null);
  const [isAnimateOnce,setIsAnimateOnce] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
    setIsAnimateOnce(true)
      
    }, 1000);
  },[])
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll(".stagger-card");

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "back.out(1)",
            duration: 0.5,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card, 
              start: "top 95%",  
              toggleActions: isAnimateOnce
                ? "play none none none"
                : "play reverse play reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isAnimateOnce]);

  return (
    <div ref={containerRef} className={`grid ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              ...child.props,
              className: [child.props.className, "stagger-card"]
                .filter(Boolean)
                .join(" "),
            })
          : child
      )}
    </div>
  );
};

export default StaggerGrid;
