import React from "react";

const Section = ({ step, title, description, imageUrl }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly  bg-[#ffffff] w-[340px] sm:w-[1150px] mx-4 shadow-md rounded-sm overflow-x-auto p-6 gap-4">
      <div className="flex items-center justify-center rounded-full bg-[#173245] text-white text-lg w-16 h-8">
        {step}
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm font-light">{description}</p>
      </div>
      <img src={imageUrl} alt="login" width={400} />
    </div>
  );
};

export default Section;
