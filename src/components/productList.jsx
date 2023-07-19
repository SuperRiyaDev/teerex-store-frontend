import React from "react";
import Product from "./product";
import './productList.css'

const ProductList = ({productList}) => {
  console.log("from product", productList)
  return (
    <div className="list-wrap">
      {productList.map(item=><Product key={item.id} item={item} />)}
    </div>
  );
};

export default ProductList;
