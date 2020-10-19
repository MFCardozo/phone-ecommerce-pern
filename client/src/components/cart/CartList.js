import React from "react";
import CartItem from "./CartItem";

export default function CartList({ handlerCart }) {
  return (
    <div className="container-fluid">
      {handlerCart.cart.map((item) => {
        return <CartItem key={item.id} item={item} handlers={handlerCart} />;
      })}
    </div>
  );
}
