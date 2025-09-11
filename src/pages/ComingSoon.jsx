import React from 'react'
import ComingSoonLogo from '../../src/assets/utility/commons/coming-soon.svg'
const ComingSoon = () => {
  return (
    <section
        style={{
          background:
            "linear-gradient(105.83deg, rgba(231, 230, 42, 0.288) 0%, rgba(112, 203, 207, 0.288) 31.73%, rgba(185, 120, 178, 0.288) 61.54%, rgba(228, 99, 86, 0.288) 89.9%)",
        }}
        className="relative flex flex-col items-center w-full h-[calc(100vh-80px)] text-center px-6 pt-10"
      >
        <div className="flex flex-col justify-center items-center space-y-6 max-w-4xl">
          <h1 className="text-3xl md:text-6xl/18 manrope-bold select-none text-[#4B371C]">
            Something Awesome is Coming Soon
          </h1>

          <p className="text-[#565656] text-sm md:text-lg max-w-xl sm:max-w-2xl ibm-plex-sans-normal select-none">
            {`We’re working hard behind the scenes to create an amazing experience just for you.`}
          </p>
          
        </div>
        <img src={ComingSoonLogo} alt='coming soon' className='w-84'/>
      </section>
  )
}

export default ComingSoon