import React from "react";

const ReferalLink = ({ heading, text }) => {
  return (
    <div className="flex flex-col p-8">
      <p className=" font-bold pb-2 text-sm">{heading}</p>
      <div className="flex bg-[#e9ecef] border border-[#ced4da]">
        <p className="p-2 text-sm font-light">{text}</p>
        <button className="bg-[#fd7e14] text-white rounded-sm py-3 px-9">
          COPY
        </button>
      </div>
      <div className="flex pt-4 gap-2 items-center">
        <p className="font-bold text-sm">Invite by Social Media:</p>
        <img
          src="https://cashbackpao.com/assets/images/icons/whatsapp.png"
          alt="whatsup"
          width={30}
        />
        <img
          src="https://cashbackpao.com/assets/images/icons/facebook.png"
          alt="facebook"
          width={30}
        />
        <img
          src="https://cashbackpao.com/assets/images/icons/twitter.png"
          alt="twitter"
          width={30}
        />
      </div>
    </div>
  );
};

export default ReferalLink;
