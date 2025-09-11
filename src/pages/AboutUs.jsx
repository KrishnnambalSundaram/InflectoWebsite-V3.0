import React from 'react'
import AboutUsTeam from '../assets/aboutUs/about-us-team.jpg'
import InflectoLogo from '../assets/inflecto/inflecto-logo.svg'
import AboutUsMission from '../components/aboutUs/AboutUsMission'
import AboutUsPhilosophy from '../components/aboutUs/AboutUsPhilosophy'
import AboutUsPillars from '../components/aboutUs/AboutUsPillars'
import AboutUsLeaders from '../components/aboutUs/AboutUsLeaders'
import LineFadeText from '../animations/AnimatedText'
const AboutUs = () => {
  return (
    <div className="relative w-full flex flex-col justify-center">
      {/* Team image */}
      <img
        src={AboutUsTeam}
        alt="about us team"
        className="w-full object-cover"
      />

      {/* Logo overlay */}
      <img
        src={InflectoLogo}
        alt="inflecto"
        className="absolute top-[50px] md:top-[90px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[50] w-36 md:w-50 lg:w-60"
      />
      <div className={`flex mt-[-50px] md:mt-[-150px] lg:mt-[-250px] xl:mt-[-350px] bg-[#EDFEFF] py-20 px-10 md:px-20 lg:px-30 xl:px-40`}>
       <LineFadeText className="py-3 text-lg justify-center ibm-plex-sans-normal">
        <p className=" py-3 text-lg justify-center ibm-plex-sans-normal">
          An innovation powerhouse, dedicated to pushing the boundaries of AI, data, and digital transformation. 
          We exist to ignite curiosity, inspire breakthroughs, and shape the future of intelligent solutions. 
          At the heart of Inflecto is the DAI (Digital Artificial Intelligence) Labs that operates as a high-speed incubator, 
          bringing together experts, ideas, and emerging technologies to solve complex challenges across industries.
          </p>
          <br />
          <p>
          The DAI Labs transforms cutting-edge AI into real-world applications, from personalized customer experiences to predictive insights and autonomous processes.
          </p>
          <br />
          <p>
          At INFLECTO, we don't just follow trends, we set them, with a sharp focus on delivering value, enhancing experiences, and unlocking new possibilities across industries. 
          Let's co-create the future, one intelligent solution at a time.
        </p>
      </LineFadeText>

      </div>
      <AboutUsMission/>
      <AboutUsPhilosophy/>
      <AboutUsPillars/>
      <AboutUsLeaders/>
    </div>

  )
}

export default AboutUs