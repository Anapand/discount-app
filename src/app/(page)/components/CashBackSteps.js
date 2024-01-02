import React from "react";
// import { BsArrowRight } from "react-icons/bs";
import Subscribe from "../components/Subscribe";

const CashBackSteps = () => {
  const steps = [
    {
      title: "Step 1",
      image: "https://cashbackpao.com/assets/images/login-step.png",
      description: "Join / Login to CashbackPao",
    },
    {
      title: "Step 2",
      image: "https://cashbackpao.com/assets/images/cart-step.png",
      description: "Click on Activate Cashback button and Shop",
    },
    {
      title: "Step 3",
      image: "https://cashbackpao.com/assets/images/wallet-step.png",
      description: "Get Cashback",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl font-bold font-sans p-8 sm:p-12 md:p-16 lg:p-20 text-[#333333]">
          HOW IT WORKS?
        </h1>

        <div className="flex flex-col sm:flex-row justify-evenly items-center bg-[#ffffff] w-[340px] sm:w-[1400px] mx-4 shadow-md rounded-sm overflow-x-auto">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex flex-col justify-between items-center p-4 sm:p-8 md:p-12 lg:p-16">
                <h1 className="font-bold">{step.title}</h1>

                <img
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  className="pt-4 sm:pt-8"
                  style={{ width: "80px" }}
                />
                <p className="pt-4 sm:pt-8 pb-6 text-center">
                  {step.description}
                </p>
                {/* {index < steps.length - 1 && (
                  <BsArrowRight className="hidden sm:block" />
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Subscribe />
      </div>
    </>
  );
};

export default CashBackSteps;
