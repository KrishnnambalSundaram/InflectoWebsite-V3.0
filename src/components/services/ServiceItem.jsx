import React, { useEffect, useState } from "react";
import Bullet from '../../assets/utility/icons/bullet.svg'
import { TextFade } from "../../animations/TextFade";
const ServicePoint = ({point})=>{
  const [heading,setHeading] = useState('');
  const [desc,setDesc] = useState('');
  const spl = point.split(' - ')
  useEffect(()=>{
    setHeading(spl[0])
  setDesc(spl[1])
  },[point])
  
  return (
    <h1 className="ibm-plex-sans-normal text-start"><span className="ibm-plex-sans-semibold">{heading}</span> - {desc}</h1>
  )
}
const ServiceItem = ({ heading, description, points, image, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12 px-6 md:px-12 lg:px-20 ${
        reverse ? "md:flex-row-reverse bg-[#FAFAFA]" : ""
      }`}
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <TextFade
          direction="up"
          className="pt-0 pb-5 flex-col flex space-y-4"
          >
        <h2 className="text-3xl manrope-bold text-[#4B371C] mb-4">{heading}</h2>
        <p className="text-gray-600 ibm-plex-sans-normal mb-6">{description}</p>

        <ul className="space-y-3 select-none">
          {points.map((point, index) => (
            <TextFade
          direction="up"
          className="pt-0 flex-col flex space-y-0"
          >
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <img src={Bullet} className="w-7"></img>
              <ServicePoint point={point}/>
            </li>
            </TextFade>
          ))}
        </ul>
        </TextFade>
      </div>

      {/* Image Section */}
      <div className={`flex-1 flex justify-center ${reverse?'bg-[#FAFAFA]':''}`}>
        <img
          src={image}
          alt={heading}
          className="max-w-[280px] md:max-w-[350px] object-contain rounded-4xl  mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default ServiceItem;
