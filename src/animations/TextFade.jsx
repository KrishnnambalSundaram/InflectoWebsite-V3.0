'use client';
import { motion, useInView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export function TextFade({
  direction = 'up',
  children,
  className = '',
  staggerChildren = 0.1,
  isOnce = true,
  delayStep = 0.2,
}) {
  const [isOnceFlag,setIsOnceFlag] = useState(false)
  const FADE_VARIANT = {
    hidden: (i) => ({
      opacity: 0,
      y: direction === 'down' ? -40 : 40,
    }),
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        delay: i * delayStep,
      },
    }),
  };
  useEffect(()=>{
    setTimeout(() => {
      setIsOnceFlag(true)
    }, 500);
  },[])
  const ref = useRef(null);

  const isInView = useInView(ref, { once: isOnceFlag });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren, 
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) ? (
          <motion.div
            key={index}
            custom={index}
            variants={FADE_VARIANT}
          >
            {child}
          </motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
