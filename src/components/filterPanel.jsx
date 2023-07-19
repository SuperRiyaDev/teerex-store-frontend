import React from "react";
import CheckboxElement from "./checkboxElement";
import "./filterPanel.css";

const FilterPanel = ({
  colorOptions,
  changeColorChecked,
  genderOptions,
  changeGenderChecked,
  priceOptions,
  changePriceChecked,
  typeOptions,
  changeTypeChecked,
}) => {
  // console.log("colorOptions from filterpanel", colorOptions)
  return (
    <div>
      {/* color */}
      <div className="filter-options">
        <p className="label">Color</p>
        {colorOptions.map((color) => (
          <CheckboxElement
            key={color.id}
            option={color}
            changeChecked={changeColorChecked}
          />
        ))}
      </div>

      {/* gender */}
      <div className="filter-options">
        <p className="label">Gender</p>
        {genderOptions.map((gender) => (
          <CheckboxElement
            key={gender.id}
            option={gender}
            changeChecked={changeGenderChecked}
          />
        ))}
      </div>

      {/* price */}
      <div className="filter-options">
        <p className="label">Price</p>
        {priceOptions.map((price) => (
          <CheckboxElement
            key={price.id}
            option={price}
            changeChecked={changePriceChecked}
          />
        ))}
      </div>

      {/* type */}
      <div className="filter-options">
        <p className="label">Type</p>
        {typeOptions.map((type) => (
          <CheckboxElement
            key={type.id}
            option={type}
            changeChecked={changeTypeChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
