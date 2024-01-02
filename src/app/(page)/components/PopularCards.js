"use client";
import React, { useState } from "react";

const PopularCards = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const cardData = [
    {
      imageUrl:
        "https://cashbackpao.com/assets/cat_images/accessories-bags.jpg",
      altText: "firstcry",
      cashback: "30% Offers",
    },
    {
      imageUrl: "https://cashbackpao.com/assets/cat_images/baby-kids-toyes.jpg",
      altText: "firstcry",
      cashback: "7% Offers",
    },
    {
      imageUrl: "https://cashbackpao.com/assets/cat_images/clothing.jpg",
      altText: "firstcry",
      cashback: "51% Offers",
    },
    {
      imageUrl: "https://cashbackpao.com/assets/cat_images/electronics.jpg",
      altText: "firstcry",
      cashback: "18% Offers",
    },
    {
      imageUrl: "https://cashbackpao.com/assets/cat_images/foods.jpg",
      altText: "9% Offers",
      cashback: "9% Offers",
    },
    {
      imageUrl: "",
      altText: "",
      cashback: "View All Category",
    },
  ];

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center mt-8 cursor-pointer z-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`w-52 h-[104px] bg-[#ffffff] mx-4 mt-2 mb-4 border border-[#dddddd] rounded-sm shadow-md transition duration-300 ${
                index === 5
                  ? "border-2 border-[#fd7e14] hover:bg-[#fd7e14] mt-4"
                  : ""
              }flex items-center justify-center`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <img src={card.imageUrl} alt={card.altText} />
              {index === 5 ? (
                <span className=" text-[#fd7e14] w-52 h-[104px] flex justify-center items-center">
                  {card.cashback}
                </span>
              ) : null}
              {hoverIndex === index && index !== 5 && (
                <p
                  className={`absolute w-52 h-[104px] text-[#ffffff] bg-[#fd7e14] flex justify-center items-center font-[13px] `}
                >
                  {card.cashback}
                </p>
              )}
            </div>
          ))}
        </div>
        <h1 className="text-center text-2xl font-normal font-sans pt-12 text-[#1376b9] cursor-pointer">
          View All Latest Offers & Cashback
        </h1>
      </div>
    </>
  );
};

export default PopularCards;
