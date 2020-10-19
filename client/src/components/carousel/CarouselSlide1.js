import React from "react";
import { Img, STextWrapper } from "./styles/styles";

const CarouselSlide1 = () => {
  return (
    <>
      <STextWrapper>
        <h1>Best Smartphones</h1>

        <p>Check our Products below !</p>
      </STextWrapper>

      <Img src="img/product-landing2.jpg" alt="phones" />
    </>
  );
};

export default CarouselSlide1;
