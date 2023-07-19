import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { cartReducer, productReducer } from "./reducer";

const Cart = createContext();


const Context = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });
  
  const [prodState, prodDispatch] = useReducer(productReducer, {
    products: [],
  });

  console.log("state", state);

  return <Cart.Provider value={{ state, dispatch, prodState, prodDispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

// export const ProductState = ()=>{
//   return useContext()
// }

export default Context;
