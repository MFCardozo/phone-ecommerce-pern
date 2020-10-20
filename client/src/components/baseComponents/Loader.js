import React from "react";
import styled from "styled-components";
export const PageLoader = () => {
  return <Loader></Loader>;
};
const Loader = styled.div`
  animation: loading 1.1s infinite linear;
  border: 1.1vw solid rgba(0, 0, 0, 0.2);
  border-left: 1.1vw solid #000000;
  border-radius: 50%;
  height: 12vw;
  left: calc(50% - 4vw);
  position: absolute;

  top: calc(50% - 4vw);
  transition: opacity 0.3s;
  width: 12vw;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
