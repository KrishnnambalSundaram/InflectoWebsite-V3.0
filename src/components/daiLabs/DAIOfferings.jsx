import React, { useEffect, useRef, useState } from "react";
import digitalIcon from "../../assets/dai/offerings/digital.gif";
import digitalIconStatic from "../../assets/dai/offerings/digital-static.svg";
import aiIcon from "../../assets/dai/offerings/ai-dai.gif";
import aiIconStatic from "../../assets/dai/offerings/ai-dai-static.svg";
import businessIcon from "../../assets/dai/offerings/gen-ai.gif";
import businessIconStatic from "../../assets/dai/offerings/gen-ai-static.svg";
import academyIcon from "../../assets/dai/offerings/academy.gif";
import academyIconStatic from "../../assets/dai/offerings/academy-static.svg";
import gsap from "gsap";

const offerings = [
  {
    id: 1,
    title: "Marketplace",
    desc: "Domain Specific Solutions, Business Accelerators, B2C & Merchant Apps, LCNC Approach",
    gif: digitalIcon,
    icon: digitalIconStatic,
  },
  {
    id: 2,
    title: "D&AI Consulting & Transformation",
    desc: "The Digital & AI consulting is designed to bridge business vision with scalable execution—delivered through a low-code-first, AI-native approach.",
    gif: aiIcon,
    icon: aiIconStatic,
  },
  {
    id: 3,
    title: "GenAI & Agentic AI Professional Services",
    desc: "Bring innovation, enhance productivity, and create personalized digital experiences—securely and at scale.",
    gif: businessIcon,
    icon: businessIconStatic,
  },
  {
    id: 4,
    title: "AI Academy",
    desc: "Upskill business & technology teams in AI, GenAI, and Intelligent Automation, empowering them to lead, adopt, and scale AI initiatives.",
    gif: academyIcon,
    icon: academyIconStatic,
  },
];

const DAIOfferings = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.1,
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
      <h2 className="text-3xl md:text-5xl manrope-bold text-center text-[#4B371C] mb-12">
        Our Offerings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {offerings.map((offering,idx) => (
          <OfferingCard ref={(el) => (cardsRef.current[idx] = el)} key={offering.id} offering={offering} />
        ))}
      </div>
    </section>
  );
};

const OfferingCard = ({ offering, ref }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="relative h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
    >
      {/* Glow Background */}
      <div
        className={`absolute inset-0 rounded-xl blur-[40px] transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(117.13deg, rgba(112, 203, 207, 0.25) 14.57%, rgba(231, 230, 42, 0.25) 54.76%, rgba(185, 120, 178, 0.25) 74.85%, rgba(228, 99, 86, 0.25) 94.95%)",
        }}
      />

      {/* Card */}
      <div className="relative rounded-xl p-6 h-full gap-3 flex flex-col items-start bg-white shadow-sm hover:shadow-lg transition-all duration-500">
        {/* Icon */}
        <img
          src={hovered ? offering.gif : offering.icon}
          alt={offering.title}
          className="w-14 h-14 mb-4 transition-transform duration-500"
        />

        {/* Title */}
        <h3 className="text-lg manrope-semibold text-[#4B371C]">
          {offering.title}
        </h3>

        {/* Description */}
        <p className="text-[#202020] text-sm ibm-plex-sans-normal">
          {offering.desc}
        </p>
      </div>
    </div>
  );
};

export default DAIOfferings;
