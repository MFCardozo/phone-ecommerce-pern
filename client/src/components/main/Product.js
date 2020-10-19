import React, { useContext } from "react";
import { ProductWrapper } from "./productStyles/productStyles";
import { ProductContext } from "../../context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Product(props) {
  const { id, title, img, price } = props.product;
  const { addToCart, openModal, checkProductInCart } = useContext(
    ProductContext
  );

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 h-25">
      <div className="card">
        <div className="img-container p-5">
          <Link to={`/details/${id}`}>
            <img src={img} alt={title} className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={checkProductInCart(id)}
            onClick={() => {
              addToCart(id);
              openModal(id);
            }}
          >
            {checkProductInCart(id) ? (
              <p className="text-capitalize mb-0" disabled>
                {" "}
                in cart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
