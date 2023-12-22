import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr;
  height: 100vh;
`;
const Tripbox = styled.div`
  background-color: skyblue;
  color: white;
  height: 50%;
`;

function Trip() {
  return (
    <Wrapper>
      <Tripbox>1</Tripbox>
      <Tripbox>2</Tripbox>
      <Tripbox>3</Tripbox>
    </Wrapper>
  );
}

export default Trip;
