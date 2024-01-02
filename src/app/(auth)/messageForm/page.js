import React from "react";
import { FaTimes } from "react-icons/fa";

const MessageForm = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen ">
      <div className="w-96 bg-[#f8f9fa] rounded-lg shadow-lg relative overflow-hidden mt-[150px]">
        <div className="bg-[#1376b9] text-white py-4 px-8 flex items-center justify-between">
          <p className="text-2xl">Contact Us</p>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => onClose()}
          />
        </div>
        <div className="p-6">
          <p className="text-center font-semibold mb-4">
            Please fill out the form below and we will get back to you as soon
            as possible.
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="* Name"
                className="p-2 bg-white outline-none w-full rounded-md text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                placeholder="* Phone"
                className="p-2 bg-white outline-none w-full rounded-md text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="* Email"
                className="p-2 bg-white outline-none w-full rounded-md text-sm"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="* Message"
                className="p-2 bg-white outline-none w-full rounded-md text-sm resize-none h-20"
              ></textarea>
            </div>
            <button className="bg-[#1376b9] text-white w-full py-3 rounded-md">
              Submit
            </button>
            <div className="flex  gap-2 justify-center items-center mt-4 ">
              <img
                src="https://embed.tawk.to/_s/v4/assets/images/Tawky_16x16.svg"
                alt="chat"
                width={20}
              />
              <p className="text-sm cursor-pointer ">
                Add free <b> live chat</b> to your site
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
