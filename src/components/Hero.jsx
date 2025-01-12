import React from "react";
import { bg, hero } from "../assets";
import IconButton from "./IconButton";

const Hero = () => {
  return (
    <section className="hero-section w-full bg-primary-color text-white py-10 pt-24 px-5 xl:px-20">
      <div className="w-full flex flex-col items-center justify-center text-center md:flex-row">
        <div className="w-full flex flex-col items-center justify-center gap-5 mb-10 md:w-1/2 md:items-start md:text-start ">
          <h1 className="font-Inter text-[35px] font-semibold sm:max-w-[400px] sm:text-[40px] md:text-[50px] md:max-w-[350px] lg:max-w-[550px] ">
            Get More Done <br className="xs:block sm:hidden" /> with whitepace
          </h1>
          <p className="font-Inter font-light leading-7 mb-5 max-w-[260px] sm:max-w-full md:max-w-[450px] lg:max-w-full ">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>

          <IconButton title="Try TasKey Free" />
        </div>

        <div className="w-full mx-auto flex items-center justify-center mb-10 md:w-1/2  ">
          <img src={hero} alt="" className="w-[520px] object-cover md:w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
