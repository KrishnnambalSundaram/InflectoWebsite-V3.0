import React, { useState } from "react";

import generalIcon from "../../assets/contactUs/contact/general.gif";
import generalIconStatic from "../../assets/contactUs/contact/general-static.svg";

import salesIcon from "../../assets/contactUs/contact/sales.gif";
import salesIconStatic from "../../assets/contactUs/contact/sales-static.svg";

import phoneIcon from "../../assets/contactUs/contact/phone.gif";
import phoneIconStatic from "../../assets/contactUs/contact/phone-static.svg";

const contacts = [
  {
    id: 1,
    title: "General Enquiry",
    desc: "We are here to help",
    value: "people@inflectotechnologies.com",
    gif: generalIcon,
    static: generalIconStatic,
  },
  {
    id: 2,
    title: "Sales Enquiry",
    desc: "Reach out to a sales consultant",
    value: "presales@inflectotechnologies.com",
    gif: salesIcon,
    static: salesIconStatic,
  },
  // {
  //   id: 3,
  //   title: "Contact Us",
  //   desc: "Call any time",
  //   value: "040 35106364",
  //   gif: phoneIcon,
  //   static: phoneIconStatic,
  // },
];

const GetInTouch = () => {
  return (
    <section className="flex flex-col justify-center py-16 bg-white">
      {/* Heading */}
      <h2 className="text-3xl px-10 md:text-5xl manrope-bold mx-auto text-center max-w-2xl text-[#4B371C] mb-12">
        Get in touch with us for more information
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {contacts.map((item) => (
          <HoverCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

const HoverCard = ({ title, desc, value, gif, static: staticIcon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* background */}
      <div className="absolute -inset-1 blur-lg opacity-0 group-hover:opacity-80 transition duration-500 "
        style={{
            background:
                "linear-gradient(117.13deg, rgba(112, 203, 207, 0.25) 14.57%, rgba(231, 230, 42, 0.25) 54.76%, rgba(185, 120, 178, 0.25) 74.85%, rgba(228, 99, 86, 0.25) 94.95%)",
            }}
      ></div>

      {/* Card content */}
      <div className="relative bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4 min-w-[250px] items-start transition-all duration-300">
        {/* Icon */}
        <img
          src={hovered ? gif : staticIcon}
          alt={title}
          className="w-10 h-10"
        />

        {/* Title */}
        <h3 className="text-lg manrope-semibold text-[#4B371C]">{title}</h3>

        {/* Description */}
        <p className="text-sm text-[#767676] ibm-plex-sans-normal">{desc}</p>

        {/* Value */}
        <p className="text-sm text-[#252525] ibm-plex-sans-normal">{value}</p>
      </div>
    </div>
  );
};

export default GetInTouch;
