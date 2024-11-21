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
    position: relative;
`;

const SeatLeft = styled.div`
    width: 20px;
    height: 100%;
    background-color: #2A2E47;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 100px;
    position: absolute;
    top: 0;
`;

const SeatRight = styled.div`
    width: 100%;
    height: 100%;
    background-color: #39436F;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 100px;
`;

const Front = styled.div`
    width: 20px;
    height: 3px;
    border-left: 2px solid #2A2E47;
    background-color: #313653;
    align-self: flex-start;
`;

const LegsContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #636882;
`;
const Legs = styled.div`
  width: 2px;
  height: 50px;
  background-color: #636882;
  &:nth-child(2){
    position: relative;
    left: 18px;
  }
`;

const Wrapper = styled.div`
    width: 40px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`;

const BottomContainer = styled.div`
  width: 100%;
`;

export default function BarStool() {
  return (
    <Wrapper>
      <Back />
      <SeatContainer>
        <SeatRight />
        <SeatLeft />
      </SeatContainer>
      <BottomContainer>
        <Front />
        <LegsContainer>
          <Legs />
          <Legs />
        </LegsContainer>
      </BottomContainer>
    </Wrapper>
  );
}
