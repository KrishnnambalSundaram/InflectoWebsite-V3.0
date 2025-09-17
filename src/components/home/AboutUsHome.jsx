import React, { useState } from "react";
import AboutUsImage from "../../assets/aboutUs/about-us.svg";
import HomeAboutBackgorund from "../../assets/home/home-aboutus-background.svg";
import InflectoIcon from "../../assets/inflecto/inflecto-icon.svg"
import { Link } from "react-router-dom";
import { TextFade } from "../../animations/TextFade";
import AnimatedImage from "../../animations/AnimatedImage";
const AboutUsHome = () => {
    const [clicked,setClicked] = useState(false);
  return (
    <section
      style={{ backgroundImage: `url(${HomeAboutBackgorund})`, backgroundSize:'cover' }}
      className="py-10 md:py-20 flex bg-cyan-100 flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 relative overflow-hidden"
    >
      {/* Left: Image */}
      <section className="relative w-[90%] md:w-[500px] lg:w-[500px] xl:w-[550px]
            rounded-4xl mt-5 lg:mt-0 overflow-hidden group mx-auto">
        {/* Background Image */}
        <AnimatedImage
            onClick={() => setClicked(!clicked)}
            src={AboutUsImage}
            alt="Team working"
            className="w-full h-full object-contain"
        />

        {/* Overlay */}
        {/* <div
            className={`absolute rounded-3xl mx-2 my-4 bottom-0 left-0 right-0 h-1/2 bg-white/95
            shadow-[0_0_60px_80px_rgba(255,255,255,0.9),0_0_40px_40px_rgba(255,255,255,0.6)]
            flex items-center justify-center
            opacity-0 group-hover:opacity-100
            ${clicked ? "opacity-100" : "opacity-0"}
            transition-opacity duration-500`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute flex items-center justify-center 
                bg-white/95 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 
                rounded-full shadow-[0_0_90px_90px_rgba(255,255,255,0.6)] z-50">
                <img src={InflectoIcon} alt="inflecto icon" className="w-2/3 h-2/3" />
            </div>

            <div className="absolute w-1/2 h-1/2 left-0 top-0 flex flex-col items-center justify-center z-100">
                <span className="text-lg sm:text-xl md:text-2xl manrope-semibold text-[#4B371C]">
                100+
                </span>
                <span className="text-sm sm:text-base md:text-lg ibm-plex-sans-regular text-[#4B371C]">
                Projects
                </span>
            </div>

            <div className="absolute w-1/2 h-1/2 top-0 right-0 flex flex-col items-center justify-center z-100">
                <span className="text-lg sm:text-xl md:text-2xl manrope-semibold text-[#4B371C]">
                10+
                </span>
                <span className="text-sm sm:text-base md:text-lg ibm-plex-sans-regular text-[#4B371C]">
                POCs
                </span>
            </div>

            <div className="absolute w-1/2 h-1/2 right-0 bottom-0 flex flex-col items-center justify-center z-100">
                <span className="text-lg sm:text-xl md:text-2xl manrope-semibold text-[#4B371C]">
                70+
                </span>
                <span className="text-sm sm:text-base md:text-lg ibm-plex-sans-regular text-[#4B371C]">
                Clients
                </span>
            </div>

            <div className="absolute w-1/2 h-1/2 bottom-0 left-0 flex flex-col items-center justify-center z-100">
                <span className="text-lg sm:text-xl md:text-2xl manrope-semibold text-[#4B371C]">
                4
                </span>
                <span className="text-sm sm:text-base md:text-lg ibm-plex-sans-regular text-[#4B371C]">
                MVPs Launched
                </span>
            </div>

            <div className="absolute w-full h-full flex items-center justify-center z-0 pointer-events-none">
                <div
                  className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-[2px] md:w-[3px]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, rgba(255,255,255,0.9) 0 8px, #4B371C 8px 18px)",
                  }}
                />

                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#4B371C]" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#4B371C]" />

                <div
                  className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-[2px] md:h-[3px]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to right, rgba(255,255,255,0.9) 0 8px, #4B371C 8px 18px)",
                  }}
                />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#4B371C]" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#4B371C]" />
            </div>
            </div>
        </div> */}
        </section>


      {/* Right: Content */}
      <div className="flex-1 ms-5 md:mx-20 text-center lg:text-left space-y-6 mb-8 mt-8 lg:mt-0">
        <TextFade
            direction="up"
            className="pt-0 pb-5 flex-col flex space-y-6"
          >
        <h2 className="text-3xl lg:text-5xl manrope-bold text-[#4B371C]">
          About Us
        </h2>
        <p className="text-[#202020] mb-4 ibm-plex-sans-normal text-base sm:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
          An innovation powerhouse, dedicated to pushing the boundaries of AI,
          data, and digital transformation. We exist to ignite curiosity,
          inspire breakthroughs, and shape the future of intelligent solutions.
        </p>
        <Link to='/about' className="bg-[#E7E62A] cursor-pointer text-black px-6 py-3 rounded-full ibm-plex-sans-normal transition">
          View More
        </Link>
        </TextFade>
      </div>
    </section>
  );
};

export default AboutUsHome;

