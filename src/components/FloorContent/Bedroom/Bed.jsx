import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 5px;
`;

const Headboard = styled.div`
    background-color: #426B9F;
    border-left: 8px solid #23325D;
    height: 50px;
    width: 180px;
`;

const Baseframe = styled.div`
    background-color: #426B9F;
    border-left: 115px solid #23325D;
    height: 10px;
    width: 180px;
`;

const MattressContainer = styled.div`
    width: 270px;
    height: 30px;
    position: absolute;
    bottom: 10px;
    left: 15px;
`;

const MattressRight = styled.div`
    width: 160px;
    height: 100%;
    background-color: #5B7AA0;
    border-radius: 6px;
    position: absolute;
    right: 0;
`;

const MattressLeft = styled.div`
    width: 100%;
    height: 100%;
    background-color: #23325D;
    border-radius: 6px;
    position: absolute;
`;

const PillowRow = styled.div`
    width: 160px;
    display: flex;
    position: absolute;
    bottom: 40px;
    left: 30px;
`;

const PillowContainer = styled.div`
    width: 270px;
    height: 12px;
    position: relative;
`;

const PillowLeft = styled.div`
    width: 20px;
    height: 100%;
    background-color: #23325D;
    border-radius: 6px;
    position: absolute;
    left: 0;
`;

const PillowRight = styled.div`
    width: 75px;
    height: 100%;
    background-color: #5B7AA0;
    border-radius: 6px;
    position: absolute;
`;

const Glow = styled.div`
    position: absolute;
    bottom: 0;
    width: 300px;
    height: 4%;
    background-color: #0FF;
    box-shadow:
        0 0 40px 1px #FFF,
        0 0 150px 0px #FFF,
        0 0 40px 1px #0FF,
        0 0 150px 0px #0FF;
`;

export default function Bed() {
  return (
    <Wrapper>
      <Headboard />
      <PillowRow>
        <PillowContainer>
          <PillowRight />
          <PillowLeft />
        </PillowContainer>
        <PillowContainer>
          <PillowRight />
          <PillowLeft />
        </PillowContainer>
      </PillowRow>
      <MattressContainer>
        <MattressLeft />
        <MattressRight />
      </MattressContainer>
      <Baseframe />
      <Glow />
      {/* <Screen baseColor="#0FF" style={{ height: '4%', width: 295, zIndex: 1000 }} /> */}
    </Wrapper>
  );
}
