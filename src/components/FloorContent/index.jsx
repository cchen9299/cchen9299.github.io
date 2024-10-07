import React from 'react';
import styled from 'styled-components';
import Roof from './Roof';
import Bar from './Basement';
import Bedroom from './Bedroom';
import Office from './Office';

const FloorContentMap = {
  0: Roof,
  1: Bedroom,
  2: Office,
  3: Bar,
};

export default function FloorContent({ level }) {
  const Floor = FloorContentMap[level];
  return (
    <Floor />
  );
}
