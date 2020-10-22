import styled from "styled-components";
export const BtnBlack = styled.span`
  background: transparent;
  text-transform: capitalize;
  font-size: 0.8rem;
  color: var(--mainDark);
  border-radius: 0;
  border: 0.1rem solid var(--mainDark);
  &:hover {
    background: var(--mainDark);
    color: var(--mainWhite);
  }
`;
export const TrashIcon = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--mainYellow);
`;
export const ProductIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;
