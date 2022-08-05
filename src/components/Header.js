import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "./../assets/logo.png";
import namecompany from "./../assets/Ditagis Rent.png";

const Header = () => {
  let navigate = useNavigate();
  const handleReturnHome = () => {
    navigate("/");
  };
  return (
    <div className="header d-flex justify-content-between align-items-center p-4 px-5">
      <div
        className="logo d-flex justify-content-between"
        onClick={handleReturnHome}
      >
        <img src={logo} alt="logo" className="img--logo" />
        <h3 className="align-self-center text--logo px-4">
          <img src={namecompany} alt="namecompany" />
        </h3>
      </div>
      <div className="text--love d-flex justify-content-arround align-items-center">
        <span className="material-icons mx-2">favorite</span>
        <h4 className="fw-bold m-0">Ưa thích</h4>
      </div>
    </div>
  );
};

export default Header;
