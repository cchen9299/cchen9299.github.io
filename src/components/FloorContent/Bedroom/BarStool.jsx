import React from 'react';
import styled from 'styled-components';

const Back = styled.div`
    width: 20px;
    height: 3px;
    border-left: 2px solid #2A2E47;
    background-color: #39436F;
`;
const SeatContainer = styled.div`
    width: 40px;
    height: 3px;
    background-color: pink;
`;
const SeatLeft = styled.div`
`;
const SeatRight = styled.div`
    width: 100%;
    height: 100%;
    border-left: 2px solid #2A2E47;
    background-color: #39436F;
    border-bottom-right-radius: 100px;
`;
const Front = styled.div``;
const LegsContainer = styled.div``;
const Legs = styled.div``;
const Wrapper = styled.div`
    height: 100px;
    width: 100px;
    position: absolute;
`;

export default function BarStool() {
  return (
    <Wrapper>
      <Back />
      <SeatContainer>
        <SeatRight />
        <SeatLeft />
      </SeatContainer>
    </Wrapper>
  );
}
