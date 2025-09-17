import React from "react";
import heroImg from "../../assets/utility/mp4/Orb.mp4";
import LogoMarquee from "./LogoMarqee";
import { useNavigate } from "react-router-dom";
import { TextFade } from "../../animations/TextFade";
import { WordsPullUp } from "../../animations/WordsPullUp";
const HeroHome = () => {
  const navigate = useNavigate();
  const handleContact = () =>{
    navigate('contact')
  }
  return (
    <section className=" relative py-2 lg:py-5 min-h-[calc(100vh-220px)] flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 gap-10">
  
    {/* Left Content */}
      <div className="flex-1 flex-col justify-center text-center lg:text-left">
        <h1 className="text-[#252525] text-4xl sm:text-[44px] md:text-[54px] lg:text-[64px] manrope-xbold leading-tight">
          <WordsPullUp
            text={"Unlock The Power Of AI\nFor Your Business"}
            specialWords={["Power", "Of", "AI"]}
            theme="inner-shadow-text"
            className="text-[#252525]"
          />
        </h1>

        <TextFade
          direction="up"
          className="pt-4 pb-5 flex-col flex space-y-0"
          isOnce={true}
        >
          <p className="mt-2 text-[#252525] ibm-plex-sans-normal text-md md:text-lg lg:text-xl max-w-md sm:max-w-lg md:max-w-xl mx-auto lg:mx-0">
            Guiding you toward self-expression and confidence with every choice
          </p>
          <div className="mt-6 flex flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleContact}
              className="cursor-pointer whitespace-nowrap bg-[#E7E62A] hover:scale-105 text-black ibm-plex-sans-medium py-2 sm:py-3 px-6 md:px-8 rounded-full transition text-sm sm:text-base md:text-lg"
            >
              Contact Us
            </button>
          </div>
        </TextFade>
      </div>

      {/* Right Video */}
      <div className="flex-1 flex justify-center">
        <video
          src={heroImg}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[360px] lg:max-w-[520px] rounded-2xl"
        >
          Your browser does not support the video tag.
        </video>
      </div>
  </section>

  );
};

export default HeroHome;
