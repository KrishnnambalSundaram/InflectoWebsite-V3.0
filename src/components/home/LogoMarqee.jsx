import React, { useEffect, useState } from 'react'
import AirTable from '../../assets/utility/companyLogos/airtable.svg'
import Appian from '../../assets/utility/companyLogos/appian.svg'
import Appsheet from '../../assets/utility/companyLogos/appsheet.svg'
import Caspio from '../../assets/utility/companyLogos/caspio.svg'
import Bubble from '../../assets/utility/companyLogos/bubble.svg'
import Hcl from '../../assets/utility/companyLogos/hcl.svg'
import Informatica from '../../assets/utility/companyLogos/informatica.svg'
import Joget from '../../assets/utility/companyLogos/joget.svg'
import Uipath from '../../assets/utility/companyLogos/uipath.svg'
import Webflow from '../../assets/utility/companyLogos/webflow.svg'
import Zoho from '../../assets/utility/companyLogos/zoho.svg'
import Marquee from 'react-fast-marquee'


const LogoMarqee = () => {
  const logos = [AirTable,Appian,Appsheet,Bubble,Caspio,Hcl,Informatica,Joget,Uipath,Webflow,Zoho]
  return (
    <div className='flex h-30 w-full items-center justify-center'>
      <Marquee>
        {
          logos.map((item)=>(
            <MarqeeElement Image={item}/>
          ))
        }
      </Marquee>
    </div>
  )
}
const MarqeeElement = ({Image}) =>{
  const [hovered,setHovered] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setHovered(false)
    },3000)
  },[hovered])
  return (
    <img 
      onClick={()=>setHovered(!hovered)} 
      src={Image} 
      alt={`${Image}`} 
      className={`${hovered ? "grayscale-0" : "grayscale"} hover:grayscale-0 px-10 cursor-pointer transition-all duration-300`}/>
  )
}
export default LogoMarqee