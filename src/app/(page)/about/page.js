import React from "react";
import Link from "next/link";
import Details from "./component/Details";
import ListItems from "./component/ListItems";

const AboutUs = () => {
  return (
    <>
      <div className="bg-[#173245] w-full py-10 text-white flex justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold ">About Us</h1>
          <div className="flex justify-center">
            <Link href={"/"}>
              <button className=" font-extralight ">Home</button>
            </Link>
            <span className="pl-4 font-extralight">/Refer</span>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f9fa] w-full py-8 flex justify-center gap-4">
        <Details />
        <ListItems />
      </div>
    </>
  );
};

export default AboutUs;
