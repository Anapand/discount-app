import React from "react";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center h-screen font-sans bg-[#f8f9fa]">
      <div className="flex flex-col bg-[#ffffff] border border-gray-200 rounded-md shadow-lg h-80 w-[550px] py-6 px-16">
        <h1 className="text-2xl font-light">Forgot Password?</h1>
        <div className="border border-gray-200 p-4 mt-3">
          <p className="font-bold ">Enter Your Email</p>
          <div className="border border-gray-200 mt-2 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 bg-white outline-none w-full rounded-md  py-3"
            />
          </div>
          <button className="bg-[#0a2db2] py-2 px-6 text-[#ffffff] rounded-md mt-4">
            Sent Password
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <span className=" font-light">Want to Log in?</span>
          <span className="text-[#39F] ml-2 cursor-pointer font-bold">
            Click here to Login
          </span>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
