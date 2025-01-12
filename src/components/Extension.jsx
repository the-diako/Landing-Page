import React from "react";
import { customize02, textBgYellow } from "../assets";
import IconButton from "./IconButton";
const Extension = () => {
  return (
    <section className="w-full bg-primary-color text-white py-10 pt-24 px-5 xl:px-20 relative">
      <div className="w-full flex flex-col items-center justify-center text-center md:flex-row mb-20">
        <div className="w-full flex flex-col items-center justify-center gap-5 mb-10 md:w-1/2 md:items-start md:text-start ">
          <div className="relative">
            <h1 className="font-Inter text-[45px] font-semibold sm:max-w-[400px] sm:text-[50px] md:text-[55px] md:max-w-[350px] lg:max-w-[550px] ">
              Use as
              <br className="xs:block sm:hidden md:block" /> Extension
            </h1>

            <img
              src={textBgYellow}
              alt="Text Bg"
              className="absolute -bottom-1 -z-10 sm:bottom-0 sm:-right-10 sm:w-[300px] sm:h-[20px] md:w-[250px] md:h-[30px] md:right-1 lg:w-full"
            />
          </div>
          <p className="font-Inter font-normal text-white leading-7 mb-5 max-w-[260px] sm:max-w-full md:max-w-[600px]  ">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>

          <IconButton title="Let's Go" />
        </div>

        <div className="w-full mx-auto flex items-center justify-center mb-10 md:w-1/2  ">
          <img
            src={customize02}
            alt="customize"
            className="w-[520px] object-cover md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Extension;
