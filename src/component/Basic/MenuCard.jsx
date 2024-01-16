import React from "react";
import "./MenuCard.css";

const MenuCard = ({ cropsData }) => {
  console.log(cropsData, "aaaa");

  return (
    <div>
      <div className="card-container">
        {cropsData.map((curElem, index) => {
          const {
            id,
            fasal,
            image,
            crop_name,
            sowing_period,
            importance,
            climatic_conditions,
            other_details,
            government_support,
            market_impact,
          } = curElem;

          return (
            <>
              <div className="card">
                <div className="name">
                  <span className="card-number">{id}</span>
                  <h3>{fasal}</h3>
                </div>
                <h2 className="card-title">Crop name : {crop_name}</h2>
                <p className="card-discription">Sowing Period : {sowing_period}</p>
                <p>Importance : {importance}</p>
                <div className="specification">
                  <h4>Market Impact : {market_impact}</h4>
                  <h3>Climatic Conditions : {climatic_conditions}</h3>
                  <h3>Government Support : {government_support}</h3>
                  <p>Other Details : {other_details}</p>
                </div>
                <div className="img-tag">
                  <img src={image} alt="" />
                  <button>About</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCard;
