"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import SignUp from "../signup/page";

const Login = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(true);

  const handleSwitchToSignup = () => {
    setShowLogin(false);
  };
  return (
    <div className="flex justify-center w-full items-center h-screen font-sans shadow-2xl">
      {showLogin ? (
        <>
          <div className="bg-[#3b579d] w-[400px] h-[450px] flex flex-col justify-center items-center text-white rounded-l-lg">
            <h1 className="text-4xl">SIGN IN</h1>

            <p className=" text-lg font-light pt-8">To Track Your</p>
            <h1 className="text-5xl pb-8">CASHBACK</h1>
            <img
              src="https://cashbackpao.com/assets/images/money-icon.png"
              alt="rupees"
              width={150}
            />
          </div>
          <div className="bg-[#ffffff] w-[450px] h-[450px] rounded-r-lg p-6">
            <FaTimes
              className="ml-96 text-2xl text-black cursor-pointer"
              onClick={onClose}
            />
            <h1 className="text-xl font-normal text-center pb-4">SIGN IN</h1>

            <p className="font-light pb-4">Login By Email or Mobile Number</p>
            <form>
              <div className="border border-gray-200 ">
                <input
                  type="text"
                  placeholder="Enter Email or Registerd Mobile Number"
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
              <p className="mt-6 text-sm cursor-pointer text-[#39F]">
                Forgot your password
              </p>
              <input type="checkbox" />
              <span className="pl-2 font-light">keep me signed-in</span>
              <div>
                <button className="bg-[#fd7e14] text-white w-full py-3 border border-gray-100 rounded-md mt-4 hover:bg-white hover:border-[#fd7e14] hover:text-[#fd7e14]">
                  LOGIN
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <span className="font-light"> No account yet?</span>
              <span
                className="ml-2 text-lg text-[#39F] cursor-pointer"
                onClick={handleSwitchToSignup}
              >
                Click here to Register
              </span>
            </div>
          </div>
        </>
      ) : (
        <SignUp onCloseSignup={onClose} />
      )}
    </div>
  );
};

export default Login;
