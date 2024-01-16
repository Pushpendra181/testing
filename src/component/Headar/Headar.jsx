import React from "react";
import Img from "../../assets/logo/logo.jpg";
import "./Headar.css";
// import { useNavigate } from "react-router-dom";

const Headar = () => {
  // const navigat = useNavigate();

  // const handelClick = () => {
  //   navigat("/Features");
  // };
  return (
    <div>
      <div className="hero-1">
        <img src={Img} alt="logo" />
        <div className="headar_main">
          <button>Features</button>
          <button>Team</button>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Headar;
