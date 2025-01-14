import React from "react";
import { textBgYellow } from "../assets";
import { clients } from "../constants";

const Sponsors = () => {
  return (
    <section className="w-full py-10 pt-24 px-5 xl:px-20 relative">
      <div className="w-full flex flex-col items-center justify-center text-center mb-20">
        <div className="w-full flex flex-col items-center justify-center text-center gap-5 mb-10 md:w-1/2">
          <div className="relative">
            <h1 className="font-Inter text-[45px] font-semibold sm:max-w-[400px] sm:text-[50px] md:text-[55px] md:max-w-[450px]  ">
              Our sponsors
            </h1>

            <img
              src={textBgYellow}
              alt="Text Bg"
              className="absolute -bottom-1 -z-10 sm:bottom-0 sm:-right-10 sm:w-[300px] sm:h-[20px] md:w-[250px] md:h-[30px] md:right-1 lg:w-full"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-28 md:flex-row md:justify-between">
          {clients.map((items, index) => {
            return (
              <img
                src={items.icon}
                alt="Sponsors"
                className={`${
                  index === 0
                    ? "w-[70px] h-[70px] object-contain"
                    : "w-[180px] h-[70px] object-contain"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
