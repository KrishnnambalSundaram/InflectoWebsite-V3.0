import React from "react";
import heroImg from "../../assets/utility/mp4/Orb.mp4";
import LogoMarquee from "./LogoMarqee";
import { useNavigate } from "react-router-dom";
import { TextFade } from "../../animations/TextFade";
const HeroHome = () => {
  const navigate = useNavigate();
  const handleContact = () =>{
    navigate('contact')
  }
  return (
    <section className="relative py-20 lg:h-[calc(100vh-220px)] bg-white flex flex-col-reverse lg:flex-row items-center px-6 lg:px-16">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center text-center lg:text-left lg:pr-8">
        <TextFade
          direction="up"
          className="pt-0 pb-5 flex-col flex space-y-0"
          isOnce={true}
        >
          <h1 className="text-[#252525] text-4xl sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[64px] manrope-xbold leading-tight">
              Unlock The{" "}
              <span className="text-[#70CBCF] inner-shadow-text">
                Power Of AI
              </span>
              <br />
              For Your Business
          </h1>

          <p className="mt-2 text-[#252525] ibm-plex-sans-normal text-md md:text-md lg:text-xl max-w-md sm:max-w-lg md:max-w-xl mx-auto lg:mx-0">
            Guiding you toward self-expression and confidence with every choice
          </p>
          <div className="mt-3 md:mt-8 flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button onClick={handleContact} className="cursor-pointer whitespace-nowrap bg-[#E7E62A] hover:scale-105 text-black ibm-plex-sans-medium py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full transition text-sm sm:text-base md:text-lg">
              Contact Us
            </button>
            {/* <button className="cursor-pointer whitespace-nowrap border-2 border-[#E7E62A] hover:bg-[#E7E62A]/20 hover:text-black text-gray-700 ibm-plex-sans-medium py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-full transition text-sm sm:text-base md:text-lg">
              Request Demo
            </button> */}
          </div>
        </TextFade>
        
      </div>


      {/* Right Image (hidden in mobile) */}
      <div className="mt-[-40px] justify-center flex">
       <video
        src={heroImg}
        autoPlay
        loop
        muted
        playsInline
        className="w-4/5 max-w-[450px] md:w-full md:max-w-[550px] rounded-2xl"
      >
        Your browser does not support the video tag.
      </video>

      </div>
    </section>
  );
};

export default HeroHome;
