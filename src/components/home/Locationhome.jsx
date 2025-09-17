import React, { useState } from "react";
import WorldMap from "../../assets/home/world-map-locations.svg";
import India from '../../assets/utility/countries/india.png'
import USA from '../../assets/utility/countries/united-states.png'
import UAE from '../../assets/utility/countries/united-arab-emirates.png'
import Vietnam from '../../assets/utility/countries/vietnam.png'

const locations = [
  {
    id: "usa",
    name: "USA",
    address: "8668 John Hickman Parkway, Suite 402, Frisco, Texas 75034, US",
    flag: USA,
    position: { top: "50%", left: "21%" },
  },
  {
    id: "uae",
    name: "UAE",
    address: "Ernst & Wales Business Center, Fronds Building, M floor, Sheikh Zayed Road, Dubai, UAE",
    flag: UAE,
    position: { top: "57%", left: "63.5%" },
  },
  {
    id: "hyderabad",
    name: "Hyderabad, India",
    address:
      "Pardha's Picasa 5th Floor, Durgam Cheruvu Rd, D Block, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081",
    flag: India,
    position: { top: "57%", left: "70%" },
  },
  {
    id: "vietnam",
    name: "Vietnam",
    address: "COMING SOON!",
    flag: Vietnam,
    position: { top: "62%", left: "78%" },
  },
];

const LocationHome = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full flex flex-col justify-center items-center bg-white py-10">
        <h2 className="text-3xl md:text-5xl manrope-bold text-center text-[#4B371C] mb-12">
        Our Global Presence
      </h2>
      {/* Map wrapper is relative so pins scale with image */}
      <div className="relative w-full max-w-6xl">
        {/* Background Map */}
        <img
          src={WorldMap}
          alt="World Map"
          className="w-full h-auto object-contain"
        />

        {/* Location Pins */}
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="absolute cursor-pointer group"
            style={{ top: loc.position.top, left: loc.position.left }}
            onMouseEnter={() => setActive(loc.id)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(active === loc.id ? null : loc.id)} // mobile toggle
          >
            {/* Responsive Red Dot */}
            <div className="w-3 h-3 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-8 lg:h-8 bg-transparent rounded-full group-hover:scale-125 transition-transform"></div>

            {/* Tooltip */}
          {active === loc.id && (
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 translate-y-[-100%] bg-white shadow-xl rounded-xl p-4 w-54 text-sm text-gray-800 z-20">
              <div className="flex items-center mb-2">
                <img className="mr-2 text-lg w-4" src={loc.flag} alt=""></img>
                <h4 className="manrope-semibold text-[#4B371C]">{loc.name}</h4>
              </div>
              <p className={`${loc.address.includes("COMING")?"text-red-500 manrope-xbold":"text-black"} text-xs leading-relaxed`}>{loc.address}</p>

              {/* Arrow (pointing downwards now) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-white rotate-45 shadow-md"></div>
            </div>
          )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationHome;
