import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: var(--mainBrown);
  opacity: 0.85;
  height: 8%;
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
      font-size: 1.1rem;
    }
  }
`;

export const SearchContainer = styled.div`
  left: 0;
  position: Absolute;
  padding: 0 0.2rem;
  transition: width 500ms ease;
  width: ${(props) => props.appear};

  & input {
    appearance: none;
    background-color: var(--mainWhite);
    background: linear-gradient(#070707, #070707) center bottom 4px /
      calc(100% - 10px) 1px no-repeat;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2),
      4px 4px 10px 0px rgba(0, 0, 0, 0.4);
    border: 0;
    border-radius: 1vh;
    height: 5vh;
    padding: 0;
    opacity: 0.85;
    width: 100%;
  }
`;
