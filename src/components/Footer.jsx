import React from "react";
import InflectoLogo from "../assets/inflecto/inflecto-logo.svg";
import Linkedin from '../assets/utility/socialmedia/linkedin.png'
import Instagram from '../assets/utility/socialmedia/instagram.png'
import X from '../assets/utility/socialmedia/twitter.png'
import Youtube from '../assets/utility/socialmedia/youtube.png'
import { Link } from "react-router-dom";

const Footer = () => {
  const companyLinks = [
    { label: "Careers", to: "/comingsoon" },
    { label: "Case Studies", to: "/comingsoon" },
    { label: "Marketplace", to: "/comingsoon" },
  ];

  const legalLinks = [
    // { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", to: "/privacypolicy" },
  ];

  const resourcesLinks = [
    { label: "Blog", to: "/comingsoon" },
    { label: "Case Studies", to: "/comingsoon" },
    { label: "Free eBooks", to: "/comingsoon" },
    { label: "Development Tutorial", to: "/comingsoon" },
  ];

  const LinkList = ({ links }) => (
    <ul className="space-y-2 text-[16px] ibm-plex-sans-normal">
      {links.map((item, idx) => (
        <li key={idx} className="flex items-center group">
          <div className="w-[5px] h-5 bg-[#E7E62A] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
           group-active:opacity-100 transition-opacity duration-300"></div>
          <Link
            to={item.to}
            className="ml-0 group-hover:ml-1 group-focus:ml-1 group-active:ml-1 transition-all duration-300"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-white text-gray-700">
      <div className="w-full mx-auto px-6 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <img src={InflectoLogo} alt="Inflecto Logo" className="w-36 mb-4" />
          <p className="text-[16px] leading-relaxed max-w-[300px] ibm-plex-sans-normal">
            Human led Intelligent Orchestration and Automation powered by AI
          </p>

          {/* Social Icons */}
          <div className="flex bottom-0 gap-6 mt-9">
            <a href="https://www.linkedin.com/company/inflecto-technologies/posts/?feedView=all" target="_blank"
              rel="noopener noreferrer"><img src={Linkedin} alt="linkedin" className="h-6 w-6" /></a>
            {/* <a href="#"><img src={X} alt="x" className="h-6 w-6" /></a>
            <a href="#"><img src={Youtube} alt="youtube" className="h-6 w-6" /></a>
            <a href="#"><img src={Instagram} alt="instagram" className="h-6 w-6" /></a> */}
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[#E46356] manrope-600 text-[24px] mb-4">COMPANY</h3>
          <LinkList links={companyLinks} />
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-[#E46356] manrope-600 text-[24px] mb-4">LEGAL</h3>
          <LinkList links={legalLinks} />
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[#E46356] manrope-600 text-[24px] mb-4">RESOURCES</h3>
          <LinkList links={resourcesLinks} />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-t-[#E2E2E2] mx-12 text-sm flex flex-col md:flex-row justify-between items-center px-2 lg:px-4 py-4">
        <div className="flex gap-6 text-[#252525] text-[15px] ibm-plex-sans-regular">
          <span>• India</span>
          <span>• USA</span>
          <span>• Middle East</span>
          <span>• Vietnam</span>
        </div>
        <p className="mt-2 md:mt-0 text-[#252525] text-[15px] ibm-plex-sans-regular">
          &copy; 2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
