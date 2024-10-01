import React from 'react';

import styled from 'styled-components';
import { ParallaxLayer } from '../../styledComponents';

export const FarBox = styled.div`
  background-color: rgba(0,0,200,0.5);
  height: 290vh;
  width: 100vw;
  position: absolute;

  -webkit-transform: translateZ(-200px) scale(1.75);
  transform: translateZ(-200px) scale(1.75);
`;

export const CloseBox = styled.div`
  background-color: rgba(0,0,200,0.2);
  height: 300vh;
  width: 100vw;
  position: absolute;

  -webkit-transform: translateZ(-150px) scale(1.5);
  transform: translateZ(-150px) scale(1.5);
`;

const TowerA = styled.div`
    height: 185vh;
    width: 550px;
    background-color: #555;
    position: absolute;
    right: 10%;
    bottom: 0;
`;

const TowerB = styled.div`
    height: 200vh;
    width: 200px;
    background-color: #555;
    position: absolute;
    right: 60%;
    bottom: 0;
`;

const TowerC = styled.div`
    height: 190vh;
    width: 600px;
    background-color: #555;
    position: absolute;
    right: 30%;
    bottom: 0;
`;

const TowerD = styled.div`
    height: 185vh;
    width: 600px;
    background-color: #555;
    position: absolute;
    right: 65%;
    bottom: 0;
`;

export default function ThirdLayer() {
  return (
    <ParallaxLayer>
      <FarBox>
        <div>
          <TowerA />
          <TowerB />
        </div>
      </FarBox>
      <CloseBox>
        <div>
          <TowerC />
          <TowerD />
        </div>
      </CloseBox>
    </ParallaxLayer>
  );
}
