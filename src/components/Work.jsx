import React from "react";
import { sideBg01 } from "../assets";
import IconButton from "./IconButton";

const Work = () => {
  return (
    <section className="w-full bg-primary-color text-white py-10 pt-24 px-5 xl:px-20 relative">
      <div className="w-full flex flex-col items-center justify-center text-center md:flex-row mb-20">
        <div className="w-full flex flex-col items-start justify-start gap-5 mb-10 md:w-1/2 lg:items-center lg:justify-center">
          <h1 className="font-Inter text-start text-[45px] font-semibold sm:text-[60px] md:text-[55px] relative sm:max-w-[700px] lg:max-w-full">
            Your work, <br className="sm:hidden md:block lg:hidden" />{" "}
            everywhere you are
          </h1>

          <p className="font-Inter text-start font-normal text-white leading-7 mb-5 max-w-[460px] sm:max-w-full lg:text-center">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>

          <IconButton title="Try Taskey" />
        </div>
      </div>
      <img
        src={sideBg01}
        alt="Sidebg"
        className="absolute -top-36 -left-36 hidden sm:block"
      />
    </section>
  );
};

export default Work;
