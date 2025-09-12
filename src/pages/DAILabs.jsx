import React from 'react'
import DAIBackground from '../assets/dai/dai-background.png'
import DAIOfferings from '../components/daiLabs/DAIOfferings'
import sampleVideo from '../assets/dai/aurora-bg.mp4'
import LineFadeText from '../animations/AnimatedText'
import { WordsPullUp } from '../animations/WordsPullUp'

const DAILabs = () => {
  return (
    <div className="flex flex-col relative">
      {/* Background image */}
      <div className='relative flex items-center max-h-[calc(100vh-120px)]'>
        <h1 className="z-20 absolute manrope-xbold text-3xl md:text-5xl/14 lg:text-6xl/17 max-w-1/2 px-5 md:px-15">
        <WordsPullUp
          text={"Unleashing Innovation With\nDAI Labs"}
          specialWords={["Innovation"]}
          theme="inner-shadow-text-dai"
        />
      </h1>
        <img 
          src={DAIBackground} 
          alt="background" 
          className="w-full h-auto object-cover opacity-100"
        />

        {/* Video overlay */}
        <video
          src={sampleVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full object-cover opacity-70 bg-blend-multiply"
        />
      </div>
      {/* Content */}
      <div className="relative z-50 bg-white">
       <LineFadeText className="max-w-6xl mx-auto px-10 md:px-15 lg:px-25 py-20 text-lg ibm-ples-sans-normal">
          <p>
            At <span className="text-[#E46356]">DAI Labs</span>, we empower organizations to move faster 
            and think smarter by combining the strengths of 
            <span className="text-[#E46356]"> Artificial Intelligence</span>, 
            <span className="text-[#E46356]"> data engineering</span>, and 
            <span className="text-[#E46356]"> low-code development</span>.
          </p>
          <br />
          <p>
            Our solutions are designed for rapid deployment, adaptive scalability, 
            and intelligent automation — helping businesses streamline operations, 
            enhance decision-making, and accelerate digital transformation with minimal complexity.
          </p>
        </LineFadeText>

      </div>

      <DAIOfferings />
    </div>
  )
}

export default DAILabs
