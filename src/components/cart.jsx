import React, {useState} from "react";
import { CartState } from "../context/context";
import { Button, TextField } from "@material-ui/core";
import "./cart.css";
import { useSnackbar } from "notistack";

const Cart = ({ item }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [prodCheck, setProdCheck] = useState([])

  const {
    state: { cart },
    dispatch,
    prodState: { products },
    prodDispatch,
  } = CartState();

  // console.log("from cart logging products", products);

  const handleChangeInQty = (item, val) => {
    // console.log("val", item)

      const array = products.find((prod) => prod.id === item.id);
      setProdCheck(array);

    console.log("prodCheck", prodCheck)

    if (val > prodCheck.quantity) {
      enqueueSnackbar("Quantity exceeded the product stock", {
        variant: "warning",
      });
    } else {
      dispatch({
        type: "CHANGE_CART_QTY",
        payload: { id: item.id, quantity: val },
      });
    }
  };

  

  return (
    <div className="cart-wrap">
      <img src={item.imageURL} alt={item.name} />
      <div className="price-wrap">
        <h4>{item.name}</h4>
        <p>
          <b>₹{item.price}</b>
        </p>
      </div>

      <p>
        <b>
          {/* <Button >quat</Button> */}
          <TextField
            type="number"
            label="qty"
            inputProps={{
              min: 1,
              max: 10,
            }}
            // value={item.quantity}
            onChange={(e) => handleChangeInQty(item, e.target.value)}
          />
        </b>
      </p>
      <p className="del-btn">
        <b>
          <Button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item })
            }
          >
            Delete
          </Button>
        </b>
      </p>
    </div>
  );
};

export default Cart;
