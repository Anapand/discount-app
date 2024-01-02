import React from "react";
import PopularCards from "../components/PopularCards";

const Card = () => {
  const cardData = [
    {
      imageUrl:
        "https://cashbackpao.com/assets/images/stores/firstcry_coupons.jpg",
      altText: "firstcry",
      cashback: "Upto Rs. 30 Cashback",
    },
    {
      imageUrl:
        "https://cashbackpao.com/assets/images/stores/myntra_coupons.png",
      altText: "firstcry",
      cashback: "Upto 5.00% Cashback",
    },
    {
      imageUrl:
        "https://cashbackpao.com/assets/images/stores/beardo_coupons.png",
      altText: "firstcry",
      cashback: "Flat 6.00% Cashback",
    },
    {
      imageUrl:
        "https://cashbackpao.com/assets/images/stores/zanducare_coupons.jpg",
      altText: "firstcry",
      cashback: "",
    },
    {
      imageUrl:
        "https://cashbackpao.com/assets/images/stores/domino's_coupons.png",
      altText: "firstcry",
      cashback: "Upto Rs. 20 Cashback",
    },
    {
      imageUrl:
        "https://cashbackpao.com/assets/images/stores/clovia_coupons.jpg",
      altText: "firstcry",
      cashback: "Upto 10.00% Cashback",
    },
    {
      imageUrl:
        "https://cashbackpao.com/assets/images/stores/fernsnpetals_coupons.png",
      altText: "firstcry",
      cashback: "Upto 6.00% Cashback",
    },
    {
      imageUrl:
        "https://cashbackpao.com/assets/images/stores/mcdonalds_coupons.jpg",
      altText: "firstcry",
      cashback: "Upto Rs. 20 Cashback",
    },
    {
      imageUrl: "https://cashbackpao.com/assets/images/stores/ajio_coupons.jpg",
      altText: "firstcry",
      cashback: "Upto 5.00% Cashback",
    },
    {
      imageUrl:
        "https://cashbackpao.com/assets/images/stores/tatacliq_coupons.png",
      altText: "firstcry",
      cashback: "Upto 3.00% Cashback",
    },
    {
      imageUrl: "https://cashbackpao.com/assets/images/stores/biba_coupons.jpg",
      altText: "firstcry",
      cashback: "Upto 5.00% Cashback",
    },
    {
      imageUrl: "",
      altText: "",
      cashback: "View All Stores",
    },
  ];

  return (
    <div className="bg-[#f8f9fa] w-full min-h-screen pt-3 ">
      <h1 className="text-center text-xl font-semibold font-sans">
        TOP CASHBACK AND COUPONS STORES
      </h1>
      <div className="flex flex-wrap justify-center mt-8 cursor-pointer ">
        {cardData.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
            <div
              className={` sm:w-52 h-28 bg-[#ffffff] mx-4 mt-2 mb-4 rounded-sm shadow-md hover:border-b-2 hover:border-b-[#fd7e14] hover:text-[#fd7e14]  ${
                index === 11 ? "border-2 border-[#fd7e14] h-[104px] " : ""
              } flex flex-col items-center justify-center`}
            >
              <img
                src={card.imageUrl}
                alt={card.altText}
                className="border-dashed border-b "
              />
              <p
                className={`text-[#3b579d] text-sm text-center font-[13px] hover:text-[#fd7e14] pt-2 ${
                  index === 11 ? "text-[#fd7e14] font-semibold" : ""
                }`}
              >
                {card.cashback}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-center text-xl font-semibold font-sans mt-10">
        POPULAR CATEGORIES
      </h1>
      <div>
        <PopularCards />
      </div>
    </div>
  );
};

export default Card;
