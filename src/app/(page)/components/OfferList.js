import React from "react";

const OfferList = () => {
  const categories = [
    ["Accessories & Bags", "Baby, Kids, Toys", "Clothing"],
    ["Electronics", "Foods", "Footwear"],
    [
      "Home, Kitchen, Pets, Furniture",
      "Mobile & Tablets",
      "Movies, Music, Games",
    ],
    ["Watches & Jewelry", "Women's Fashion", "View All Categories"],
  ];

  return (
    <div className="w-[1100px] bg-[#ffffff] flex justify-evenly text-black p-4 shadow-lg rounded-md">
      {categories.map((section, index) => (
        <div key={index}>
          <ul>
            {section.map((item, i) => (
              <li key={i} className="py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OfferList;
