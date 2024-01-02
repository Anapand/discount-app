import React from "react";
import ListItems from "../about/component/ListItems";
import TermDetail from "./component/TermDetail";
import TermHeading from "./component/TermHeading";

const TermsCondition = () => {
  return (
    <>
      <TermHeading />
      <div className="bg-[#f8f9fa] w-full py-8 flex justify-center gap-4">
        <TermDetail />
        <ListItems />
      </div>
    </>
  );
};

export default TermsCondition;
