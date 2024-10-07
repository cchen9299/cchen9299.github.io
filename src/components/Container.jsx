import React from 'react';
import styled from 'styled-components';
import Character from './Character';
import useStore, { useElevatorStore } from '../Store';
import Elevator from './Elevator';
import ForthLayer from './ForthLayer';
import ThirdLayer from './ThirdLayer';
import { CINEMATIC_COVER_HEIGHT, FLOOR_HEIGHT } from '../hooks/constants';
import FloorContent from './FloorContent';
import SecondLayer from './SecondLayer';

const Floor = styled.div`
    height: 100vh;
    width: 60vw;
    position: relative;
    box-sizing: border-box;
    z-index: 1;

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
`;

const Ceiling = styled.div`
  width: ${({ lastLevels }) => (lastLevels ? '100vw' : '')};
  height: calc(${CINEMATIC_COVER_HEIGHT} + ${FLOOR_HEIGHT});
  background-color: #101D43;
`;

const Ground = styled.div`
    width: ${({ lastLevels }) => (lastLevels ? '100vw' : '')};
    height: calc(${CINEMATIC_COVER_HEIGHT} + ${FLOOR_HEIGHT});
    background-color: #101D43;
`;

const Space = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -1;
`;

export default function Container() {
  const { sceneRefs: { containerRef } } = useStore();
  const { floorList } = useElevatorStore(1);

  return (
    <ContainerNode ref={containerRef}>
      <ForthLayer />
      <ThirdLayer />
      {/* <SecondLayer /> */}
      <Character />
      {floorList.map(({ title, subtitle, levelFromRoof }) => (
        <Floor key={title + subtitle} levelFromRoof={levelFromRoof}>
          <Ground lastLevels={levelFromRoof >= 2} />
          <div style={{ flexGrow: 1 }}>
            <Space>
              <FloorContent level={levelFromRoof} />
              <Elevator level={levelFromRoof} />
            </Space>
          </div>
          {levelFromRoof !== 0 && <Ceiling lastLevels={levelFromRoof > 2} />}
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
