"use client";
import Login from "@/app/(auth)/login/page";
import SignUp from "@/app/(auth)/signup/page";
import React, { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import SidebarMenu from "../components/SidebarMenu";
import Navbar from "./Navbar";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleClick = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const handleLoginClick = () => {
    setShowLogin(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
    document.body.style.overflow = "auto";
  };
  const handleSignupClick = () => {
    setShowSignup(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseSignup = () => {
    setShowSignup(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      <div className="fixed w-full h-[120px] md:h-[75px] md:flex md:flex-row flex-col justify-between items-center bg-[#1376b9] p-4 md:p-8 z-10">
        <div className="flex items-center gap-6">
          <div className="md:hidden">
            <button onClick={handleClick} className="text-3xl text-white">
              {nav ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <img
            src="https://cashbackpao.com/assets/images/cashbackpao-logo.png"
            alt="logo"
            style={{ width: "160px", height: "44" }}
          />
          <div className="md:hidden text-white text-xl flex gap-2 items-center ml-4">
            <FaUser /> &#x20B9;0.00
          </div>
        </div>

        <div className="md:flex flex-row md:flex-col lg:flex-row flex-shrink">
          <div className="flex md:mt-0 mt-2 ">
            <input
              type="text"
              placeholder="What do you want to buy today?"
              className=" h-10 w-[100%] md:w-[600px] border-none rounded-l-sm p-2 text-[14px]"
            />
            <button className="bg-[#ff9d1f] text-white border-none h-10 rounded-r-sm px-4 text-[14px]">
              Search
            </button>
          </div>
        </div>
        <div className="hidden md:flex flex-row md:flex-col lg:flex-row">
          <button
            className="bg-[#66b92e] text-[#ffffff] font-medium border border-[#66b92e] px-5 py-2 rounded-sm text-[14px] mr-2 mb-2 lg:mb-0 lg:mr-2"
            onClick={handleLoginClick}
          >
            LOGIN
          </button>
          <button
            className="text-[#ffffff] font-medium border border-[#ffffff] px-5 py-2 rounded-sm text-[14px]"
            onClick={handleSignupClick}
          >
            JOIN FREE
          </button>
        </div>
      </div>
      {showLogin && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-xl z-50 ">
          <Login onClose={handleCloseLogin} />
        </div>
      )}
      {showSignup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-xl z-50">
          <SignUp onCloseSignup={handleCloseSignup} />
        </div>
      )}
      {nav && (
        <div
          className={`md:hidden fixed top-0 left-0 w-64 h-full bg-white z-50 transition-transform duration-700 ease-in-out border border-r-gray-100 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            <FaTimes
              onClick={handleClick}
              className="fixed text-2xl text-red-600 cursor-pointer"
            />
            <div>
              <SidebarMenu isOpen={nav} toggleSidebar={handleClick} />
            </div>
          </div>
        </div>
      )}
      <div className="pt-[75px]">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
