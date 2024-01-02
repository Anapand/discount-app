import React from "react";
import ListItems from "../about/component/ListItems";
import PrivacyDetail from "./component/PrivacyDetail";
import PrivacyHeading from "./component/PrivacyHeading";

const PrivacyPolicy = () => {
  return (
    <>
      <PrivacyHeading />
      <div className="bg-[#f8f9fa] w-full py-8 flex justify-center gap-4">
        <PrivacyDetail />
        <ListItems />
      </div>
    </>
  );
};

export default PrivacyPolicy;
