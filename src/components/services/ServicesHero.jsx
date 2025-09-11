import React from "react";
import HeroImage from "../../assets/services/services-hero-bg.svg";
import HeroVideo from "../../assets/services/service-wave.mp4";

const ServicesHero = () => {
  return (
    <section className="relative w-full bg-[#F7F7F7] py-32 md:py-50 overflow-hidden">
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Services Hero"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] object-contain pointer-events-none select-none"
      />

      {/* Video Overlay */}
      <video
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute pointer-events-none select-none top-[-5vh] md:top-[-10vh] lg:top-[-15vh] xl:top-[-25vh]"
        style={{
          width: "100vw",
          maxWidth: "1632px",
          height: "auto",
          left: "25vw",
          opacity: 1,
          transform: "rotate(34.2deg)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Content */}
      <div className="relative container flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl leading-snug manrope-xbold overflow-hidden">
            <span className="inner-shadow-text-service overflow-hidden">End-To-End</span>{" "}
            <span className="text-[#1D1D1D]">Services For</span>
            <br />
            <span className="text-[#1D1D1D]">Your Digital Journey</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
