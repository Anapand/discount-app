import React from "react";
import Link from "next/link";
import Card from "../components/Card";

const Flipkart = () => {
  return (
    <>
      <div className="bg-[#dad9d9] w-full pt-6 pb-12">
        <div className="flex justify-evenly">
          <img
            src="https://cashbackpao.com/assets/images/error_404.png"
            alt="avatar"
            width={220}
          />
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-2xl font-bold ">
              OOPS! 4O4 ERROR! THIS PAGE DOES NOT EXIST
            </h1>
            <div className="flex gap-2 items-center">
              <Link href={"/"}>
                <button className="bg-[#0a2db2] rounded-md text-white py-2 px-3">
                  Go Back
                </button>
              </Link>
              <p className="text-2xl font-light">
                to Home Page or explore the latest coupons below.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Card />
    </>
  );
};

export default Flipkart;
