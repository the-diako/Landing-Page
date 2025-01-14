import React from "react";
import { apps } from "../assets";
import IconButton from "./IconButton";

const Apps = () => {
  return (
    <section className="hero-section w-full bg-primary-color text-white py-10 pt-24 px-5 xl:px-20">
      <div className="w-full flex flex-col-reverse items-center justify-center text-center md:flex-row-reverse">
        <div className="w-full flex flex-col items-center justify-center gap-5 mb-10 md:w-1/2 md:items-start md:text-start ">
          <h1 className="font-Inter text-[35px] font-semibold sm:text-[40px] md:text-[50px] ">
            Work with Your Favorite Apps Using whitepace
          </h1>
          <p className="font-Inter font-light leading-7 mb-5 max-w-[260px] sm:max-w-full md:max-w-[450px] lg:max-w-full ">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>

          <IconButton title="Read more" />
        </div>

        <div className="w-full mx-auto flex items-center justify-center mb-10 md:w-1/2 md:mr-10 ">
          <img src={apps} alt="" className="w-[520px] object-cover md:w-full" />
        </div>
      </div>
    </section>
  );
};

export default Apps;
