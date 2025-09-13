import React from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';
import Roof from './Roof';
import Basement from './Basement';
import Reception from './Reception';
import Bedroom from './Bedroom';

const ElevatorShaft = styled.div`
  min-height: 235px;
  height: ${({ isTopLevel }) => (isTopLevel ? 'inherit' : 100)}%;
  width: 150px;
  background-color: #1C344E;
  position: absolute;
  bottom: 0;
  z-index: 10;
`;

const FloorContentMap = {
  0: Roof,
  1: Bedroom,
  2: Reception,
  3: Basement,
};

export default function FloorContent({ level }) {
  const Floor = FloorContentMap[level];
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <ElevatorShaft isTopLevel={level === 0} />
      <Floor />
    </div>
  );
}

FloorContent.propTypes = {
  level: number.isRequired,
};
