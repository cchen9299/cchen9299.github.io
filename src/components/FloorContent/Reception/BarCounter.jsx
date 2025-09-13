import React from 'react';
import styled from 'styled-components';
import Stool from './Stool';

const Waterfall = styled.div`
    background-color: #212554;
    height: 90px;
    width: 75px;
    border-right: 10px solid #465A93;
`;

const Top = styled.div`
    background-color: #465A93;
    height: 10px;
    width: 350px;
`;

const Bottom = styled.div`
    background-color: #212554;
    height: 78px;
    width: 350px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
`;

const Glow = styled.div`
    width: 350px;
    height: 2px;
    background-color: #FFF;
    box-shadow:
        0 0 10px 0px #0FF,
        0 0 50px 2px #0FF;
    z-index: 10;
    position: relative;
`;

const WaterfallEnd = styled.div`
    background-color: #191446;
    height: 80px;
    width: 40px;
    border-top: 10px solid #465A93;
    border-right: 10px solid #465A93;
`;

export default function BarCounter() {
  return (
    <div style={{ display: 'flex' }}>
      <Waterfall />
      <div>
        <Top />
        <Glow />
        <Bottom>
          <Stool />
          <Stool />
          <Stool />
          <Stool />
          <Stool />
          <Stool />
        </Bottom>
      </div>
      <WaterfallEnd />
    </div>
  );
}
