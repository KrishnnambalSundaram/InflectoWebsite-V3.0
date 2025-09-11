'use client';
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const arrowVariants = {
  rest: { x: -8, opacity: 0 },
  hover: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 400, damping: 25 }
  },
};

const AnimatedButton = ({ onClick, children = "Click Me" }) => {
  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      animate="rest"
      whileTap={{ scale: 0.97 }}
      whileHover={{ 
        paddingRight: "2.5rem",
        transition: { duration: 0.3 } 
      }}
      className="cursor-pointer whitespace-nowrap bg-[#E7E62A] text-black ibm-plex-sans-medium py-2 sm:py-3 px-6 rounded-full text-sm sm:text-base md:text-lg flex items-center gap-2 relative"
    >

      <span>{children}</span>

      <motion.span
        variants={arrowVariants}
        animate="rest"
        whileHover="hover"
        className="flex items-center absolute right-3"
      >
        <MdOutlineArrowCircleRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
      </motion.span>
    </motion.button>
  );
};

export default AnimatedButton;
