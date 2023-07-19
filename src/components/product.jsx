import { Button } from "@material-ui/core";
import React from "react";
import "./product.css";
import { CartState } from "../context/context";
import { useSnackbar } from "notistack";

const Product = ({ item }) => {
  const {enqueueSnackbar} = useSnackbar()
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const handleAddToCart = () => {
    if(cart.some((p)=>p.id === item.id)){
      enqueueSnackbar("Item already in cart, go to cart to update the quantity",{variant:"warning"})
    }else{
    dispatch({ type: "ADD_TO_CART", payload: item, });
  }};

  return (
    <div className="product-wrap">
      <header>
        <h4>{item.name}</h4>
      </header>
      <img src={item.imageURL} alt={item.name} />

      <footer>
        <div className="footer-wrap">
          <p>
            <b>₹{item.price}</b>
          </p>
          <p>
            {/* <Button>Add to cart</Button> */}
            <b>
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </b>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Product;
