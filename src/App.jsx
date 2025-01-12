import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkManagement from "./components/WorkManagement";
import Extension from "./components/Extension";
import Customize from "./components/Customize";
import Pricing from "./components/Pricing";
import Work from "./components/Work";
import Data from "./components/Data";
import Sponsors from "./components/Sponsors";
import Apps from "./components/Apps";
import Testimonials from "./components/Testimonials";
import FreeTrial from "./components/FreeTrial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />

      <Hero />
      <WorkManagement />
      <Extension />
      <Customize />
      <Pricing />
      <Work />
      <Data />
      <Sponsors />
      <Apps />
      <Testimonials />
      <FreeTrial />
      <Footer />
    </div>
  );
};

export default App;
