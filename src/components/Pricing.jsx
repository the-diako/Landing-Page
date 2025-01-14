import React from "react";
import { textBgYellow } from "../assets";
import IconButton from "./IconButton";
import { planCards } from "../constants";

const Pricing = () => {
  return (
    <section className="w-full py-10 pt-24 px-5 xl:px-20 relative">
      <div className="w-full flex flex-col items-center justify-center text-center mb-20">
        <div className="w-full flex flex-col items-center justify-center text-center gap-5 mb-10 md:w-1/2">
          <div className="relative">
            <h1 className="font-Inter text-[45px] font-semibold sm:max-w-[400px] sm:text-[50px] md:text-[55px] md:max-w-[450px]  ">
              Choose Your
              <br className="xs:block sm:hidden " /> Plan
            </h1>

            <img
              src={textBgYellow}
              alt="Text Bg"
              className="absolute -bottom-1 -z-10 sm:bottom-0 sm:-right-10 sm:w-[300px] sm:h-[20px] md:w-[250px] md:h-[30px] md:right-1 lg:w-full"
            />
          </div>
          <p className="font-Inter font-normal text-secondary-dark leading-7 mb-5 max-w-[260px] sm:max-w-full md:max-w-full  ">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10 ">
          {planCards.map((cards, index) => {
            const isCardFirstOrLast =
              index === 0 || index === planCards.length - 1;
            return (
              <div
                key={cards.id}
                className={`rounded-lg py-10 px-5 w-[350px]  ${
                  isCardFirstOrLast
                    ? "bg-white border-2 border-secondary-light text-black "
                    : "bg-primary-color text-white transform md:scale-110"
                }`}
              >
                <h4 className="font-Inter mb-10 font-semibold text-xl">
                  {cards.id}
                </h4>

                <h1
                  className={`text-2xl font-Inter font-bold mb-5 ${
                    isCardFirstOrLast ? "text-black" : "text-secondary-light"
                  }`}
                >
                  {cards.title}
                </h1>
                <p className="font-Inter font-light mb-5">{cards.headerText}</p>

                <ul className="flex flex-col ">
                  {cards.content.map((items) => {
                    return (
                      <div>
                        <li
                          key={items.id}
                          className="flex items-center justify-start gap-10 text-start mb-5"
                        >
                          <img src={items.icon} alt="CheckBox Icon" />
                          <p className="font-Inter">{items.text}</p>
                        </li>
                        {items.Btn}
                      </div>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
