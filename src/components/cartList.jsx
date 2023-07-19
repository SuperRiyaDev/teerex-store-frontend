import React, {useState, useEffect} from "react";
import { CartState } from "../context/context";
import Cart from "./cart";
import "./cartList.css"

const CartList = () => {
  const [total, setTotal] = useState("")

  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log("cart from Cart", cart);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [cart]);

  return (
    <div className="shopping-cart-wrap">
    <h2>Shopping Cart</h2>
    <div className="sectioning-wrap">
    <div className="listCart-wrap">
      {cart.map((item) => (
        <Cart key={item.id} item={item} />
      ))}
    </div>
    <div className="amount-wrap">
    <p><b>Total amount: ₹{total}</b></p>
    </div>
    </div>
    
    
    </div>
  );
};

export default CartList;
