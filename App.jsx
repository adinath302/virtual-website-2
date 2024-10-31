import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import Workflow from "./Components/Workflow";
import Pricing from "./Components/Pricing.jsx";
import Testimonials from "./Components/Testimonials.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>
    </>
  );
};

export default App;
