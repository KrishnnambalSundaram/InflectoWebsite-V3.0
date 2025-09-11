import React from "react";
import BlogHeroBg from "../../assets/blog/blog-bg-hero.svg";

const HeroBlog = () => {
  return (
    <section
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${BlogHeroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl manrope-xbold">
          Our <span className="inner-shadow-text">Blogs</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl ibm-plex-sans-semibold text-gray-800">
          Insights, Innovation & Intelligence — The Inflecto Blog
        </p>
        <p className="mt-2 text-sm md:text-sm ibm-plex-sans-normal max-w-md">
          Stay updated with the latest on Informatica, AI automation, RPA, and enterprise digital transformation.
        </p>
      </div>
    </section>
  );
};

export default HeroBlog;
