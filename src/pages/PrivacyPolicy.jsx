import React from 'react'
import PrivacyPolicyBg from '../../src/assets/utility/commons/privacy-policy-hero.svg'
import SecurityLogo from '../../src/assets/utility/commons/security.svg'
import PrivacyPolicyInflecto from '../components/privacyPolicy/PrivacyPolicyInflecto'


const PrivacyPolicy = () => {
  return (
    <div>
        <section
            style={{
                backgroundImage:`url(${PrivacyPolicyBg})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'               
            }}
            className="relative flex flex-col justify-center items-center w-full h-[calc(100vh-100px)] text-center px-6 "
        >
            <div className="flex flex-col justify-center items-center space-y-6 max-w-4xl">
            <h1 className="text-3xl md:text-6xl/18 manrope-bold select-none text-[#4B371C]">
                Privacy Policy
            </h1>

            <p className="text-[#565656] text-sm md:text-lg max-w-xl sm:max-w-2xl ibm-plex-sans-normal select-none">
                {`Last updated: September 11, 2025`}
            </p>
            
            </div>
        </section>
        <PrivacyPolicyInflecto/>
    </div>
  )
}

export default PrivacyPolicy