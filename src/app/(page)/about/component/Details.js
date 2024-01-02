import React from "react";

const Details = () => {
  return (
    <>
      <div className="bg-[#ffffff] w-[720px] border border-gray-200 rounded-sm shadow-md flex flex-col items-start justify-start px-8 font-sans py-9">
        <h1 className="text-2xl font-bold">Cash back Nahi, Real CashbackPao</h1>
        <p className="font-light italic text-inherit mt-2 text-lg ">
          Now everyone will get real Cashback on every shopping.
        </p>
        <p className="font-light text-inherit mt-6 text-base ">
          CashbackPao is a brainchild of Mrs. Anupam, a homemaker and a shopping
          enthusiast herself who wanted to make the most of her money. The need
          to save money while shopping gave her the inspiration to come up with
          the idea of cashbackPao, India’s fastest growing cashback website.
          With a team of three: Cashback, Coupons, Online Deals; our retailer
          family is 100+ strong and growing bigger with every passing day. We
          have some of the biggest e-commerce names on board such as Flipkart,
          Amazon, Paytm, Shopclues, Myntra, Jabong, etc.
        </p>
        <p className="font-light text-inherit mt-4 text-base ">Join for FREE</p>
        <p className="font-light text-inherit text-base ">No Annual Fee</p>
        <p className="font-light text-inherit text-base ">
          Every Hour New Deal
        </p>
        <p className="font-light text-inherit text-base ">
          Maximum Cashback Guaranteed
        </p>
        <p className="font-light text-inherit text-base ">
          Direct Cashback into your Account
        </p>
        <p className="font-light text-inherit text-base ">
          Over 100+ Merchants and Still Growing
        </p>
        <p className="font-light text-inherit text-base ">
          Transparent Member Feedback Policy
        </p>
        <p className="font-light text-inherit text-base ">
          Excellent Customer Service
        </p>
        <p className="font-light text-inherit text-base mt-4 ">
          <span className="text-[#1376b9]"> Sign up</span> and become a member
          of CashbackPao family to enjoy amazing discount, cashback coupons,
          best online deals, maximum cashback, and hard cash directly into your
          bank account.
        </p>
        <h1 className="text-2xl text-inherit font-light mt-12">
          Our core Team
        </h1>
        <div className="flex justify-center w-full mt-4">
          <img
            src="https://cashbackpao.com/assets/images/anupam.jpg"
            alt="women"
          />
        </div>
        <h1 className="text-xl font-bold flex justify-center w-full">
          MRS. ANUPAM
        </h1>
        <p className="text-sm font-light flex justify-center w-full">
          CO-FOUNDER, CEO
        </p>
        <div className="flex justify-center gap-6 w-full mt-8">
          <div flex flex-col>
            <div className="flex justify-center w-full mt-4">
              <img
                src="https://cashbackpao.com/assets/images/kppandey.jpg"
                alt="men"
                width={300}
              />
            </div>
            <h1 className="text-xl font-bold flex justify-center w-full">
              K P PANDEY
            </h1>
            <p className="text-sm font-light flex justify-center w-full">
              DIGITIAL/AFFILIATE MARKETING HEAD
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center w-full mt-4">
              <img
                src="https://cashbackpao.com/assets/images/bijnesh-singh.jpg"
                alt="men"
                width={300}
              />
            </div>
            <h1 className="text-xl font-bold flex justify-center w-full">
              BIJNESH SINGH
            </h1>
            <p className="text-sm font-light flex justify-center w-full">
              UI/UX LEAD
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
