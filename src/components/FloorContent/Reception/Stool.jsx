import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
    width: 35px; 
    height: 15px;
    border-radius: 5px 5px 3px 3px;
    background-color: #191446;
`;

const Glow = styled.div`
    width: 35px;
    height: 2px;
    background-color: #FFF;
    box-shadow:
        0 0 10px 0px #0FF,
        0 0 50px 2px #0FF;
    z-index: 10;
    position: relative;
`;

const Leg = styled.div`
    height: 45px;
    width: 3px;
    background-color: #636882;
    border-right: 2px solid #a4a7b3;
`;

const Base = styled.div`
    height: 3px;
    width: 30px;
    background-color: #636882;
    border-radius: 5px 5px 0 0;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    left: 20px;
`;

export default function Stool() {
  return (
    <Wrapper>
      <Top />
      <Glow />
      <Leg />
      <Base />
    </Wrapper>
  );
}
