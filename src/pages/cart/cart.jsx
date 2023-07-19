import React from "react";
import Header from "../../components/header";

const Cart = ({ cartItems }) => {
  return (
    <div>
    <Header />
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items are added</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img className="cart-item-image" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
      Cart
    </div>
    </div>
  );
};

export default Cart;
