"use client";
import SignUp from "@/app/(auth)/signup/page";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Home = () => {
  const [showSignup, setShowSignup] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSignup(true);
    }, 15000);
    return () => clearTimeout(timeout);
  }, []);

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  return (
    <div>
      <Card />
      {showSignup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-xl z-50">
          <SignUp onCloseSignup={handleCloseSignup} />
        </div>
      )}
    </div>
  );
};

export default Home;
