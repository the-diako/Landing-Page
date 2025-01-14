import React from "react";
import { sideBg01 } from "../assets";
import IconButton from "./IconButton";
import { osLinks } from "../constants";

const FreeTrial = () => {
  return (
    <section className="w-full bg-primary-color text-white py-10 pt-24 px-5 xl:px-20 relative">
      <div className="w-full flex flex-col items-center justify-center text-center md:flex-row mb-20">
        <div className="w-full flex flex-col items-start justify-start gap-5 mb-10 sm:items-center sm:justify-center sm:text-center">
          <h1 className="font-Inter text-start text-[45px] font-semibold sm:text-center sm:text-[65px] md:text-[75px] relative sm:max-w-[700px] lg:max-w-full ">
            Try Whitepace
            <br className="hidden sm:block" /> today
          </h1>

          <p className="font-Inter text-start font-normal text-white leading-7 mb-5 max-w-[230px] sm:text-center sm:max-w-full">
            Get started for free. <br className="hidden sm:block" /> Add your
            whole team as your needs grow.
          </p>

          <IconButton title="Try Taskey free" />

          <p className="font-Inter text-start font-normal text-white leading-7 mb-5 max-w-[230px] sm:text-center sm:max-w-full">
            On a big team? Contact sales
          </p>

          <div className="flex flex-row items-center justify-center gap-10">
            {osLinks.map((items) => {
              return (
                <img
                  src={items.icon}
                  alt="OS"
                  className="w-[40px] h-[40px] object-contain"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
