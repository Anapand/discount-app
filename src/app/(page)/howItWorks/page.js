import React from "react";
import Section from "./components/Section";

const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1",
      image: "https://cashbackpao.com/assets/images/login-step.png",
      description: "Join / Login to CashbackPao",
    },
    {
      title: "Step 2",
      image: "https://cashbackpao.com/assets/images/click-step.png",
      description: "Click on any Cashback Deal of your choice",
    },
    {
      title: "Step 3",
      image: "https://cashbackpao.com/assets/images/cart-step.png",
      description: "Place order at the Retailer site",
    },
    {
      title: "Step 4",
      image: "https://cashbackpao.com/assets/images/wallet-step.png",
      description: "Get Cashback at CashbackPao",
    },
    {
      title: "Step 5",
      image: "https://cashbackpao.com/assets/images/money-step.png",
      description: "Transfer Your Money",
    },
  ];
  const stepSection = [
    {
      title: "Join / Login to CashbackPao",
      description:
        "Joining CashbackPao is 100% free. You can join very easily by using your Mobile number. Please note that without signing in, we are unable to provide you any cashback.",
      imageUrl:
        "https://cashbackpao.com/assets/images/hcw-cashbackpao-signin.jpg",
    },
    {
      title: "Click on a Cashback Deal you like",
      description:
        'Navigate through the menu or use search tools to find Retailer, Cashback offers or Discount coupons. Click on the "GRABE DEAL" button you will redirect automatically on the Retailer web site like Flipkart, Amazon, Paytm etc.',
      imageUrl: "https://cashbackpao.com/assets/images/hcw-step2.jpg",
    },
    {
      title: "Shop at the Retailer site",
      description:
        "Shop and place order at the Retailer site similarly you always do. You have nothing to do extra, your Cashback/Rewards will get tracked automatically at our end.",
      imageUrl: "https://cashbackpao.com/assets/images/hcw-step3.jpg",
    },
    {
      title: "Get Cashback/Rewards Automatically",
      description:
        'After few hours or within 72 Hours your cashback will get automatically added in your CashbackPao account in "On Hold" status. After the the return perod ends status and you dont return or cancel your order the status will change as "Confirmed".',
      imageUrl: "https://cashbackpao.com/assets/images/hcw-step4.jpg",
    },
    {
      title: "Transfer Your Money",
      description:
        "As soon as you have INR 250 you can put withrawal request to transfer your money to your Bank account or payment wallet as per the policy.",
      imageUrl: "https://cashbackpao.com/assets/images/bank.png",
    },
  ];
  return (
    <>
      <div className="bg-[#173245] w-full py-12 text-white flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold ">EARN REAL CASHBACK</h1>
          <h1 className="text-3xl font-light ">
            ON YOUR EVERY ONLINE SHOPPING
          </h1>
        </div>
      </div>
      <div className="bg-[#f8f9fa] w-full py-8 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col sm:flex-row justify-evenly items-center bg-[#ffffff] w-[340px] sm:w-[1150px] mx-4 shadow-md rounded-sm overflow-x-auto">
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
        <div className="bg-[#f8f9fa] w-full py-8 flex flex-col items-center justify-center gap-4">
          {stepSection.map((item, index) => (
            <Section
              key={index}
              step={index + 1}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default HowItWorks;
