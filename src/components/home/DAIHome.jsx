import React from "react";
import DAIHomeGif from "../../assets/home/home-dai.gif";
import { Link } from "react-router-dom";
import { TextFade } from "../../animations/TextFade";
import AnimatedImage from "../../animations/AnimatedImage";

const DAIHome = () => {
  return (
    <section className="relative w-full py-10 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 bg-white overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left z-10">
        <TextFade
          direction="up"
          className="pt-0 pb-5 flex-col flex"
          >
            <h1 className="text-4xl md:text-5xl manrope-bold text-[#4B371C]">
              DAI Labs
            </h1>
            <p className="mt-6 mb-10 text-[#202020] ibm-plex-sans-normal text-base md:text-lg leading-relaxed max-w-2xl">
              We enable rapid deployment, improved agility, and smarter automations
              to customer business by combining AI, Data, and Low-code.
            </p>
            <Link className="cursor-pointer bg-[#E7E62A] text-black px-6 py-3 mt-10 rounded-full ibm-plex-sans-normal transition">
              View More
            </Link>
        </TextFade>
      </div>

      {/* Right GIF */}
      <div className="flex-1 relative w-full h-[250px] md:h-auto flex items-center justify-center">
        <AnimatedImage
          src={DAIHomeGif}
          alt="Demo GIF"
          className="w-4/5 sm:w-2/3 md:w-3/4 lg:w-[500px] xl:w-[570px] max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default DAIHome;
