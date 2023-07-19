import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import "./header.css";
import { Badge } from "@material-ui/core";
import { CartState } from "../context/context";


const Header = () => {
    const {
        state: { cart },
        dispatch,
      } = CartState();

  return (
    <header className="header">
      <div>
        <h1>Teerex Store</h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
        <ul>
          <li className="cart-icon-elem">
            <Link to="/cart">
            <Badge
            badgeContent={cart.length}
            color="secondary"
            showZero={false}
            overlap="circle"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            invisible={cart.length === 0}
            >
              <ShoppingCartIcon className="cart-Icon" />
            </Badge>  
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
