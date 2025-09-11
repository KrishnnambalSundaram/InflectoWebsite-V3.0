import React from "react";
import TreeImage from "../../assets/aboutUs/about-us-tree.svg"; 
import Bullet from "../../assets/utility/icons/bullet.svg"; 
import { HiChevronDoubleDown } from "react-icons/hi";
import { TextFade } from "../../animations/TextFade";

const AboutUsMission = () => {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Left: Mission + Vision */}
      <div className="flex-1">
        {/* Mission */}
        <div className="mb-12">
          <div className="flex flex-row items-start gap-3 mb-4">
            <div className="flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#70CBCF] flex items-center justify-center text-white">
                    <HiChevronDoubleDown size={18} className="animate-bounce mt-1.5"/>
                </div>
                <div className="mt-[-5px] bg-linear-to-b from-[#70CBCF] to-white w-1 h-45 rounded-3xl"></div>
            </div>
            <div className="flex flex-col">
            <h2 className="text-2xl mb-5 manrope-bold text-[#4B371C]">Our Mission</h2>
            <ul className="space-y-3 pl-2">
              <TextFade
                direction="up"
                className="pt-0 pb-5 flex-col flex space-y-4"
                  >
                <li className="flex gap-3 items-start">
                <img src={Bullet} alt='bullet' className="text-lg w-7"></img>
                <p className="text-gray-700">
                    Innovate scalable, industry-agnostic digital and AI products.
                </p>
                </li>
                <li className="flex gap-3 items-start">
                <img src={Bullet} alt='bullet' className="text-lg w-7"></img>
                <p className="text-gray-700">
                    Empower organizations with plug-and-play AI solutions and flex
                    teams
                </p>
                </li>
                <li className="flex gap-3 items-start">
                <img src={Bullet} alt='bullet' className="text-lg w-7"></img>
                <p className="text-gray-700">
                    Transform society and businesses through responsible technology.
                </p>
                </li>
                <li className="flex gap-3 items-start">
                <img src={Bullet} alt='bullet' className="text-lg w-7"></img>
                <p className="text-gray-700">
                    Cultivate a future-ready, decentralized workforce model
                </p>
                </li>
                </TextFade>
            </ul>
            </div>
          </div>

          
        </div>

        {/* Vision */}
        {/* <div> */}
          <div className="flex flex-row items-start gap-3 mb-4">
            <div className="flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#70CBCF] flex items-center justify-center text-white">
                    <HiChevronDoubleDown size={18} className="animate-bounce mt-1.5"/>
                </div>
                <div className="mt-[-5px] bg-linear-to-b from-[#70CBCF] to-white w-1 h-28 rounded-3xl"></div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#4B371C] mb-5">Our Vision</h2>
                <TextFade
                  direction="up"
                  className="pt-0 pb-5 flex-col flex space-y-4"
                  >
                  <p className="text-gray-700 leading-relaxed">
                      To solve complex societal and business challenges through
                      transformative Digital & Artificial Intelligence (Intelligent
                      Automation powered by AI).
                  </p>
                </TextFade>
            </div>
        </div>
      </div>

      {/* Right: Tree Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={TreeImage}
          alt="Tree illustration"
          className="w-[70%] md:w-[80%] max-w-md"
        />
      </div>
    </section>
  );
};

export default AboutUsMission;
