import React from 'react';
import styled from 'styled-components';
import Character from './Character';
import useStore, { useElevatorStore } from '../Store';
import Elevator from './Elevator';
import ForthLayer from './ForthLayer';
import ThirdLayer from './ThirdLayer';
import { CINEMATIC_COVER_HEIGHT, FLOOR_HEIGHT } from '../hooks/constants';

const Floor = styled.div`
    height: 100vh;
    width: 60vw;
    border-bottom: calc(${CINEMATIC_COVER_HEIGHT} + ${FLOOR_HEIGHT}) solid;
    border-top: ${({ levelFromRoof }) => (levelFromRoof === 0 ? '' : `calc(${CINEMATIC_COVER_HEIGHT} + ${FLOOR_HEIGHT}) solid`)};
    border-color: #101D43;
    position: relative;
    box-sizing: border-box;
    background-color: ${({ levelFromRoof }) => (levelFromRoof === 0 ? '' : '')};
`;

export default function Container() {
  const { sceneRefs: { containerRef } } = useStore();
  const { floorList } = useElevatorStore(1);

  return (
    <ContainerNode ref={containerRef}>
      <ForthLayer />
      <ThirdLayer />
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
  max-height:200vh;
  perspective: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth
`;
