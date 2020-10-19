import React from "react";
import { Link } from "react-router-dom";
//import PayPalButton from "./PayPalButton"; only in dev
import { ButtonModel } from "../baseComponents/Button";
export default function CartTotals({ handlerCart, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = handlerCart;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title mx-2">subtotal:</span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title mx-2">tax:</span>
              <strong>${cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title mx-2">total:</span>
              <strong>${cartTotal}</strong>
            </h5>
            <ButtonModel>Check</ButtonModel>
          </div>
        </div>
      </div>
    </>
  );
}
