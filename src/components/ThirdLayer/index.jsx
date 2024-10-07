import React from 'react';
import styled from 'styled-components';
import { ParallaxLayer } from '../../styledComponents';
import TowerGroup from './TowerGroup';

export const FarBox = styled.div`
  height: 215vh;
  width: 100vw;
  position: relative;
  bottom:0;

  -webkit-transform: translateZ(-300px) scale(2.4);
  transform: translateZ(-300px) scale(2.4);
`;

export default function ThirdLayer() {
  return (
    <ParallaxLayer>
      <FarBox>
        <TowerGroup />
      </FarBox>
    </ParallaxLayer>
  );
}
