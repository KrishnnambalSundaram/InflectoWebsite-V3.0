import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommonContactUs from "./components/CommonContactUs";
import Lenis from "lenis";

const App = () => {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    // create Lenis only once
    const lenis = new Lenis({
      duration: 0.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  useEffect(() => {
    // if (lenisRef.current) {
      lenisRef?.current?.scrollTo(0, { immediate: false });
    // }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
    {/* <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#3b0a9e] to-[#290b66]"> */}
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {location.pathname !== "/contact" && <CommonContactUs />}
      <Footer />
    </div>
  );
};

export default App;
