import React from "react";
import styled from "styled-components";
export default function Title({ name, title }) {
  return (
    <div className="row my-5 mw-100 mx-auto">
      <TitleStyle className="col-10 mx-auto my-3 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name}
          <strong>{title}</strong>
        </h1>
      </TitleStyle>
    </div>
  );
}

const TitleStyle = styled.div`
  font-family: "Fjalla One", sans-serif;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`;
