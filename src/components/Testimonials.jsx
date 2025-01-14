import React from "react";
import { textBgYellow, blueQuote, WhiteQuote } from "../assets";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="w-full py-10 pt-24 px-5 xl:px-20 relative overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center text-center mb-20">
        <div className="w-full flex flex-col items-center justify-center text-center gap-5 mb-16 md:w-1/2">
          <div className="relative">
            <h1 className="font-Inter text-[45px] font-semibold sm:text-[50px] md:text-[55px]">
              What Our Clients Says
            </h1>

            <img
              src={textBgYellow}
              alt="Text Bg"
              className="absolute -bottom-1 -z-10 sm:bottom-0 sm:-right-10 sm:w-[300px] sm:h-[20px] md:w-[250px] md:h-[30px] md:right-1 lg:w-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {testimonials.map((cards, index) => {
            const isCardFirstOrLast = index === 0;
            return (
              <div
                key={cards.id}
                className={`rounded-lg py-10 px-10 sm:w-[450px] shadow-xl flex items-center flex-col ${
                  isCardFirstOrLast
                    ? "bg-white text-secondary-dark "
                    : "bg-primary-light text-white"
                }`}
              >
                <div className="w-full flex flex-col items-start justify-start gap-10 border-b-[1px] border-secondary-dark pb-10">
                  <img src={cards.icon} alt="Blue Quote" />

                  <p className="text-start font-Inter font-light text-[14px]">
                    {cards.title}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-5 mt-10">
                  <img src={cards.userIcon} alt="user Icon" />
                  <div className="flex flex-col items-start text-start gap-5 ml-2">
                    <h4 className="text-secondary-dark font-Inter text-2xl font-semibold">
                      {cards.userText}
                    </h4>
                    <p className="font-Inter font-light">{cards.userContent}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
