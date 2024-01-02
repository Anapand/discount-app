import React from "react";

const DealsOfTheDay = () => {
  return (
    <>
      <div className="bg-[#173245] w-full py-10 text-white flex justify-center items-center">
        <h1 className="text-2xl ">Deals of the Day(0)</h1>
      </div>
      <div className="bg-[#f8f9fa] w-full py-20 flex justify-center items-center gap-6">
        <div className="bg-[#ffffff] w-72 h-24 border border-gray-200 rounded-sm shadow-md">
          <p className=" border-b text-center mt-10 text-xl">
            Filter by Categories
          </p>
        </div>
        <p>
          Currently offers not listed for this selection, Please visit again or{" "}
          <br />
          <span className="text-[#1376b9] cursor-pointer">contact us</span> our
          support team will happy to help you, thanks.
        </p>
      </div>
    </>
  );
};
export default DealsOfTheDay;
