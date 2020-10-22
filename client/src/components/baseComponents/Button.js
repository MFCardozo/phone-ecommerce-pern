import styled from "styled-components";

export const ButtonModel = styled.button`
  background: transparent;
  border: 0.05rem solid var(--lightGray);
  border-color: ${(props) =>
    props.back ? "var(--mainBrown)" : "var(--lightGray)"};
  border-radius: 100vh;
  color: ${(prop) => (prop.back ? "var(--mainBrown)" : "var(--lightGray)")};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;

  height: 6vh;
  min-height: 40px;
  transition: all 0.5s ease-in-out;
  text-transform: capitalize;

  &:hover {
    background: ${(prop) => (prop.back ? "" : "var(--lightGray)")};
    color: var(--mainBrown);
  }

  &:focus {
    outline: none;
  }
`;
