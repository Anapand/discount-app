import React from "react";
import ContactHeading from "./component/ContactHeading";
import ContactDetail from "./component/ContactDetail";
import ContactAddress from "./component/ContactAddress";

const Contact = () => {
  return (
    <div>
      <ContactHeading />
      <div className="bg-[#f8f9fa] w-full py-8 flex justify-center gap-4">
        <ContactDetail />
        <ContactAddress />
      </div>
    </div>
  );
};

export default Contact;
