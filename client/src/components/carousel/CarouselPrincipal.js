import React, { useState, useEffect } from "react";
import {
  ContainerCarousel,
  CarouselTrackWrapper,
  SCarouselTrack,
  SCarouselSlide,
  CarouselButton,
  CarouseButtonContainer,
} from "./styles/styles";

const CarouselPrincipal = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  const leftSlideClick = () => {
    setCurrentSlide(
      (currentSlide - 1 + activeSlide.length) % activeSlide.length
    );
  };

  const rigthSlideClick = () => {
    setCurrentSlide((currentSlide + 1) % activeSlide.length);
  };

  useEffect(() => {
    const interval = setInterval(() => rigthSlideClick(), 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <ContainerCarousel>
      <CarouselTrackWrapper>
        <SCarouselTrack currentSlide={currentSlide}>
          {activeSlide}
        </SCarouselTrack>
      </CarouselTrackWrapper>
      <CarouseButtonContainer>
        <CarouselButton
          onClick={() => {
            leftSlideClick();
          }}
        >
          <i className="fas fa-angle-left"></i>
        </CarouselButton>
        <CarouselButton
          onClick={() => {
            rigthSlideClick();
          }}
        >
          <i className="fas fa-angle-right"></i>
        </CarouselButton>
      </CarouseButtonContainer>
    </ContainerCarousel>
  );
};
export default CarouselPrincipal;
