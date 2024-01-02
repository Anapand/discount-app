import React from "react";

const StoreList = () => {
  const storeCategories = [
    {
      category: "Featured",
      coupons: [
        "Firstcry Coupons",
        "Myntra Coupons",
        "Beardo Coupons",
        "Zanducare Coupons",
        "Clovia Coupons",
        "Fernspetals Coupons",
        "MCDonalds Coupons",
        "Ajio Coupons",
        "TataCliq Coupons",
        "Biba Coupons",
        "Domino's Coupons",
      ],
    },
    {
      category: "Fashion & Lifestyle",
      coupons: [
        "Clovia Coupons",
        "Myntra Coupons",
        "Ajio Coupons",
        "Jack&jones Coupons",
        "Shoppersshop Coupons",
      ],
    },
    {
      category: "Women's Fashion",
      coupons: [
        "Myntra Coupons",
        "Biba Coupons",
        "Clovia Coupons",
        "Ajio Coupons",
        "Bodyshop Coupons",
      ],
    },
    {
      category: "Men's Fashion",
      coupons: ["Ajio Coupons", "Beardo Coupons"],
    },
    {
      category: "Gifts & Flowers",
      coupons: ["Fernspetal Coupons"],
    },
    {
      category: "Kids & Toys",
      coupons: ["Firstcry Coupons"],
    },
    {
      category: "Foods",
      coupons: ["Domino's Coupons"],
    },
    {
      category: "Health care & Medicines",
      coupons: ["Kapiva Coupons"],
    },
  ];

  return (
    <div className="w-[1200px] bg-[#ffffff] flex flex-col text-black p-6 shadow-lg rounded-md">
      <div className="flex justify-evenly">
        {storeCategories.map((categoryData, index) => (
          <div key={index}>
            <h1 className="font-bold pb-2">{categoryData.category}</h1>
            <ul>
              {categoryData.coupons.map((coupon, idx) => (
                <li key={idx} className="pb-1">
                  {coupon}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h1 className="font-bold pt-10 pb-6 flex justify-evenly">
        View All Stores
      </h1>
    </div>
  );
};

export default StoreList;
