import React from "react";
import { ProductContext } from "../../context";
import { Link, useParams } from "react-router-dom";
import { ButtonModel } from "../baseComponents/Button";
import { PageLoader } from "../baseComponents/Loader";
import { useContext, useEffect } from "react";

export default function Details() {
  const { id } = useParams();

  const {
    handleDetail,
    detailProduct,
    addToCart,
    openModal,
    cleanHandleDetail,
    loading,
    checkProductInCart,
  } = useContext(ProductContext);

  useEffect(() => {
    handleDetail(id);

    return () => cleanHandleDetail();
  }, []);

  const idNumber = parseInt(id);

  if (loading) return <PageLoader />;

  //after get the id for url/params whe can show individual product by id

  const { company, img, information, price, title } = detailProduct;

  return (
    <div className="row my-2 w-100">
      <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
        <h1>{title}</h1>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <img src={`/${img}`} className="img-fluid" alt="product" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model: {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by : <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price: <span>$</span> {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product:
          </p>
          <p className="text-muted lead">{information}</p>
          <div>
            <Link to="/">
              <ButtonModel back>back to products</ButtonModel>
            </Link>
            <ButtonModel
              disabled={checkProductInCart(idNumber)}
              onClick={() => {
                addToCart(idNumber);
                openModal(idNumber);
              }}
            >
              {checkProductInCart(idNumber) ? "inCart" : "add to cart"}
            </ButtonModel>
          </div>
        </div>
      </div>
    </div>
  );
}
