"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Login from "../login/page";

const SignUp = ({ onCloseSignup }) => {
  const [showSignup, setShowSignup] = useState(true);
  const handleSwitchToLogin = () => {
    setShowSignup(false);
  };
  return (
    <div className="flex justify-center w-full items-center h-screen font-sans shadow-2xl">
      {showSignup ? (
        <>
          <div className="bg-[#3b579d] w-[400px] h-[500px] flex flex-col justify-center items-center text-white rounded-l-lg">
            <h1 className="text-4xl">SIGN UP</h1>

            <p className=" text-lg font-light pt-8">To Track Your</p>
            <h1 className="text-5xl pb-8">CASHBACK</h1>
            <img
              src="https://cashbackpao.com/assets/images/money-icon.png"
              alt="rupees"
              width={150}
            />
          </div>
          <div className="bg-[#ffffff] w-[450px] h-[500px] rounded-r-lg p-4">
            <FaTimes
              className="ml-96 text-2xl text-black cursor-pointer"
              onClick={onCloseSignup}
            />
            <h1 className="text-xl font-normal text-center pb-4">SIGN UP</h1>
            <h1 className="text-center text-[#fb0d86f5] text-xl pb-4">
              Get ₹20 Joining Bonus
            </h1>
            <span className="font-light">If already Registered?</span>
            <span
              className="ml-2 text-sm text-[#39F] cursor-pointer"
              onClick={handleSwitchToLogin}
            >
              Click here to Login
            </span>
            <form>
              <div className="border border-gray-200 mt-2 ">
                <input
                  type="text"
                  placeholder="Enter your full Name"
                  className="p-2 bg-white outline-none w-full rounded-md text-sm py-3"
                />
              </div>
              <div className=" border border-gray-200 mt-4">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="p-2 bg-white outline-none w-full rounded-md text-sm py-3"
                />
              </div>
              <div className=" border border-gray-200 mt-4">
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="p-2 bg-white outline-none w-full rounded-md text-sm py-3"
                />
              </div>

              <input type="checkbox" className="mt-6" />
              <span className="pl-2 font-light">
                By Signing up, I accept the
              </span>
              <span className="text-[#39F] ml-2 cursor-pointer">
                Terms & Conditions.
              </span>
              <div>
                <button className="bg-[#fd7e14] text-white w-full py-3 border border-gray-100 rounded-md mt-8 hover:bg-white hover:border-[#fd7e14] hover:text-[#fd7e14]">
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <Login onClose={onCloseSignup} />
      )}
    </div>
  );
};

export default SignUp;
