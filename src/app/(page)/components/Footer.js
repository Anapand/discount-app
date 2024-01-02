import React from "react";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { PiInstagramLogo } from "react-icons/pi";
import { TfiYoutube } from "react-icons/tfi";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#353535] w-full pt-8 pb-5 text-[#ffffff]">
      <div className="flex flex-col md:flex-row justify-evenly ">
        <div className="flex flex-col gap-2 md:p-0 p-4">
          <h1 className=" border-b-2 border-gray-100 mb-1 contrast-75">
            Quick Links
          </h1>
          <ul className=" text-sm contrast-50 cursor-pointer ">
            <li className=" border-b border-gray-50  mb-2">Login</li>
            <li className=" border-b border-gray-50  mb-2">Register Free</li>
            <li className=" border-b border-gray-50  mb-2">Home</li>
            <li className=" border-b border-gray-50  mb-2">Deals of the Day</li>
            <li className=" border-b border-gray-50  mb-2">
              Cashback by Stores
            </li>
            <li>Cashback by Categories</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 md:p-0 p-4">
          <h1 className=" border-b-2 border-gray-100 mb-1 contrast-75">
            General
          </h1>
          <ul className=" text-sm contrast-50 cursor-pointer">
            <li className=" border-b border-gray-50  mb-2">About Us</li>
            <li className=" border-b border-gray-50  mb-2">Contact Us</li>
            <li className=" border-b border-gray-50  mb-2">Careers</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 md:p-0 p-4">
          <h1 className=" border-b-2 border-gray-100 mb-1 contrast-75">
            Others
          </h1>
          <ul className=" text-sm contrast-50 cursor-pointer">
            <li className=" border-b border-gray-50  mb-2">
              Terms & Conditions
            </li>
            <li className=" border-b border-gray-50  mb-2">
              Privacy & Cookies Policy
            </li>
            <li className=" border-b border-gray-50  mb-2">How it Works</li>
            <li>Refers & Earn</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 md:p-0 p-4">
          <h1 className=" border-b-2 border-gray-100 mb-1 contrast-75">
            Download APP
          </h1>
          <img
            src="https://cashbackpao.com/assets/images/download-android-app-cashbackpao.png"
            alt="google-button"
            className="pt-2 rounded-2xl"
          />

          <ul className="flex gap-4 pt-8">
            <li className="p-1  bg-white rounded-full text-black hover:bg-[#0a3869]">
              <TiSocialFacebook className="text-xl" />
            </li>
            <li className="p-1 bg-white rounded-full text-black hover:bg-[#136b77]">
              <TiSocialTwitter className="text-xl" />
            </li>
            <li className="p-1 bg-white rounded-full text-black hover:bg-[#2971bd]">
              <PiInstagramLogo className="text-xl" />
            </li>
            <li className="p-1 bg-white rounded-full text-black hover:bg-[#d11f34]">
              <TfiYoutube className="text-xl" />
            </li>
            <li className="p-1 bg-white rounded-full text-black">
              <BsTelegram className="text-xl" />
            </li>
          </ul>
        </div>
      </div>
      <div className=" border-t mt-4 md:p-0 p-4">
        <p className="text-center text-xs md:text-sm mt-4">
          This site is protected by reCAPTCHA and the Google
          <span className="text-[#fd7e14] cursor-pointer">Privacy Policy</span>
          and
          <span className="text-[#fd7e14] cursor-pointer">
            Terms of Service
          </span>
          apply.
          <br />
          Copyright @
          <span className="text-[#fd7e14] cursor-pointer">
            CashbackPao.com.
          </span>
          All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
