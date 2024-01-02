import React from "react";
import CashBackSteps from "./components/CashBackSteps";
import Header from "./components/Header";

const AuthLayout = (props) => {
  return (
    <div>
      <Header />

      <div className="pt-11">
        {props.children}
        <CashBackSteps />
      </div>
    </div>
  );
};
export default AuthLayout;
