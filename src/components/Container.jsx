import React from 'react';
import styled from 'styled-components';
import Character from './Character';
import {
  ParallaxLayer, FarBox, MidBox,
} from '../styledComponents';
import useStore from '../Store';
import Elevator from './Elevator';

const hundred = new Array(100);
const ten = new Array(10);
const midLayerBoxes = [...hundred.keys()];
const farLayerBoxes = [...ten.keys()];
const closeLayerBoxes = [...ten.keys()];

export default function Container() {
  const {
    interactablesRef: { containerRef },
  } = useStore();

  return (
    <ContainerNode ref={containerRef}>
      <ParallaxLayer>
        {farLayerBoxes.map((_) => <FarBox key={_} />)}
      </ParallaxLayer>
      <ParallaxLayer>
        {midLayerBoxes.map((_) => <MidBox key={_} />)}
      </ParallaxLayer>
      <Character />
      <Elevator level={1} />
      {/* <Elevator level={4} />
      <Elevator level={7} /> */}
      <ParallaxLayer />
      {/* <ParallaxLayer>
    {closeLayerBoxes.map((_) => <CloseBox key={_} />)}
  </ParallaxLayer> */}
    </ContainerNode>
  );
}

export const ContainerNode = styled.div`
  height: 100vh;
  perspective: 300px;
  overflow: scroll;
  scroll-behavior: smooth
`;
