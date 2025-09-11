import React, { useEffect, useState } from "react";
import { FaLinkedin, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import Linkedin from '../../assets/utility/socialmedia/linkedin.png'

import Anantha from '../../assets/aboutUs/leaders/anantha-dp.svg'
import Krishna from '../../assets/aboutUs/leaders/krishna-dp.svg'
import Mani from '../../assets/aboutUs/leaders/mani.svg'
import LeaderBg from '../../assets/aboutUs/leaders/leaders-bg.png'



const AboutUsLeaders = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  useEffect(() => {
    if (selectedLeader) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto"; 
    }

    return () => {
        document.body.style.overflow = "auto";
    };
    }, [selectedLeader]);

  const leaders = [
    {
      name: "Anantha Lanka",
      title: "Chief Strategy Officer",
      img: Anantha,
      description: "Anantha Bhaskar Lanka, Chief Strategy Officer (CSO) at Inflecto, is a visionary business strategist and transformation leader with more than 15 years of global leadership experience. He has a proven record of driving enterprise growth, digital transformation, and operational excellence across industries including financial services, technology, and consulting.\nPreviously, Anantha held leadership roles at IBM, Bank of America, and Unico Solutions, where he managed large-scale programs, risk management frameworks, and global technology solutions.\nHis leadership has been instrumental in delivering double-digit revenue growth, operational efficiency, and market expansion.",
      linkedin: ""
    },
    {
      name: "Krishna Gorrepati",
      title: "Chief Technology Officer",
      img: Krishna,
      description: "Krishna Gorrepati, a seasoned digital transformation leader with over 25 years of expertise in ERP modernization, cloud data management, enterprise data integration, and business intelligence.\nKrishna has successfully led Fortune 500 clients through large-scale technology transformations across SAP, data warehousing, and advanced analytics platforms. His proven track record in driving enterprise modernization and cloud adoption makes him a recognized leader in the IT consulting and technology services industry.\nHis leadership is defined by strategic foresight, technical depth, and a passion for building future-ready enterprises.",
      linkedin: "https://www.linkedin.com/in/krishnagorrepati/"
    },
    {
      name: "Mani Anbalagan",
      title: "Chief Digital & AI Officer",
      img: Mani,
      description: "Mani Anbalagan, Founder and Chief Digital & AI Officer at Inflecto, is a distinguished digital transformation and AI leader with more than two decades of global experience in banking, financial services, telecom, healthcare, and technology consulting.\n Renowned for building AI-driven enterprise solutions, low-code platforms, and digital accelerators, Mani has successfully partnered with Fortune 500 companies across America, Asia Pacific, the Middle East, and Europe. He has led organizations of 1000+ professionals, managed P&Ls exceeding USD 50M, and spearheaded M&A-driven growth, customer-centric innovation, and large-scale digital programs. \nAt Inflecto, Mani is driving the firm’s vision as an AI-first IT services company, blending strategy, technology, and innovation to deliver enterprise-wide transformation. His leadership reflects a rare balance of strategic foresight, people-first culture, and deep technical expertise, enabling organizations to thrive in the digital era.",
      linkedin: "https://www.linkedin.com/in/mkandan/"
    },
  ];

  return (
    <div className="relative pb-20 overflow-hidden">
      {/* Positioned Background */}
      <div
        className="absolute -z-10"
        style={{
          width: "1479.21px",
          height: "1020.52px",
          top: "-160.31px",
          left: "-96.05px",
          opacity: 0.10,
          transform: "rotate(180.81deg)",
          backgroundImage: `url(${LeaderBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl manrope-bold my-15 text-[#4B371C]">Our Leaders</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {leaders.map((leader, idx) => (
          <div
            key={idx}
            className="relative w-64 rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-102"
          >
            <img src={leader.img} alt={leader.name} className="w-full h-102 object-cover" />
            <div className="flex flex-row justify-between items-end absolute pb-4 bottom-0 left-0 right-0 p-3 h-1/2 bg-gradient-to-t from-black to-transparent text-white">
              <div className="pl-2">
                <p className="text-sm manrope-semibold">{leader.name}</p>
                <p className="text-[10px] ibm-plex-sans-normal text-[#D4D4D8]">{leader.title}</p>
              </div>
              <button
                onClick={() => setSelectedLeader(leader)}
                className="mt-2 mr-2 p-1.5 border border-white bg-neutral-600/70 text-white rounded-xl cursor-pointer hover:bg-gray-200 transition"
              >
                <LuArrowUpRight className="h-6 w-6"/>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedLeader && (
  <div className="fixed inset-0 flex justify-center items-center z-50">
    {/* Blurred Background */}
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      onClick={() => setSelectedLeader(null)}
    />

    {/* Card (Scrollable) */}
    <div className="relative bg-white rounded-2xl shadow-lg w-11/12 md:w-3/4 lg:w-2/3 mt-[80px] max-h-[85vh] overflow-y-auto p-6 z-100 flex flex-col md:flex-row items-start gap-6">
      <div className="flex flex-col justify-between w-full md:w-auto items-center md:items-start">
        <img
          src={selectedLeader.img}
          alt={selectedLeader.name}
          className="w-40 h-48 md:w-64 md:h-92 lg:w-80 lg:h-108 object-cover rounded-xl object-top"
        />
        <div className="flex w-full items-center gap-2 p-2 justify-center md:justify-between">
          <h3 className="text-xl manrope-bold">{selectedLeader.name}</h3>
          {selectedLeader.linkedin !== "" && 
            <a
              href={selectedLeader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="linkedin" className="w-6 h-6" />
            </a>
          }
        </div>
        <p className="text-black mb-3 px-2 ibm-plex-sans-normal">
          {selectedLeader.title}
        </p>
      </div>

      {/* Description Section (scrolls if long) */}
      <div className="flex-1">
        {selectedLeader.description.split("\n").map((line, index) => (
          <p
            key={index}
            className="text-black text-xs md:text-[15px]/7 leading-relaxed manrope-normal mb-5"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default AboutUsLeaders;
