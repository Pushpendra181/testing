import React, { useState } from "react";
import Crops from "./MenuApi";
import ManuCard from "./MenuCard";
import Nav from "../Navbar/Nav";

const UniqueList = [
  ...new Set(
    Crops.map((Elem) => {
      return Elem.fasal;
    })
  ),
  "All",
];
// console.log(UniqueList);

const AllSeasonCrops = () => {
  const [cropsData, setCropsData] = useState(Crops);
  const [cropsList, setcropsList] = useState(UniqueList);
  console.log(cropsList, "slkjlkjsfl");

  const filterItem = (fasal) => {
    const UpdatedList = Crops.filter((curElem) => {
      return curElem.fasal === fasal;
    });
    if (fasal === "All") {
      return setCropsData(Crops);
    }
    setCropsData(UpdatedList);
    console.log(UpdatedList, "yyy");
  };
  return (
    <>
      <Nav filterItem={filterItem} cropsList={cropsList} />
      <ManuCard cropsData={cropsData} setCropsData={setCropsData} />
    </>
  );
};
export default AllSeasonCrops;
