import React, { useState, useEffect, useCallback } from "react";
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
    return setCurrentSlide(
      (currentSlide - 1 + activeSlide.length) % activeSlide.length
    );
  };

  //useCallback its for better useEffect hook performance

  const rigthSlideClickCallback = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % activeSlide.length);
  }, [currentSlide, activeSlide.length]);

  useEffect(() => {
    const interval = setInterval(() => rigthSlideClickCallback(), 5000);
    return () => clearInterval(interval);
  }, [rigthSlideClickCallback]);

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
            rigthSlideClickCallback();
          }}
        >
          <i className="fas fa-angle-right"></i>
        </CarouselButton>
      </CarouseButtonContainer>
    </ContainerCarousel>
  );
};
export default CarouselPrincipal;
