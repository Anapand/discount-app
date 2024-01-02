import React from "react";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { MdOutlineLocalPhone, MdOutlineMail } from "react-icons/md";

const ContactAddress = () => {
  return (
    <>
      <div className="bg-[#ffffff] w-[350px] h-60 border border-gray-200 rounded-sm shadow-md flex flex-col items-start justify-center px-8 font-sans py-6 cursor-pointer ">
        <p className="flex gap-1">
          <span>
            <LiaMapMarkerAltSolid className="text-md mt-1" />
          </span>
          <span className="font-light">CashbackPao, 893/8, Ward No.8,</span>
        </p>
        <p className="font-light ml-2">Mehrauli, New Delhi-110030</p>
        <p className="mt-4 flex gap-1 text-[#1376b9]">
          <span>
            <MdOutlineLocalPhone className="text-md mt-1" />
          </span>
          <span>+918287121346</span>
        </p>
        <p className="mt-4 flex gap-1 text-[#1376b9]">
          <span>
            <MdOutlineMail className="text-md mt-1" />
          </span>
          <span>support@cashbackpao.com</span>
        </p>
      </div>
    </>
  );
};

export default ContactAddress;
