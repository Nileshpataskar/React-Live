import React, { useState } from "react";
import ItemList from "./ItemList";
import Cart from "./Cart";

import "./app.css"
function App() {

  const [cartItems,setCartItems]=useState([]);

  const addToCart=(item)=>{
    setCartItems([...cartItems,item])

  };
  const removeFromCart = (index) => {
    const update = [...cartItems];
    update.splice(index, 1);
    setCartItems(update);
  };
  

  const items = [
    { id: 1, name: "Iphone     ", price: 1000 },
    { id: 2, name: "Samsung   ", price: 2000 },
    { id: 3, name: "Moto G   ", price: 3000 },
    { id: 4, name: "Oppo    ", price: 5000 },
    { id: 5, name: "Vivo    ", price: 12000 }


  ];
  return (
    <div className="appclass">
      
      <ItemList  items={items} addToCart={addToCart} />
      
      <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
    </div>
  );
}

export default App;
