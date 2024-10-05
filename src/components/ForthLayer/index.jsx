import React from 'react';

import styled from 'styled-components';
import {
  ParallaxLayer, MidBox,
} from '../../styledComponents';

export const FarBox = styled.div`
  background-color: rgba(0,255,0,1);
  height: 600px;
  width: 100vw;
  position: relative;

  -webkit-transform: translateZ(-300px) scale(2);
  transform: translateZ(-300px) scale(2);
`;

const TowerA = styled.div`
    height: 500px;
    width: 150px;
    background-color: #555;
    position: absolute;
    right: 20%;
    bottom: 0%;
`;

const TowerB = styled.div`
    height: 300px;
    width: 100px;
    background-color: #555;
    position: absolute;
    right: 45%;
    bottom: 0%;
`;

const TowerC = styled.div`
    height: 150px;
    width: 200px;
    background-color: #555;
    position: absolute;
    right: 30%;
    bottom: 0%;
`;

const TowerD = styled.div`
    height: 200px;
    width: 100px;
    background-color: #555;
    position: absolute;
    right: 28%;
    bottom: 0%;
`;

const TowerE = styled.div`
    height: 400px;
    width: 100px;
    background-color: #555;
    position: absolute;
    right: 18%;
    bottom: 0%;
`;

const CelestialBody = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: #555;
    position: absolute;
    left: 10%;
    top: 17%;
`;

const arr = new Array

export default function ForthLayer() {
  return (
    <ParallaxLayer>
      <FarBox>
        <div>
          <TowerA />
          <TowerB />
          <TowerC />
          <TowerD />
          <TowerE />
          <CelestialBody />
        </div>
      </FarBox>
    </ParallaxLayer>
  );
}
