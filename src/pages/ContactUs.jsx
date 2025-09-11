import React from 'react'
import ContactUsBg from '../assets/contactUs/contact-us.svg'
import GetInTouch from '../components/contactUs/GetInTouch'
import ContactUsEmail from '../components/contactUs/ContactUsEmail'
import ContactLocation from '../components/contactUs/ContactLocation'
import { WordsPullUp } from '../animations/WordsPullUp'
import { TextFade } from '../animations/TextFade'

const ContactUs = () => {
  return (
    <div className="flex flex-col">
      <div
        className="flex w-full bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${ContactUsBg})`, backgroundPosition:'bottom'}}
      >
        <div className="flex flex-col pt-[80px] mb-[250px] items-center w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          
          {/* Title */}
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl manrope-xbold leading-snug">
            <WordsPullUp
              text={"Open the Door to New Possibilities"}
              specialWords={["New"]}
              theme="inner-shadow-text-partnership"
            />
          </p>
          
          {/* Subtitle */}
          <TextFade
            direction="up"
            className="pt-0 pb-5 flex-col flex space-y-4"
          >
          <p className="mt-3 md:mt-5 text-base sm:text-lg md:text-xl ibm-plex-sans-normal max-w-2xl">
            Whether you have a question, a project, or just want to say hello — we're ready to connect.
          </p>
          </TextFade>
        </div>
      </div>
      <GetInTouch/>
      <ContactUsEmail/>
      <ContactLocation/>
    </div>
  )
}

export default ContactUs
