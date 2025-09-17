import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import InflectoLogo from '../assets/inflecto/inflecto-logo.svg';
import InflectoLogoGif from '../assets/inflecto/inflecto-logo.gif';

import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About Us" },
  { path: "/dailabs", name: "DAI Labs"},
  { path: "/services", name: "Services" },
  { path: "/partnerships", name: "Partnerships" },
  { path: "/contact", name: "Contact Us" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header className="sticky top-0 z-100 bg-white ">
      <div
        className={`flex flex-row w-full justify-between items-center px-4 lg:px-16 transition-all ease-in-out duration-300 ${
          isScrolled ? "py-1.5" : "py-5.5"
        }`}
      >
        {/* Logo (switch between GIF and static logo) */}
        <Link to='/'>
          <img
            src={showGif ? InflectoLogoGif : InflectoLogo}
            alt="inflecto Logo"
            className={`${showGif?'w-46':'w-48'} transition-all duration-500 ease-in-out`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <div key={link.path} className="flex flex-col items-center">
              <Link
                to={link.path}
                className={`hover:scale-105 transition ${
                  location.pathname === link.path
                    ? "text-[16px] text-[#4B371C] ibm-plex-sans-regular"
                    : "text-[#252525] ibm-plex-sans-normal"
                }`}
              >
                {link.name}
              </Link>
              {/* Dot below active link */}
              {location.pathname === link.path && (
                <span
                  className={`absolute ${
                    isScrolled ? "bottom-3" : "bottom-7"
                  } w-1 h-1 rounded-full bg-[#4B371C] mt-1 transition-all ease-in-out duration-300`}
                ></span>
              )}
            </div>
          ))}

        </nav>

        {/* Mobile Hamburger */}
        <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-neutral-700/30"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute h-full right-0 top-0 w-7/12 
                         bg-gray-100/80 backdrop-blur-md shadow-lg 
                         rounded-l-2xl z-50 
                         lg:hidden flex flex-col"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-2 py-4"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 text-center ${
                      location.pathname === link.path
                        ? "text-[#4B371C] font-semibold"
                        : "text-[#252525]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
