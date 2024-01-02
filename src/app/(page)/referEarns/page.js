import React from "react";
import Link from "next/link";
import ReferalLink from "./component/ReferalLink";

const ReferEarns = () => {
  const data = [
    {
      heading: "Your Unique Referral Link for Website:",
      text: "Earn Real Cashback on Your Every Shopping & Transfer it to Your Bank Account. Join CashbackPao.com for Free. Visit: https://cashbackpao.com/?ref=",
    },
    {
      heading: "Your Unique Referral Link for Android App:",
      text: "Earn Real Cashback on Your Every Shopping & Transfer it to Your Bank Account. Join CashbackPao.com for Free. Join by my Referral ID: https://play.google.com/store/apps/details?id=jmtw.app.cashbackpao",
    },
  ];
  const listItems = [
    { text: "About Us", link: "/about" },
    { text: "Terms & Conditions", link: "/terms" },
    { text: "Privacy & Security Policy", link: "/privacy" },
    { text: "How it Works", link: "/how-it-works" },
    { text: "Career", link: "/career" },
    { text: "Contact Us", link: "/contact" },
    { text: "Refer & Earn", link: "/refer-and-earn" },
  ];
  return (
    <>
      <div className="bg-[#173245] w-full py-10 text-white flex justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold ">Refer & Earn</h1>
          <div className="flex justify-center">
            <Link href={"/"}>
              <button className=" font-extralight ">Home</button>
            </Link>
            <span className="pl-4 font-extralight">/Refer</span>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f9fa] w-full py-8 flex justify-center gap-4">
        <div className="bg-[#ffffff] w-[720px] border border-gray-200 rounded-sm shadow-md flex flex-col items-start justify-start px-8 font-sans py-9">
          <h1 className="text-2xl font-light">
            Invite Your Friends and Get 10% Cashback for Life time.
          </h1>
          <h1 className="text-2xl font-light">
            You will earn every single time they will get Cashback.*
          </h1>
          <h1 className="text-2xl font-light mt-6">
            + ₹20 You Will Get Joining Bonus On Each Joining.*
          </h1>
          <h1 className="text-2xl font-light">
            + ₹20 Your Friend Will Get Joining Bonus.*
          </h1>
          <p className="font-bold mt-8">Example</p>
          <p className="font-light mt-4">
            - Suppose you Invite a Friend and your Friend Earns ₹3000 Cashback
            so you will get 10% of ₹3000 = ₹300
          </p>
          <p className="font-light mt-4">
            - If you Invite 50 Friends and they shop then you can earn ₹300*50 =
            ₹15000
          </p>
          <p className="font-bold mt-6">How to Use Referral ID?</p>
          <p className="font-light mt-4">
            Your Friend need to use your Referral ID at the time of Sign up. See
            the screenshot below
          </p>
          <img
            src="https://cashbackpao.com/assets/images/referral_signup.png"
            alt="signup"
            className="mt-4"
          />
          {data.map((item, index) => (
            <div key={index}>
              <ReferalLink heading={item.heading} text={item.text} />
            </div>
          ))}
          <h1 className="text-2xl font-light pl-56 pt-8">Happy Earning!</h1>
          <p className=" text-sm font-extralight py-12">*T&C Apply.</p>
        </div>
        <div className="bg-[#ffffff] w-[350px] h-80 border border-gray-200 rounded-sm shadow-md flex flex-col items-start justify-start px-8 font-sans py-6 cursor-pointer ">
          <ul>
            {listItems.map((item, index) => (
              <li key={index} className="text-[#1376b9] p-2">
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default ReferEarns;
