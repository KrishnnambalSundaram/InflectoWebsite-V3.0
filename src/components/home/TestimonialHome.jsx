import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    company: "Sisyphus",
    quote:
      "We’ve been using Untitled to kick start every new project and can't imagine working without it.",
    author: "Candice Wu",
    role: "Product Manager, Sisyphus",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    company: "TechNova",
    quote:
      "This platform has transformed the way our team collaborates. Absolutely essential!",
    author: "Michael Scott",
    role: "Regional Manager, TechNova",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    company: "Globex",
    quote:
      "A powerful tool that adapts to our workflow seamlessly. Highly recommend!",
    author: "Sophia Johnson",
    role: "CTO, Globex",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  }),
};

const TestimonialHome = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="w-full py-16 px-6 flex flex-col items-center bg-[#EDFEFF]">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl manrope-bold text-center text-[#4B371C] mb-10">
        Testimonials
      </h2>

      {/* Card */}
      <div className="relative w-full max-w-7xl rounded-3xl p-8 my-5 text-center flex flex-col items-center overflow-hidden">
        {/* Left button */}
        <button
          onClick={handlePrev}
          className="absolute left-1 md:left-5 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl p-2 hover:bg-gray-100 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Animated Content */}
        <div className="relative w-[90%] min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonials[index].id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full"
            >
              <p className="text-green-600 manrope-bold">
                {testimonials[index].company}
              </p>
              <p className="text-lg md:text-[28px] lg:text-[32px] manrope-regular text-gray-800 mt-4 leading-tight">
                "{testimonials[index].quote}"
              </p>
              <div className="flex flex-col items-center mt-6">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="mt-3 font-medium text-gray-900">
                  {testimonials[index].author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right button */}
        <button
          onClick={handleNext}
          className="absolute right-1 md:right-5 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl p-2 hover:bg-gray-100 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialHome;
