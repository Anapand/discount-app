import React from "react";
import ListItems from "../about/component/ListItems";
import CareerDetail from "./component/CareerDetail";
import CareerHeading from "./component/CareerHeading";

const Career = () => {
  return (
    <div>
      <CareerHeading />
      <div className="bg-[#f8f9fa] w-full py-8 flex justify-center gap-4">
        <CareerDetail />
        <ListItems />
      </div>
    </div>
  );
};

export default Career;
