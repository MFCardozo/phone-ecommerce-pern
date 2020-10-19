import React, { useContext } from "react";
import Title from "../baseComponents/Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductContext } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart(props) {
  const handlerCart = useContext(ProductContext);
  return (
    <section className="my-5">
      {handlerCart.cart.length > 0 ? (
        <>
          <Title title="cart" />
          <CartColumns />
          <CartList handlerCart={handlerCart} />
          <CartTotals handlerCart={handlerCart} history={props.history} />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}
