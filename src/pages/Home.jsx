import React from "react";
import HeroHome from "../components/home/HeroHome";
import AboutUsHome from "../components/home/AboutUsHome";
import DAIHome from "../components/home/DAIHome";
import ServicesHome from "../components/home/ServicesHome";
import LogoMarqee from "../components/home/LogoMarqee";
import LocationHome from "../components/home/Locationhome";
import TestimonialHome from "../components/home/TestimonialHome";

const Home = () => {
  return (
    <>
      <HeroHome/>
      <LogoMarqee/>
      <AboutUsHome/>
      <DAIHome/>
      <ServicesHome/>
      <LocationHome/>
      {/* <TestimonialHome/> */}
    </>
  );
};

export default Home;
