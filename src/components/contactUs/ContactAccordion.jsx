import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ContactAccordion = ({ country, company, address, isOpen, onToggle }) => {
  console.log("--------------",address.includes("COMING"))
  return (
    <div className="border-b border-[#CCCCCC]">
      <button
        className="w-full flex justify-between items-center py-4 px-2 text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <h2 className="text-2xl manrope-semibold text-[#70CBCF]">{country}</h2>
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4">
          <h3 className="text-[#4B371C] ibm-plex-sans-regular pb-2">{company}</h3>
          <p className={`${address.includes("COMING")?"text-red-500 manrope-bold":"text-[#252525]"} text-xs ibm-plex-sans-normal`}>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactAccordion;
