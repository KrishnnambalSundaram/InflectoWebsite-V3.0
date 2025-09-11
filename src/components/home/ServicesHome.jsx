import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

import digitalIcon from "../../assets/home/serives/home-laptop.gif";
import digitalIconStatic from "../../assets/home/serives/home-laptop-static.svg";
import aiIcon from "../../assets/home/serives/ai-icon.gif";
import aiIconStatic from "../../assets/home/serives/ai-icon-static.svg";
import businessIcon from "../../assets/home/serives/business-icon.gif";
import businessIconStatic from "../../assets/home/serives/business-icon-static.svg";
import performanceIcon from "../../assets/home/serives/performance.gif";
import performanceIconStatic from "../../assets/home/serives/performance-static.svg";
import appDevIcon from "../../assets/home/serives/applications.gif";
import appDevIconStatic from "../../assets/home/serives/applications-static.svg";
import rpaIcon from "../../assets/home/serives/robotic.gif";
import rpaIconStatic from "../../assets/home/serives/robotic-static.svg";
import uixIcon from "../../assets/home/serives/uix.gif";
import uixIconStatic from "../../assets/home/serives/uix-static.svg";

const services = [
  {
    id: 0,
    title: "Products for Real-Life Problems",
    desc: "Smart, AI-powered products solving everyday business challenges—from job matching to workplace culture to retail engagement.",
    gif: rpaIcon,
    icon: rpaIconStatic,
  },
  {
    id: 1,
    title: "Digital Advisory",
    desc: "15+ years of low-code and high-code expertise guiding your digital strategy with business-first, AI-backed insights.",
    gif: digitalIcon,
    icon: digitalIconStatic,
  },
  {
    id: 2,
    title: "AI Enablement",
    desc: "Practical GenAI and Agentic AI solutions that deliver real business impact, not just experiments.",
    gif: aiIcon,
    icon: aiIconStatic,
  },
  {
    id: 3,
    title: "Business Automation",
    desc: "Streamlined workflows and intelligent automation that cut costs, improve accuracy, and drive productivity.",
    gif: businessIcon,
    icon: businessIconStatic,
  },
  {
    id: 4,
    title: "Performance Turning",
    desc: "AI-powered testing and monitoring to ensure your systems stay fast, scalable, and reliable.",
    icon: performanceIconStatic,
    gif: performanceIcon,
  },
  {
    id: 5,
    title: "App Development & Support",
    desc: "Modern, scalable apps built with AI-driven speed and long-term support to keep you ahead.",
    icon: appDevIconStatic,
    gif: appDevIcon,
  },
  {
    id: 6,
    title: "UIX Consulting & App Revamp",
    desc: "AI-led design that enhances usability, boosts engagement, and keeps your digital presence future-ready.",
    icon: uixIconStatic,
    gif: uixIcon,
  },
];

const ServicesHome = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <h2 className="text-4xl md:text-5xl manrope-bold text-center text-[#4B371C] mb-12">
        Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 justify-items-center">
        {services.map((service, idx) => (
          <div
            key={service.id}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="w-full max-w-sm opacity-0"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
      className="relative h-full"
    >
      {/* Glow behind */}
      <div
        className={`absolute inset-0 rounded-xl blur-[50px] transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(117.13deg, rgba(112, 203, 207, 0.4) 14.57%, rgba(231, 230, 42, 0.4) 54.76%, rgba(185, 120, 178, 0.4) 74.85%, rgba(228, 99, 86, 0.4) 94.95%)",
        }}
      />

      {/* Card */}
      <div className="relative rounded-xl p-6 h-full flex flex-col items-start bg-white transition-all duration-500 hover:scale-105">
        <img
          src={hovered ? service.gif : service.icon}
          alt={service.title}
          className="w-20 h-20 mb-4 transition-transform duration-500"
        />
        <h3 className="text-xl manrope-regular text-[#4B371C]">
          {service.title}
        </h3>
        <div className="h-1 my-3 w-full rounded-3xl bg-gradient-to-r from-[#E7E62A] to-white" />
        <p className="text-[#202020] ibm-plex-sans-normal text-md/7">
          {service.desc}
        </p>
      </div>
    </div>
  );
};

export default ServicesHome;
