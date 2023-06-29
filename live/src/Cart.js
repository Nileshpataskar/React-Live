import React from 'react';
import "./app.css"
const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className='main1'>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={item.id}>
              <span>{item.name} - {item.price}</span>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <p>Total: {total}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
