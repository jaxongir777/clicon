import React from "react";
import "./shop.css";

function Shop({ cartItems, updateQty, resetCart }) {
  if (cartItems.length === 0) {
    return (
      <section className="shop">
        <div className="container">
          <h2>Shop / Cart</h2>
          <p>Your cart is empty!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="shop">
      <div className="container">
        <h2>Shop / Cart</h2>
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <div className="counter">
              <button onClick={() => updateQty(item.id, "dec")}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, "inc")}>+</button>
            </div>
          </div>
        ))}
        <button className="reset-btn" onClick={resetCart}>Reset Cart</button>
      </div>
    </section>
  );
}

export default Shop;