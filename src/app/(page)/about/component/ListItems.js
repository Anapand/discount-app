import React from "react";
import Link from "next/link";

const ListItems = () => {
  const listItems = [
    { text: "About Us", link: "/about" },
    { text: "Terms & Conditions", link: "/terms" },
    { text: "Privacy & Security Policy", link: "/privacyPolicy" },
    { text: "How it Works", link: "/howItWorks" },
    { text: "Career", link: "/career" },
    { text: "Contact Us", link: "/contact" },
    { text: "Refer & Earn", link: "/referEarns" },
  ];
  return (
    <>
      <div className="bg-[#ffffff] w-[350px] h-80 border border-gray-200 rounded-sm shadow-md flex flex-col items-start justify-start px-8 font-sans py-6 cursor-pointer ">
        <ul>
          {listItems.map((item, index) => (
            <li key={index} className="text-[#1376b9] p-2">
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListItems;
