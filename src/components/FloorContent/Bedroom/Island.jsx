import React from 'react';
import styled from 'styled-components';
import BarStool from './Barstool';

const Wrapper = styled.div`
    display:flex;
    position:absolute;
    height: 90px;
    width: 400px;
    left: 70px;
    z-index: 1000;
    bottom: 0;
`;

const Waterfall = styled.div`
    width: 120px;
    height: 90px;
    background-color: #212554;
    border-right: 10px solid #465A93;
    z-index: 100;
    position: relative;
`;

const IslandContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const IslandTop = styled.div`
    width: 85%;
    height: 10px;
    background-color: #465A93;
    z-index: 50;
`;

const Glow = styled.div`
    width: 80%;
    height: 3%;
    background-color: #FFF;
    box-shadow:
        0 0 10px 0px #0FF,
        0 0 50px 2px #0FF;
    z-index: 10;
`;

const IslandBottom = styled.div`
    height: 100%;
    width: 80%;
    background-color: #212554;
`;

const AccentContainer = styled.div`
    position: absolute;
    right: 20px;
    top: 30px;
    width: 70px;
    height: 30px;
`;

const IslandAccent = styled.div`
    width: calc(100% - 8px);
    height: 30px;
    background-color: #465A93;
    border-left: 8px solid #212554;
    z-index: 1;
    position: relative;
`;

const AccentGlow = styled.div`
    width: 100%;
    height: 10%;
    background-color: #FFF;
    box-shadow:
        0 0 10px 0px #0FF,
        0 0 50px 2px #0FF;
`;

export default function Island() {
  return (
    <Wrapper>
      <Waterfall />
      <IslandContainer>
        <IslandTop />
        <Glow />
        <IslandBottom />
        <AccentContainer>
          <IslandAccent />
          <AccentGlow />
        </AccentContainer>
      </IslandContainer>
      <div style={{
        position: 'absolute',
        right: 0,
      }}
      >
        <BarStool />
      </div>
    </Wrapper>
  );
}
