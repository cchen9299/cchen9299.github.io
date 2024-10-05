import React from 'react';
import styled from 'styled-components';
import Character from './Character';
import { ParallaxLayer } from '../styledComponents';
import useStore, { useElevatorStore } from '../Store';
import Elevator from './Elevator';
import ForthLayer from './ForthLayer';
import ThirdLayer from './ThirdLayer';
import { CINEMATIC_COVERAGE_HEIGHT, FLOOR_HEIGHT } from '../hooks/constants';

const TowerA = styled.div`
    height: 400vh;
    width: 200px;
    background-color: #555;
    position: absolute;
    right: 0;
    top:0;
`;

const Floor = styled.div`
    height: 100vh;
    width: 60vw;
    border-bottom: ${CINEMATIC_COVERAGE_HEIGHT + FLOOR_HEIGHT}px solid grey;
    border-top: ${({ levelFromRoof }) => (levelFromRoof === 0 ? '' : `${CINEMATIC_COVERAGE_HEIGHT + FLOOR_HEIGHT}px solid grey`)};
    position: relative;
    box-sizing: border-box;
    background-color: ${({ levelFromRoof }) => (levelFromRoof === 0 ? '' : 'pink')};
`;

export default function Container() {
  const { sceneRefs: { containerRef } } = useStore();
  const { floorList } = useElevatorStore(1);

  return (
    <ContainerNode ref={containerRef}>
      <ForthLayer />
      <ThirdLayer />
      <ParallaxLayer>
        <TowerA />
      </ParallaxLayer>
      <Character />
      {floorList.map(({ title, subtitle, levelFromRoof }) => (
        <Floor key={title + subtitle} levelFromRoof={levelFromRoof}>
          <Elevator
            level={levelFromRoof}
          />
        </Floor>
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
