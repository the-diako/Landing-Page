import React, { useState } from "react";
import { WhiteLogo, menu, close, whiteDownArrow } from "../assets";
import { navLinks } from "../constants";
import IconButton from "./IconButton";
import OutlineButton from "./OutlineButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <section className="w-full fixed bg-primary-color py-4">
      <div className="w-full flex items-center justify-between relative px-2 xl:px-20 ">
        <img
          src={WhiteLogo}
          alt="Logo"
          className="w-[150px] h-auto cursor-pointer object-contain"
        />

        <div className="hidden absolute right-12 flex-row items-center justify-center gap-2 sm:flex md:hidden">
          <OutlineButton
            title="Login"
            style={"bg-secondary-light text-primary-color"}
          />
          <IconButton title="Try Whitepace free" />
        </div>

        <ul
          className={`
            w-full 
            absolute 
            top-11 
            bg-primary-color 
            text-white 
            flex 
            flex-col 
            items-start 
            pl-5 
            space-y-10 
            transition-all
            duration-300
            py-10 
            md:w-auto
            md:static
            md:flex-row
            md:items-center
            md:justify-center
            md:bg-transparent
            md:space-y-0
            md:space-x-10
            md:pl-0
            md:py-0
            

            
            ${isMenuOpen ? "-left-[100%]" : "left-0"}
            `}
        >
          {navLinks.map((links) => {
            return (
              <li
                key={links.id}
                className="flex items-center gap-1 cursor-pointer hover:text-secondary-light"
              >
                <p>{links.link}</p>
                <img src={whiteDownArrow} alt="Down Arrow" />
              </li>
            );
          })}

          <div className="flex flex-col items-start gap-2 sm:hidden md:flex md:flex-row md:items-center">
            <OutlineButton
              title="Login"
              style={"bg-secondary-light text-primary-color"}
            />
            <IconButton title="Try Whitepace free" />
          </div>
        </ul>

        <img
          src={isMenuOpen ? menu : close}
          alt="Menu Icon"
          className="w-[30px] h-[30px] cursor-pointer md:hidden block "
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
    </section>
  );
};

export default Navbar;
