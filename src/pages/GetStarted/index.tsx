import React, { useState } from "react";
import LoginForm from "../../modules/LoginForm";
import RegisterForm from "../../modules/RegisterForm";
import Nav from "../../components/Navbar";

const GetStartedPage = () => {
  const [showRegister, setShowRegister] = useState(false);
  

  const handlePageView = () => {
    setShowRegister(!showRegister);
  };

  return (
    
    <div className="Panel">
      {!showRegister && <LoginForm />}
      {showRegister && <RegisterForm />}
      <button onClick={handlePageView} id="GetMeToButton">
        {!showRegister ? "Get me to register!" : "Get me to login!"}
      </button>
    </div>
  );
};

export default GetStartedPage;