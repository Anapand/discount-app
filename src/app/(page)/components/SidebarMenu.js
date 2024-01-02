import React from "react";
import { FaTimes } from "react-icons/fa";

const SidebarMenu = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    "Home",
    "Login",
    "Register",
    "Forgot Password?",
    "My Earnings- ₹ 0.00",
    "Withdraw My Earnings",
    "Report Missing Cashback",
    "Free Stuff",
    "100% Cashback",
    "Trending Offers",
    "Deals of the Day",
    "Flipkart Offers",
    "Amazon Offers",
    "Fresh Offers",
    "Women's Offers",
    "Men's Offers",
    "Kids & Toys Offers",
    "Top Stores",
    "All Stores",
    "Top Categories",
    "Refer & Earn",
    "How it Works",
    "Contact Us/Feedback",
  ];

  const sidebarClasses = isOpen
    ? "fixed h-full w-full flex flex-col p-4 overflow-y-auto bg-white z-50 w-56 transition-transform duration-150 ease-in-out"
    : "hidden";

  return (
    <div className={sidebarClasses}>
      <div className="pl-48">
        <FaTimes
          onClick={toggleSidebar}
          className="text-3xl text-red-600 cursor-pointer"
        />
      </div>
      {menuItems.map((item, index) => (
        <span
          key={index}
          className={`border-b border-gray-100 text-sm py-2 ${
            index === 4 || index === 7 ? "mt-6" : "py-2"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default SidebarMenu;
