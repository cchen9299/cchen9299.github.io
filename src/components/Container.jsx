import React from 'react';
import styled from 'styled-components';
import Character from './Character';
import {
  ParallaxLayer, FarBox, MidBox,
} from '../styledComponents';
import useStore, { useElevatorStore } from '../Store';
import Elevator from './Elevator';
import ForthLayer from './ForthLayer';
import ThirdLayer from './ThirdLayer';

const hundred = new Array(100);
const ten = new Array(10);
const midLayerBoxes = [...hundred.keys()];
const farLayerBoxes = [...ten.keys()];
// const closeLayerBoxes = [...ten.keys()];

const TowerA = styled.div`
    height: 400vh;
    width: 200px;
    background-color: #555;
    position: absolute;
    right: 0;
    top:0;
`;

export default function Container() {
  const { sceneRefs: { containerRef } } = useStore();
  const { floorList } = useElevatorStore(1);

  return (
    <ContainerNode ref={containerRef}>
      <ForthLayer />
      <ThirdLayer />
      <ParallaxLayer>
        {/* {midLayerBoxes.map((_) => <MidBox key={_} />)} */}
        <TowerA />
      </ParallaxLayer>
      <Character />
      {floorList.map(({ title, subtitle, levelFromRoof }) => (
        <Elevator
          key={title + subtitle}
          level={levelFromRoof}
        />
      ))}
    </ContainerNode>
  );
}

export const ContainerNode = styled.div`
  height: 100vh;
  perspective: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth
`;
