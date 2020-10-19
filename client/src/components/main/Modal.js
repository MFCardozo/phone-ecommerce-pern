import React, { useContext } from "react";
import { ModalContainer } from "./modalStyles/modalStyles";
import { ProductContext } from "../../context";
import { ButtonModel } from "../baseComponents/Button";
import { Link } from "react-router-dom";

export default function Modal() {
  const { modalAppear, closeModal, modalProduct } = useContext(ProductContext);
  const { img, title, price } = modalProduct;

  if (!modalAppear) {
    return null;
  }

  return (
    <ModalContainer>
      <div className="container">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
          >
            <h5>item added to the cart</h5>
            <img src={`/${img}`} className="img-fluid" alt={title} />
            <h5>{title}</h5>
            <h5 className="text-muted">price: $ {price}</h5>
            <Link to="/">
              <ButtonModel back onClick={() => closeModal()}>
                store
              </ButtonModel>
            </Link>
            <Link to="/cart">
              <ButtonModel onClick={() => closeModal()}>go to cart</ButtonModel>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
