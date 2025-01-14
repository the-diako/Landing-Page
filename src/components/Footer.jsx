import React from "react";
import {
  footerCopyRightLinks,
  footerLinks,
  footerSocialLinks,
} from "../constants";
import { web, WhiteLogo } from "../assets";
import IconButton from "./IconButton";

const Footer = () => {
  return (
    <section className="w-full bg-primary-color text-white py-10 pt-24 px-5 xl:px-20 relative">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-8 border-b-2 border-slate-500">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start mb-14">
          <img src={WhiteLogo} alt="Logo" className="w-[250px] mb-5" />
          <p className="font-Inter max-w-[380px] text-center mb-10 md:text-start">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>

        {footerLinks.map((items) => {
          return (
            <div
              key={items.id}
              className="flex flex-col items-center justify-center md:items-start md:justify-start"
            >
              <h1 className="font-Inter font-semibold text-xl mb-5">
                {items.title}
              </h1>

              <ul className="flex flex-col items-center justify-center gap-5 mb-10 md:items-start md:justify-start">
                {items.links.map((link) => {
                  return (
                    <li
                      key={link.id}
                      className="font-Inter font-light text-xl cursor-pointer"
                    >
                      {link.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <h1 className="font-Inter font-bold text-2xl mb-5 ">Try It Today</h1>
          <p className="font-Inter max-w-[380px] mb-3 text-center md:text-start">
            Get started for free. Add your whole team as your needs grow.
          </p>

          <IconButton title="Start today" />
        </div>
      </div>

      <div className="w-full flex flex-row items-center justify-between mt-5 px-5">
        <ul className="flex items-start justify-start gap-10">
          {footerCopyRightLinks.map((links) => {
            return (
              <li className="cursor-pointer" key={links.id}>
                <p>{links.title}</p>
              </li>
            );
          })}
        </ul>

        <ul className="flex items-center  justify-center gap-5">
          {footerSocialLinks.map((links) => {
            return (
              <li className="cursor-pointer" key={links.id}>
                <img
                  src={links.icon}
                  alt="social icons"
                  className="w-[20px] h-[20px] object-contain"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
