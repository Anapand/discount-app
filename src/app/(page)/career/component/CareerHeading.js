import React from "react";
import Link from "next/link";

const CareerHeading = () => {
  return (
    <>
      <div className="bg-[#173245] w-full py-10 text-white flex justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold ">Career with CashbackPao</h1>
          <div className="flex justify-center">
            <Link href={"/"}>
              <button className=" font-extralight ">Home</button>
            </Link>
            <span className="pl-4 font-extralight">
              /Career with Cashback Pao
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerHeading;
