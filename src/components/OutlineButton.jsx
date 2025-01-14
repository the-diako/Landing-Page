import React from "react";

const OutlineButton = ({ title, style }) => {
  return (
    <button
      className={`bg-primary-light text-white px-5 py-2 rounded-md outline-none font-Inter ${style}`}
    >
      {title}
    </button>
  );
};

export default OutlineButton;
