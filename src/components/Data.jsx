import React from "react";
import { dataImage, textBgYellow } from "../assets";
import IconButton from "./IconButton";

const Data = () => {
  return (
    <section className="w-full py-10 pt-24 px-5 xl:px-20 relative">
      <div className="w-full flex flex-col items-center justify-center text-center md:flex-row mb-20">
        <div className="w-full flex flex-col items-center justify-center gap-5 mb-10 md:w-1/2 md:items-start md:text-start ">
          <div className="relative">
            <h1 className="font-Inter text-[45px] font-semibold sm:max-w-[400px] sm:text-[50px] md:text-[55px] md:max-w-[350px] lg:max-w-[550px] ">
              100% your data
            </h1>

            <img
              src={textBgYellow}
              alt="Text Bg"
              className="absolute -bottom-1 -z-10 sm:bottom-0 sm:-right-10 sm:w-[300px] sm:h-[20px] md:w-[250px] md:h-[30px] md:right-1 lg:w-full"
            />
          </div>
          <p className="font-Inter font-normal text-secondary-dark leading-7 mb-5 max-w-full">
            The app is open source and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.{" "}
          </p>

          <IconButton title="Read more" />
        </div>

        <div className="w-full mx-auto flex items-center justify-center mb-10 md:w-1/2  ">
          <img
            src={dataImage}
            alt="workManagemnent"
            className="w-[520px] object-cover md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Data;
