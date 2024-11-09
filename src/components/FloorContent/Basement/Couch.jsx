import React from 'react';
import styled from 'styled-components';

const Wraaapper = styled.div`
    width: 40vw;
    margin: 10 auto;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items:center;
    justify-content:center;
`;

const Wrapper = styled.div`
`;

const TopWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 0 10px;
`;

const ArmRest = styled.div`
    width: 25px;
    height: 15px;
    border-radius: 8px;
    background-color: #3A476C;
    margin: 0 1px;

    border-bottom: 5px solid #1C2A52;
    border-top: 5px solid #425179;
`;

const BackCushion = styled.div`
    width: 80px;
    height: 45px;
    background-color: #3A476C;
    border-radius: 10px;
    margin: 0 1px;

    border-bottom: 5px solid #1C2A52;
    border-top: 5px solid #425179;

`;

const SeatCushion = styled.div`
    width: 100%;
    height: 20px;
    border-radius: 10px;
    background-color: #3A476C;

    border-bottom: 5px solid #1C2A52;
    border-top: 5px solid #425179;
`;

const Legs = styled.div`
    width: 10px;
    height: 10px;
    background-color: #1C2A52;
`;

export default function Couch() {
  return (
    <Wraaapper>
      <Wrapper>
        <TopWrapper>
          <ArmRest />
          <BackCushion />
          <BackCushion />
          <BackCushion />
          <ArmRest />
        </TopWrapper>
        <SeatCushion />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Legs />
          <Legs />
          <Legs />
          <Legs />
        </div>
      </Wrapper>
    </Wraaapper>
  );
}
