"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const AnimatedImage = ({ src, alt, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={`rounded-lg  ${className}`}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
};

export default AnimatedImage;
