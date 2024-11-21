import React from 'react';
import styled from 'styled-components';
import { useFloorRandom } from '../../../hooks';
import { bottleMap } from './constants';

const Wrapper = styled.div`
    height: 60px;
`;

const BottleContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: flex-end;
    justify-content: space-around;
`;

const Shelf = styled.div`
    width: calc(100% - 2px);
    height: 3px;
    border: 1px solid white;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 5px 0px rgba(255,255,255, 0.7);
`;

export default function BottleRow() {
  const BottleStatic = bottleMap[useFloorRandom(6)];
  return (
    <Wrapper>
      <BottleContainer>
        <BottleStatic />
        <BottleStatic />
        <BottleStatic />
      </BottleContainer>
      <Shelf />
    </Wrapper>
  );
}
