"use client";
import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import OfferList from "../components/OfferList";
import StoreList from "../components/StoreList";
import Link from "next/link";

const Navbar = () => {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Stores", path: "/stores" },
    { label: "Offers Categories", path: "/offers" },
    { label: "Flipkart", path: "/flipkart" },
    { label: "Amazon", path: "/amazon" },
    { label: "Deals of the day", path: "/dealsOfTheDay" },
    { label: "Trending Offers", path: "/trendingOffers" },
    { label: "100% cashback", path: "/cashback" },
    { label: "Refer & Earn", path: "/referEarns" },
    { label: "How it Works", path: "/howItWorks" },
  ];

  const [showStoresList, setShowStoresList] = useState(false);
  const [showOffersList, setShowOffersList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleMouseEnter = (index) => {
    if (index === 1) {
      setShowStoresList(true);
      setShowOffersList(false);
    } else if (index === 2) {
      setShowOffersList(true);
      setShowStoresList(false);
    }
  };

  const handleMouseLeave = () => {
    setShowStoresList(false);
    setShowOffersList(false);
  };
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <>
      <div className="hidden fixed w-full h-[45px] md:flex justify-center items-center bg-[#414146] text-[#f8f9fa] text-[14px] font-sans cursor-pointer">
        <ul className="flex gap-10">
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={` flex relative ${
                selectedItem === index ? "text-[#ff9d1f]" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemClick(index)}
            >
              <Link href={menuItem.path}>{menuItem.label}</Link>
              {index === 1 || index === 2 ? (
                <MdOutlineArrowDropDown className="text-xl  flex" />
              ) : null}
              {index === 1 && showStoresList && (
                <div className="absolute left-0 mt-5">
                  <StoreList />
                </div>
              )}
              {index === 2 && showOffersList && (
                <div className="absolute left-0 mt-5 bg-white p-2">
                  <OfferList />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
