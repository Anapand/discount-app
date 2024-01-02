import React from "react";

const ContactDetail = () => {
  return (
    <>
      <div className="bg-[#ffffff] w-[720px] border border-gray-200 rounded-sm shadow-md  items-start justify-start px-10 font-sans py-9">
        <h1 className="text-2xl font-bold">GIVE US A SHOUT</h1>
        <p className=" italic text-base font-light mt-2">
          Use the form below to drop us an e-mail.
        </p>
        <form>
          <div className="mt-8">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="p-2 bg-white outline-none w-full rounded-md text-sm py-3 border border-gray-300 mt-2"
            />
          </div>
          <div className="mt-4">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 bg-white outline-none w-full rounded-md text-sm py-3 border border-gray-300 mt-2"
            />
          </div>
          <div className="mt-4">
            <label>Mobile Number</label>
            <input
              type="number"
              placeholder="Enter Registered mobile number"
              className="p-2 bg-white outline-none w-full rounded-md text-sm py-3 border border-gray-300 mt-2"
            />
          </div>
          <div className="mt-4">
            <label>Subject</label>
            <input
              type="text"
              placeholder="Enter Subject here"
              className="p-2 bg-white outline-none w-full rounded-md text-sm py-3 border border-gray-300 mt-2"
            />
          </div>
          <div className="mt-4">
            <label>Message</label>
            <textarea
              type="text"
              className=" bg-white outline-none w-full rounded-md text-sm py-8 border border-gray-300 mt-2"
            />
          </div>
          <button className=" py-3 px-6 text-white bg-[#ff9d1f] mt-4 rounded-full">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactDetail;
