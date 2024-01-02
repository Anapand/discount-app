"use client";
import Link from "next/link";
import React from "react";

const Amazon = () => {
  const amazonURL = "https://www.amazon.com";

  const handleVisitStore = () => {
    window.open(amazonURL, "_blank");
  };
  return (
    <>
      <div className="bg-[#173245] w-full py-8 text-white">
        <div className="flex justify-center items-center gap-10">
          <img
            src="https://cashbackpao.com/assets/images/stores/amazon_coupons.png"
            alt="amazon"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium">Amazon India Coupons</h1>
            <p className=" text-xl font-extralight">
              There is no cashback on this store for now
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f9fa] w-full py-8 flex justify-center gap-4">
        <div className="bg-[#ffffff] w-72 h-24 border border-gray-200 rounded-sm shadow-md">
          <p className=" border-b text-center mt-10 text-xl">
            Filter by Categories
          </p>
        </div>
        <div className="bg-[#ffffff] w-[860px] h-52 border border-gray-200 rounded-sm shadow-md flex items-center justify-center gap-8 px-6">
          <img
            src="https://cashbackpao.com/assets/images/stores/amazon_coupons.png"
            alt="amazon"
            className="border-r"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-normal">
              Amazon India Coupons - Get Heighest Cashback, Discount Coupons &
              Deals
            </h1>
            <p className="text-[#ff9d1f]">
              There is no cashback on this store for now
            </p>
            <p className="text-[#1376b9]">See Store Details</p>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <img
                  src="https://cashbackpao.com/assets/images/icons/whatsapp.png"
                  alt="whatsup"
                  width={40}
                />
                <img
                  src="https://cashbackpao.com/assets/images/icons/facebook.png"
                  alt="facebook"
                  width={40}
                />
                <img
                  src="https://cashbackpao.com/assets/images/icons/twitter.png"
                  alt="twitter"
                  width={40}
                />
              </div>
              <Link href={amazonURL}>
                <button
                  className="py-2 px-8 bg-[#ff9d1f] text-white rounded-md"
                  onClick={handleVisitStore}
                >
                  Visit Store
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amazon;
