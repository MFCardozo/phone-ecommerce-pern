import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: var(--mainBrown);
  opacity: 0.85;
  height: 7%;
  min-height: 54px;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 1000;

  .nav-link {
    color: Var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 700px) {
    .nav-link {
      font-size: 1rem;
    }
  }
`;

export const SearchContainer = styled.div`
  left: 0;
  position: Absolute;

  transition: all 500ms ease;
  width: ${(props) => props.appear};
  background-color: var(--mainWhite);
  & input {
    appearance: none;
    background: linear-gradient(#070707, #070707) center bottom 4px /
      calc(100% - 10px) 1px no-repeat;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2),
      4px 4px 10px 0px rgba(0, 0, 0, 0.4);
    border: 0;
    border-radius: 1vh;
    font-size: 1.5rem;
    height: 8vh;
    padding: 0;
    opacity: 0.9;
    width: 100%;
  }
`;
