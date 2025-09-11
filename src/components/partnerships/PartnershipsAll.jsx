import React from "react";
import Appian from "../../assets/utility/companyLogos/appian.svg";
import Backendless from "../../assets/utility/companyLogos/backendless.svg";
import Bubble from "../../assets/utility/companyLogos/bubble.svg";
import Hcl from "../../assets/utility/companyLogos/hcl.svg";
import Informatica from "../../assets/utility/companyLogos/informatica.svg";
import Joget from "../../assets/utility/companyLogos/joget.svg";
import Mendix from "../../assets/utility/companyLogos/mendix.svg";
import OutSystems from "../../assets/utility/companyLogos/outsystems.svg";
import Unifyapps from "../../assets/utility/companyLogos/unifyapps.svg";
import Zoho from "../../assets/utility/companyLogos/zoho.svg";
import Bullet from "../../assets/utility/icons/bullet.svg"
import { TextFade } from "../../animations/TextFade";

// 👇 Your data object
const partnershipsData = [
  {
    title: "Trusted Partnerships & Smarter Outcomes",
    description:
      "Strategic and Technology partnerships at Inflecto fuel innovation — unlocking new opportunities, driving co-creation, and delivering faster, smarter, and scalable outcomes for our clients. \n We are committed to building trusted, future-ready alliances that:",
    logos: [,
      { name: "Unifyapps", img: Unifyapps },
      { name: "Zoho Creator", img: Zoho },
    ],
    points:[
      {point:"Accelerate adoption of next-gen platforms"},
      {point:"Enable AI-driven automation and orchestration"},
      {point:"Deliver reusable accelerators for faster time-to-value"}
    ]
  },
];

const PartnershipsAll = () => {
  return (
    <div className="flex flex-col py-15 z-50 bg-white">
      {partnershipsData.map((section, index) => {
        const isEven = index % 2 !== 0;
        return (
            <div
            key={index}
            className={`flex flex-col items-center gap-10 px-6 md:px-16 ${
              isEven ? "bg-[#FAFAFA] my-10 py-10" : ""
            }`}
          >
            <TextFade
                      direction="up"
                      className="pt-0 pb-5 flex-col flex space-y-4"
                      >
            <h2 className="text-3xl md:text-5xl manrope-bold text-center text-[#4B371C] mb-6">
                {section.title}
              </h2>
          <div
            className={`flex flex-col md:flex-row items-center gap-10 ${
              isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            
            {/* Content */}
            <div className="w-full md:w-1/2 pt-5 pb-10">
              {section.description.split("\n").map((line, index) => (
                <p
                  key={index}
                  className="text-black ibm-plex-sans-normal my-2"
                >
                  {line}
                </p>
              ))}
              {/* <p className="text-black ibm-plex-sans-normal mb-6">{section.description}</p> */}
              <div className="flex flex-col gap-2">
                {
                  section.points.map((item)=>(
                    <TextFade
                      direction="up"
                      className="pt-0 pb-5 flex-col flex space-y-4"
                      >
                    <div className="flex flex-row gap-2">
                      <img src={Bullet} className="w-7"></img>
                      <p className="text-md mt-1 text-black ibm-plex-sans-normal">
                        {item.point}
                      </p>
                    </div>
                    </TextFade>
                  ))
                }
              
              </div>
            </div>

            {/* Logos Grid */}
            <div className="w-full  justify-center md:w-1/2 flex flex-row gap-5 mx-auto">
              {section.logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center min-w-40 p-2 rounded-lg shadow-xl bg-white"
                >
                  <img
                    src={logo.img}
                    alt={logo.name}
                    className="w-25 h-18 object-contain"
                  />
                  <p className="text-sm text-gray-700 manrope-regular mt-2">{logo.name}</p>
                </div>
              ))}
            </div>
          </div>
          </TextFade>
          </div>
        );
      })}
    </div>
  );
};

export default PartnershipsAll;
