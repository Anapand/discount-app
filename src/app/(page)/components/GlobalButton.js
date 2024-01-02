"use client";
import MessageForm from "@/app/(auth)/messageForm/page";
import React, { useState } from "react";

const GlobalButton = () => {
  const [showMessageForm, setShowMessageForm] = useState(false);
  const handleMessageClick = () => {
    setShowMessageForm(true);
  };
  const handleCloseMessage = () => {
    setShowMessageForm(false);
  };
  return (
    <div>
      {!showMessageForm && (
        <button
          className="bg-[#0a2db2] py-2 px-8 text-[#ffffff] rounded-md"
          onClick={handleMessageClick}
        >
          Send Message
        </button>
      )}
      {showMessageForm && (
        <div className=" fixed bottom-0 right-0 ">
          <MessageForm onClose={handleCloseMessage} />
        </div>
      )}
    </div>
  );
};

export default GlobalButton;
