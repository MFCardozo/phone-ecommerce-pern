import styled from "styled-components";

export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }

    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .cart-btn {
    background: var(--mainBrown);
    border: none;
    border-radius: 0.5rem 0 0 0;
    bottom: 0;
    color: var(--mainWhite);
    font-size: 1.4rem;
    padding: 0.2 rem 0.4rem;
    position: absolute;
    transform: translate(100%);
    transition: all 1s linear;
    right: 0;
  }

  .img-container: hover .cart-btn {
    transform: translate(0);
  }

  .cart-btn:hover {
    color: var(--lightGray);
    cursor: pointer;
  }
`;
