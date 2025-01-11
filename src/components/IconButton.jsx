import React from "react";
import { rightArrow } from "../assets";
const IconButton = ({ title }) => {
  return (
    <button className="bg-primary-light text-white px-5 py-2 rounded-md flex items-center justify-center outline-none">
      {title}
      <img src={rightArrow} alt="right arrow" className="w-[30px] ml-3" />
    </button>
  );
};

export default IconButton;
