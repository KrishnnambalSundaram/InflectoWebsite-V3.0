import React from 'react'
import Background from '../assets/partnerships/partnerships.svg'
import OverlayVideo from '../assets/partnerships/partnership-bubble.mp4' 
import PartnershipsAll from '../components/partnerships/PartnershipsAll'
import { WordsPullUp } from '../animations/WordsPullUp'

const Partnerships = () => {
  return (
    <div className="relative flex flex-col overflow-hidden">
      <div
        className="flex w-full h-[250px] md:h-[400px] lg:h-[600px] bg-no-repeat bg-center bg-cover relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <video
          src={OverlayVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute pointer-events-none select-none top-[-10vh] md:top-[-15vh] lg:top-[-20vh] overflow-hidden"
          style={{
            width: "100vw",
            maxWidth: "1632px",
            height: "auto",
            left: "20vw",
            opacity: 1,
            transform: "rotate(34.2deg)",
            mixBlendMode: "multiply",
          }}
        />

        <div className="relative flex items-center px-10 md:px-20 w-7/12 z-10">
          <p className="text-4xl md:text-5xl/18 lg:text-6xl/18 manrope-xbold">
            <WordsPullUp
              text={"Together, We Build The Future"}
              specialWords={["Together,"]}
              theme="inner-shadow-text-partnership"
            />
          </p>

        </div>
      </div>
      <PartnershipsAll/>
    </div>
  )
}

export default Partnerships
