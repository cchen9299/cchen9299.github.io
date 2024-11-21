import React from 'react';
import { number } from 'prop-types';
import Roof from './Roof';
import Basement from './Basement';
import Reception from './Reception';
import Bedroom from './Bedroom';

const FloorContentMap = {
  0: Roof,
  1: Bedroom,
  2: Reception,
  3: Basement,
};

export default function FloorContent({ level }) {
  const Floor = FloorContentMap[level];
  return (
    <Floor />
  );
}

FloorContent.propTypes = {
  level: number.isRequired,
};
