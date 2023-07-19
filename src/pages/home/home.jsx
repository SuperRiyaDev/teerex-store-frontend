import React, { useEffect } from "react";
import SearchBar from "../../components/searchBar";
import FilterPanel from "../../components/filterPanel";
import ProductList from "../../components/productList";
import "./style.css";
import { useState } from "react";
import {
  colorList,
  genderList,
  priceList,
  typeList,
} from "../../filterData/data";
import axios from "axios";
import { CartState } from "../../context/context";
import FilterListIcon from "@material-ui/icons/FilterList";

const Home = ({ handleAddProduct }) => {
  const [colorOptions, setColorOptions] = useState(colorList);
  const [genderOptions, setGenderOptions] = useState(genderList);
  const [priceOptions, setPriceOptions] = useState(priceList);
  const [typeOptions, setTypeOptions] = useState(typeList);
  const [productList, setProductList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const {
    prodState: { products },
    prodDispatch,
  } = CartState();

  //function for making it responsive
  const sidePanel = document.querySelector(".home_panel-wrap");
  const filterIcon = document.querySelector(".side-panel-icon");

  const handleIconClicked = () => {
    // console.log("icon clicked")
    sidePanel.classList.toggle("show");
  };

  //functions for filter options
  const handleChecked = (id, options, setOptions) => {
    const StateList = options;
    // console.log("colorStateList",colorStateList)
    const changeCheckedList = StateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // console.log("changeCheckedColor", changeCheckedColor)
    setOptions(changeCheckedList);
  };

  const handleColorChecked = (id) => {
    handleChecked(id, colorOptions, setColorOptions);
  };

  const handleGenderChecked = (id) => {
    handleChecked(id, genderOptions, setGenderOptions);
  };

  const handlePriceChecked = (id) => {
    handleChecked(id, priceOptions, setPriceOptions);
  };

  const handleTypeChecked = (id) => {
    handleChecked(id, typeOptions, setTypeOptions);
  };

  const filterFunction = async () => {
    const product = await axios.get(
      `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
    );

    prodDispatch({ type: "FETCH_PRODUCT", payload: product.data });

    let updatedList = product.data;

    //color filter
    const colorCheckedList = colorOptions
      .filter((item) => item.checked)
      .map((item) => item.label);
    console.log("colorCheckedList", colorCheckedList);

    if (colorCheckedList.length) {
      updatedList = updatedList.filter((item) =>
        colorCheckedList.includes(item.color)
      );
      console.log("updatedList", updatedList);
    }

    //gender filter
    const genderCheckedList = genderOptions
      .filter((item) => item.checked)
      .map((item) => item.label);
    console.log("colorCheckedList", colorCheckedList);

    if (genderCheckedList.length) {
      updatedList = updatedList.filter((item) =>
        genderCheckedList.includes(item.gender)
      );
      console.log("updatedList", updatedList);
    }

    //price filter
    const priceCheckedList = priceOptions
      .filter((item) => item.checked)
      .map((item) => item.label);
    console.log("priceCheckedList", priceCheckedList);

    if (priceCheckedList.length) {
      //priceCheckedList = [[0,250],[250,400]]
      updatedList = updatedList.filter((item) => {
        for (let i = 0; i < priceCheckedList.length; i++) {
          const range = priceCheckedList[i];
          const [min, max] = range.split("-");

          if (max) {
            if (item.price >= parseInt(min) && item.price <= parseInt(max)) {
              return true;
            }
          } else {
            if (item.price >= parseInt(min)) {
              return true;
            }
          }
        }
        return false;
      });
    }

    //type filter
    const typeCheckedList = typeOptions
      .filter((item) => item.checked)
      .map((item) => item.label);
    console.log("colorCheckedList", colorCheckedList);

    if (typeCheckedList.length) {
      updatedList = updatedList.filter((item) =>
        typeCheckedList.includes(item.type)
      );
      console.log("updatedList", updatedList);
    }

    //search field
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setProductList(updatedList);
  };

  useEffect(() => {
    // fetchProduct();
    // fetchedList()
    filterFunction();
  }, [colorOptions, genderOptions, priceOptions, typeOptions, searchInput]);

  return (
    <div className="home">
      {/* search bar */}
      <SearchBar
        value={searchInput}
        searchChangeInput={(e) => setSearchInput(e.target.value)}
      />

      <div className="home_panelList-wrap">
        <div className="side-panel-icon">
          <FilterListIcon onClick={handleIconClicked} />
        </div>
        <div className="home_panel-wrap">
          {/* filter panel */}
          <FilterPanel
            colorOptions={colorOptions}
            changeColorChecked={handleColorChecked}
            genderOptions={genderOptions}
            changeGenderChecked={handleGenderChecked}
            priceOptions={priceOptions}
            changePriceChecked={handlePriceChecked}
            typeOptions={typeOptions}
            changeTypeChecked={handleTypeChecked}
          />
        </div>
        <div className="home_list-wrap">
          {/* productList or empty */}
          <ProductList
            productList={productList}
            handleAddProduct={handleAddProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
