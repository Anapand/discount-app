import React from "react";
import Footer from "../components/Footer";

const Subscribe = () => {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row md:justify-evenly bg-[#f8f8f8] shadow-2xl py-8 md:py-14 px-4 md:px-0">
        <div className="flex justify-center items-center mb-4 md:mb-0">
          <img
            src="https://cashbackpao.com/assets/images/message.png"
            alt="avatar"
            className="w-20 md:w-24"
          />
          <div className="flex flex-col justify-center items-start gap-2 ml-4 md:ml-6">
            <h1 className="text-lg md:text-2xl font-bold">
              Subscribe to CashbackPao
            </h1>
            <p className="text-xs md:text-sm">
              Subscribe to get the best deals & offers in your mail.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
          <input
            type="text"
            className="h-12 md:h-[52px] w-full md:w-[430px] border border-gray-200 rounded-l-sm p-2 text-xs md:text-base"
            placeholder="YOUR EMAIL ADDRESS..."
          />
          <button className="bg-[#1376b9] text-[#ffffff] border-none h-12 md:h-[52px] rounded-r-sm px-4 mt-4 md:mt-0 md:ml-2 text-xs md:text-base">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Subscribe;
