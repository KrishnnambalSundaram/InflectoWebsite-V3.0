import React from "react";
import StaggerGrid from "../../animations/StaggerGrid";
import gsap from "gsap";

const pillars = [
  "Spread positivity and be happy. Never become complacent though",
  "Communicate in a candid and timely manner with complete honesty & full transparency.",
  "Seek forgiveness. Do NOT ask for permission.",
  "Advocate Authority with Autonomy.",
  "Nurture rapid Growth, & Expansion Mindset",
  "Graduate with a 9 on 10 on everything you do and achieve the score at least 9 out of 10 outcomes.",
  "Surrender to failure. Rock bottom is solid foundation.",
  "Eradicate follow up Culture. Be super proactive.",
  "Embrace Cultural Emotional Philosophical change constantly.",
  "Educate yourself hyper exponentially Or be extinct.",
];

export default function AboutUsPillars() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-3xl md:text-5xl manrope-bold text-[#4B371C] mb-12">
        10 Pillars Of Practice
      </h2>

      <StaggerGrid className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {pillars.map((text, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <div
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.1 })}
              key={index}
              className={`flex justify-center items-center relative group bg-white rounded-xl shadow-md mx-5 px-6 py-6 h-[100px] md:h-[84px] overflow-hidden hover:scale-105 transition-all duration-300`}
            >
              {/* Gradient border */}
              <div
                className={`absolute top-0 ${
                  isLeft ? "left-0 w-[4px] h-full" : "right-0 w-[4px] h-full"
                } bg-[linear-gradient(to_bottom,#B978B2,#70CBCF,#E7E62A,#E46356)] `}
              />

              {/* Text content */}
              <h1 className=" z-10 text-center text-[#4B371C] ibm-plex-sans-normal hover:ibm-plex-sans-regular">
                {text}
              </h1>
            </div>
          );
        })}
      </StaggerGrid>
    </section>
  );
}
