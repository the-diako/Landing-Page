import React from "react";
import {
  workManagemnent01,
  workManagemnent02,
  textBgYellow,
  sideBg02,
} from "../assets";
import IconButton from "./IconButton";

const WorkManagement = () => {
  return (
    <section className="w-full py-10 pt-24 px-5 xl:px-20 relative">
      <div className="w-full flex flex-col items-center justify-center text-center md:flex-row mb-20">
        <div className="w-full flex flex-col items-center justify-center gap-5 mb-10 md:w-1/2 md:items-start md:text-start ">
          <div className="relative">
            <h1 className="font-Inter text-[45px] font-semibold sm:max-w-[400px] sm:text-[50px] md:text-[55px] md:max-w-[350px] lg:max-w-[550px] ">
              Project
              <br className="xs:block sm:hidden md:block" /> Management
            </h1>

            <img
              src={textBgYellow}
              alt="Text Bg"
              className="absolute -bottom-1 -z-10 sm:bottom-0 sm:-right-10 sm:w-[300px] sm:h-[20px] md:w-[250px] md:h-[30px] md:right-1 lg:w-full"
            />
          </div>
          <p className="font-Inter font-normal text-secondary-dark leading-7 mb-5 max-w-[260px] sm:max-w-full md:max-w-[600px]  ">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>

          <IconButton title="Get Started" />
        </div>

        <div className="w-full mx-auto flex items-center justify-center mb-10 md:w-1/2  ">
          <img
            src={workManagemnent01}
            alt="workManagemnent"
            className="w-[520px] object-cover md:w-full"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center text-center md:flex-row-reverse">
        <div className="w-full flex flex-col items-center justify-center gap-5 mb-10 md:w-1/2 md:items-start md:text-start ">
          <div className="relative">
            <h1 className="font-Inter text-[45px] font-semibold sm:max-w-[400px] sm:text-[50px] md:text-[55px] md:max-w-[350px] lg:max-w-[550px] ">
              Work
              <br className="xs:block sm:hidden md:block" /> together
            </h1>

            <img
              src={textBgYellow}
              alt="Text Bg"
              className="absolute -bottom-1 -z-10 sm:bottom-0 sm:-right-10 sm:w-[300px] sm:h-[20px] md:w-[250px] md:h-[30px] md:right-1 lg:w-full"
            />
          </div>
          <p className="font-Inter font-normal text-secondary-dark leading-7 mb-5 max-w-[260px] sm:max-w-full md:max-w-[600px]  ">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>

          <IconButton title="Try it now" />
        </div>

        <div className="w-full mx-auto flex items-center justify-center mb-10 md:w-1/2  ">
          <img
            src={workManagemnent02}
            alt="workManagemnent"
            className="w-[520px] object-cover "
          />
        </div>
      </div>

      <div className="absolute top-10 -left-56 -z-10">
        <img src={sideBg02} alt="side background" />
      </div>
    </section>
  );
};

export default WorkManagement;
