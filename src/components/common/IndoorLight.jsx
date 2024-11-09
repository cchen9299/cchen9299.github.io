import React from 'react';
import { IndoorLightNode } from '../../styledComponents';
import { useFloorRandom } from '../../hooks';

const IndoorLight = () => {
  const amount = new Array(useFloorRandom(2) + 3);
  const lights = [...amount.keys()];
  return lights.map((key) => <IndoorLightNode key={key} />);
};

export default IndoorLight;
