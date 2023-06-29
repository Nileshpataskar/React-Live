import React from "react";
import "./app.css"

const ItemList = ({items,addToCart}) => {
  return (
    
    <div className="main">
      <h1>Available Items</h1>
      <p>(Click on items to add)</p>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <h4 onClick={()=>addToCart(item)}>{item.name}<span>{item.price}</span></h4>
          
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
