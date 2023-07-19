import React from "react";
import "./App.css";
import Home from "./pages/home/home";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import CartList from "./components/cartList";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
      {/* <div className="App"> */}
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <CartList />
        </Route>
      {/* </div> */}
      </Switch>
      </>
  );
};

export default App;

// import React from "react";
// import "./App.css";
// import Home from "./pages/home/home";
// import Cart from "./pages/cart/cart";
// import { useState } from "react";
// import { Switch, Route } from "react-router-dom";

// const App = () => {
// // const [cartItems, setCartItems] = useState([])

// // const handleAddProduct = (product)=>{
// //   const ProductExist = cartItems.find((item)=> item.id === product.id)
// //   if(ProductExist){
// //     setCartItems(
// //       cartItems.map((item)=>
// //       item.id=== product.id
// //       ? {...ProductExist, quantity: ProductExist.quantity+1}
// //       : item
// //       )
// //     )
// //   } else {
// //     setCartItems([...cartItems, {...product, quantity:1}])
// //   }
// //   console.log("cartItems", cartItems)
// // }

//   return (
//     <div>
//       <Switch>
//         {/* <Route exact path="/cart"> */}
//           {/* <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} /> */}
//         </Route>
//         <Route exact path="/">
//           <Home handleAddProduct={handleAddProduct}/>
//         </Route>
//       </Switch>
//     </div>
//   );
// };

// export default App;
