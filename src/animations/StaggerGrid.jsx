import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StaggerGrid = ({ children, className = "", once = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll(".stagger-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          scale: 0,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "back.out(1)",
          duration: 0.5,
          stagger: {
            amount: 1, // total time for all
            from: "left", // start from center and go outward
          },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: once ? "play none none none" : "play reverse play reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`grid ${className}`}>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              ...child.props,
              className: [
                child.props.className, // keep original hover, Tailwind classes
                "stagger-card"         // add gsap class
              ].filter(Boolean).join(" ")

            })
          : child
      )}
    </div>
  );
};

export default StaggerGrid;
