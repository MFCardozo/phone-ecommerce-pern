import React from "react";
import CarouselPrincipal from "./CarouselPrincipal";
import CarouselSlide1 from "./CarouselSlide1";
import CarouselSlide2 from "./CarouselSlide2";
import CarouselSlide3 from "./CarouselSlide3";
export const Carousel = () => {
  return (
    <>
      <CarouselPrincipal>
        <CarouselSlide1 />
        <CarouselSlide2 />
        <CarouselSlide3 />
      </CarouselPrincipal>
    </>
  );
};
export default Carousel;
