import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import ServiceItem from '../components/services/ServiceItem';
import AiEnablement from '../assets/services/ai-enablement.gif'
import AppDevelopment from '../assets/services/app-development.gif'
import DigitalAdvisory from '../assets/services/digital-advisory.gif'
import UIXConsulting from '../assets/services/uix-consulting.gif'
import PerformanceTuning from '../assets/services/performance-tuning.gif'
import BusinessAutomation from '../assets/services/business-automation.gif'


const servicesData = [
  {
    heading: "Products for Real-Life Problems",
    description:
      "We design AI-powered products that solve everyday business challenges.",
    points: [
      "Stealth Mode Availability - These solutions are currently live in app stores but remain in stealth mode. Demos can be arranged on request, and we plan to make them publicly available in the coming months.",
    ],
    image: AppDevelopment,
  },
  {
    heading: "Digital Advisory",
    description:
      "We shape your digital strategy with the right mix of low-code and high-code.",
    points: [
      "Platform Expertise - Certified MVPs in low-code/no-code deliver apps at speed and scale.",
      "Strategic Fit - We recommend low-code for speed, high-code for scale, never a one-size approach.",
      "Business-First - Domain SMEs ensure technology directly supports your business goals.",
      "AI-Backed Strategy - Market and operational data fuel sharper decision-making."
    ],
    image: DigitalAdvisory,
  },
  {
    heading: "AI Enablement",
    description:
      "We help enterprises adopt AI with measurable impact, not hype.",
    points: [
      "Agent Portal - Access our custom-built AI agents designed for complex business needs.",
      "Full-Stack AI - From GenAI to Agentic AI and offline LLMs, we cover the full spectrum.",
      "Value-Driven AI - We deploy AI only when it drives ROI, not because it's trendy.",
      "Industry-Aligned - SMEs guide solutions so they stay relevant and practical."
    ],
    image: AiEnablement,
  },
  {
    heading: "App Development & Support",
    description:
      "We build modern applications with AI-accelerated speed and long-term resilience.",
    points: [
      "AI-SDLC - Code generation, testing, and bug detection powered by AI.",
      "Rapid Delivery - Faster go-to-market cycles give you a competitive edge.",
      "Future-Ready - Applications designed to scale and evolve with your business.",
      "End-to-End Care - Comprehensive support long after launch."
    ],
    image: AppDevelopment,
  },
  {
    heading: "UI/UX Consulting & Revamp",
    description:
      "We craft digital experiences that blend usability, design, and AI-driven insights.",
    points: [
      "User Insights - AI uncovers how customers interact to inform smarter design choices.",
      "Impactful Revamps - We eliminate friction and increase engagement in existing apps.",
      "Design + Build - A unified team delivers seamless handoff from concept to code.",
      "Future-Proof - Designs stay modern and adaptable to evolving trends."
    ],
    image: UIXConsulting,
  },
  {
    heading: "Performance Tuning",
    description:
      "We ensure your platforms run fast, scale effortlessly, and stay reliable.",
    points: [
      "AI-Accelerated Testing - Identify bottlenecks and predict issues before they happen.",
      "Proactive Monitoring - Prevent downtime with predictive analytics.",
      "Scalability - Stress-tested systems that handle traffic spikes with ease.",
      "Balanced Approach - AI automation paired with expert fine-tuning."
    ],
    image: PerformanceTuning,
  },
  {
    heading: "Business Automation",
    description:
      "We streamline processes to cut costs, boost speed, and improve accuracy.",
    points: [
      "Workflow Optimization - AI maps bottlenecks and suggests smarter processes.",
      "Faster Delivery - Platform partnerships enable rapid rollout of automation solutions.",
      "Productivity Boost - Free teams from repetitive tasks to focus on high-value work.",
      "Smarter Decisions - Automation delivers real-time data for sharper choices."
    ],
    image: BusinessAutomation,
  },
  // {
  //   heading: "",
  //   description:
  //     "",
  //   points: [
  //     "",
  //     "",
  //   ],
  //   image: AppDevelopment,
  // },
];
const Services = () => {
  return (
    <div className='flex flex-col'>
      <ServicesHero/>
      <section className="w-full bg-white">
      {servicesData.map((service, index) => (
        <ServiceItem
          key={index}
          heading={service.heading}
          description={service.description}
          points={service.points}
          image={service.image}
          reverse={index % 2 !== 0} 
        />
      ))}
    </section>
    </div>
  )
}

export default Services