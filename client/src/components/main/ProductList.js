import React, { useContext } from "react";
import Product from "./Product";
import Title from "../baseComponents/Title";
import { ProductContext } from "../../context";
import { Carousel } from "../carousel/index";

export default function ProductList() {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <>
      <Carousel />
      <div className="py-5" id="productList">
        <div className="container h-25">
          <Title title="products" />
          <div className="row min-vh-100">
            {filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
