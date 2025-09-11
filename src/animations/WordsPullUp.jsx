"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export function WordsPullUp({ text, className = "", specialWords = [], theme="" }) {
  const lines = text.split("\n");

  const pullupVariant = {
    initial: { y: 80, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.18 },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={`flex flex-col ${className} gap-2`}>
      {lines.map((line, lineIndex) => {
        const words = line.split(" ");
        return (
          <div key={lineIndex} className="flex flex-wrap justify-start">
            {words.map((word, i) => (
              <motion.span
                key={i}
                ref={ref}
                variants={pullupVariant}
                initial="initial"
                animate={isInView ? "animate" : ""}
                custom={i}
                className="pr-2"
              >
                {specialWords.includes(word) ? (
                  <span className={theme}>{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
