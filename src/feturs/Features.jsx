import React from "react";
import Img from "../../src/assets/logo/logo.jpg";
// import { useNavigate } from "react-router-dom";
import "./Features.css";
import Feature from "../assets/Feature_img/dmitry-mishin-Myw82bYKqao-unsplash.jpg";
// import Feature1 from "../assets/Feature_img/enq-1998-72pbtSPFOck-unsplash.jpg";
import Feature2 from "../assets/Feature_img/enq-1998-SKTn9XBuLn0-unsplash.jpg";
import Feature3 from "../assets/Feature_img/krystal-ng-jRp60R7ogNQ-unsplash.jpg";
import Feature4 from "../assets/Feature_img/lute-hg7k5UEOyOo-unsplash.jpg";
// import Feature5 from "../assets/Feature_img/nils-rasmusson--jUAulU6BVk-unsplash.jpg";

const Features = () => {
  //   const navigat = useNavigate();

  //   const handelClick = () => {
  //     navigat("/");
  //   };

  return (
    <div>
      <div className="hero-1">
        <img src={Img} alt="logo" />
        <div className="headar_main">
          <button>back</button>
          <button>Team</button>
          <button>Sign In</button>
        </div>
      </div>

      <div className="features_img">
        <div className="hero_1">
          <img src={Feature} alt="" />
        </div>
        <img className="full" src={Feature2} alt="" />
        <div className="hero_2">
          <img src={Feature3} alt="" />
          <img src={Feature4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
