import React from 'react'
import ContactFooter from '../assets/utility/commons/contact-footer.svg'
import { useNavigate } from 'react-router-dom'
import { TextFade } from '../animations/TextFade';
const CommonContactUs = () => {
  const navigate = useNavigate();
  const handleContact = () =>{
    navigate('contact')
  }
  return (
    <div 
      className='flex flex-col items-center justify-center w-full h-full py-18'
      style={{backgroundImage:`url(${ContactFooter})`}}
      >
        <TextFade
            direction="up"
            className="pt-0 pb-5 flex-col flex items-center justify-center"
        >
          <h1 className='text-center mx-auto text-2xl md:text-4xl/15 lg:text-5xl/15 manrope-regular text-white max-w-[80%]'>
              Fuelling Innovation through AI & Intelligent Automation. <br />
              Let's talk possibilities!!!
          </h1>
          <div onClick={()=>{handleContact()}} className='mt-6 px-4 py-2 rounded-3xl bg-[#E7E62A] cursor-pointer click:scale-98'>Contact Us</div>
        </TextFade>
    </div>
  )
}

export default CommonContactUs