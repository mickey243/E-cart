import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cart = useSelector((state) => state.cart);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const handler = (e) => {
    e.preventDefault();
    fetch("https://janam.free.beeceptor.com", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  };

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={{
            id: item.id,
            title: item.name,
            quantity: item.quantity,
            total: item.totalPrice,
            price: item.price,
          }}
        />
      ))}

      {cartQuantity ? (
        <button type="button" className="btn btn-primary" onclick={handler}>
          Buy now
        </button>
      ) : (
        <p>Cart is Empty</p>
      )}
    </div>
  );
};

export default Cart;
