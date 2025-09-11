import React from "react";

// Icons
import IconUrgency from "../../assets/aboutUs/philosophy/clock.svg";
import IconLaser from "../../assets/aboutUs/philosophy/laser.svg";
import IconThink from "../../assets/aboutUs/philosophy/think.svg";
import IconIdeate from "../../assets/aboutUs/philosophy/ideate.svg";
import IconRapid from "../../assets/aboutUs/philosophy/rapid.svg";
import IconOutcomes from "../../assets/aboutUs/philosophy/outcomes.svg";
import IconQuick from "../../assets/aboutUs/philosophy/quick.svg";
import IconFail from "../../assets/aboutUs/philosophy/fail.svg";
import IconSucceed from "../../assets/aboutUs/philosophy/succeed.svg";
import IconStar from "../../assets/aboutUs/philosophy/star.svg";
import StaggerGrid from "../../animations/StaggerGrid";

const philosophyData = [
  { title: "Act with Urgency", icon: IconUrgency },
  { title: "Laser Focus", icon: IconLaser },
  { title: "Think Niche", icon: IconThink },
  { title: "Ideate Continuously", icon: IconIdeate },
  { title: "Rapid Prototyping", icon: IconRapid },
  { title: "Essential Outcomes", icon: IconOutcomes },
  { title: "Fast-Track to Market", icon: IconQuick },
  { title: "Fail Fast", icon: IconFail },
  { title: "Succeed Sooner", icon: IconSucceed },
  { title: "Shining StarLighters", icon: IconStar },
];

const AboutUsPhilosophy = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl manrope-bold text-center text-[#4B371C] mb-12">
        Our Philosophy
      </h2>

      <StaggerGrid className="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {philosophyData.map((item, index) => (
          <div
            key={index}
            className="relative flex justify-between items-center bg-white rounded-xl shadow-sm px-5 py-2 h-[98px] hover:shadow-md transition overflow-hidden"
          >
            <p className="text-lg font-medium text-[#4B371C]">{item.title}</p>
            <img
              src={item.icon}
              alt={item.title}
              className="absolute bottom-0 right-0 w-7 h-7"
            />
          </div>
        ))}
      </StaggerGrid>
    </section>
  );
};

export default AboutUsPhilosophy;
