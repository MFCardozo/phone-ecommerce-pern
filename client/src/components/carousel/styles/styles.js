import styled, { css } from "styled-components";

export const ContainerCarousel = styled.section`
  background: var(--clr-light);
  padding: 0;
  height: 100vh;
  color: var(--clr-light);
  text-align: center;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 700px) {
    object-position: 30% 70%;
  }
`;
export const CarouselTrackWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`;
export const SCarouselTrack = styled.div`
  display: flex;
  width: 100%;

  ${(props) =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;
export const SCarouselSlide = styled.div`
  flex: 0 0 auto;

  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease;
  width: 100%;
`;
export const CarouseButtonContainer = styled.div`
  position: absolute;
  display: flex;

  justify-content: space-between;
  align-items: center;

  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;
export const CarouselButton = styled.div`
  position: relative;
  margin: 0 0.2em;

  cursor: pointer;

  height: 6.1vmin;
  width: 6.5vmin;
  &:hover {
    opacity: 0.5;
  }
  & :last-child {
    display: block;
    margin: 1vmin auto;
    font-size: 3rem;

    color: #f8f8f8;
  }
`;
export const STextWrapper = styled.div`
  position: sticky;
  height: 0;
  color: #f7f7f7;
  top: 74vh;

  opacity: 0.85;
  & h1 {
    font-size: 3rem;
  }
  & p {
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    & h1 {
      font-size: 2.5rem;
    }
    & p {
      font-size: 1.2rem;
    }
  }
`;
