import React from "react";
import "./Nav.css";

const Nav = ({ filterItem, cropsList }) => {
  console.log(cropsList, "bbbb");
  return (
    <nav>
      <div className="btn-grup">
        {cropsList.map((curElem) => {
          return <button onClick={() => filterItem(curElem)}>{curElem}</button>;
        })}
      </div>
    </nav>
  );
};

export default Nav;
