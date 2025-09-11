import React, { useState } from "react";
import Lottie from "lottie-react";
import WorldMap from "../../assets/utility/commons/world-map.svg";
import glowDot from "../../assets/utility/commons/red-pulsing-dot.json";
import ContactAccordion from "./ContactAccordion";

const ContactLocation = () => {
  const companyData = [
    {
      country: "INDIA",
      company: "Inflecto Technologies PVT LTD",
      address: "Pardha's Picasa 5th Floor, Durgam Cheruvu Rd, D Block, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081.",
    },
    {
      country: "USA",
      company: "Inflecto Technologies PVT LTD",
      address: "8668 John Hickman Parkway, Suite 402, Frisco, Texas 75034, US",
    },
    {
      country: "UAE",
      company: "Inflecto Technologies CO. L.L.C",
      address: "Ernst & Wales Business Center, Fronds Building, M floor, Sheikh Zayed Road, Dubai, UAE",
    },
    {
      country: "VIETNAM",
      company: "Inflecto Technologies",
      address: "COMING SOON!",
    },
  ];

  const companyLocations = [
    { country: "USA", x: "21%", y: "36%" },
    { country: "Dubai", x: "62%", y: "50%" },
    { country: "India", x: "69.5%", y: "53%" },
    { country: "Malaysia", x: "76.5%", y: "53%" },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl md:text-5xl manrope-bold text-center text-[#4B371C] my-8">
        Our Global Offices
      </h1>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-6 md:gap-10 px-4 md:px-12 py-10">
        <div className="w-full md:w-5/12 p-6 overflow-y-auto max-h-[400px] border-r border-r-[#CCCCCC]">
          {companyData.map((item, index) => (
            <ContactAccordion
              key={index}
              {...item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="relative w-full md:w-7/12 max-h-[400px] flex items-center justify-center">
          <div className="relative w-full h-auto">
            <img
              src={WorldMap}
              alt="world map"
              className="w-full h-auto object-contain"
            />

            {companyLocations.map((loc, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: loc.x,
                  top: loc.y,
                  transform: "translate(-50%, -50%)",
                  width: "55px",
                  height: "55px",
                }}
              >
                <Lottie animationData={glowDot} loop={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
