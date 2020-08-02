import React, { Fragment } from "react";
import BrandList from "./BrandList";
import "./side-bar.css";
//import { useSelector } from "react-redux";

const SideBar = ({ brands, propsHandleChange }) => {
  const handleChange = (brand, checked) => {
    propsHandleChange(brand, checked);
  };
  return (
    <Fragment>
      <div className="heading">Brand</div>
      <hr />
      {brands.map((item) => (
        <BrandList key={item} item={item} propsHandleChange={handleChange} />
      ))}
    </Fragment>
  );
};

export default SideBar;
