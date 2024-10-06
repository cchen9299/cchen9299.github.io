import React from 'react';
import { LightsNode, LightsShortNode } from '../../styledComponents';
import { useFloorRandom } from '../../hooks';

const Lights = ({ short }) => {
  const amount = new Array(useFloorRandom(2) + 3);
  const lights = [...amount.keys()];
  const Node = short ? LightsShortNode : LightsNode;
  return lights.map((key) => <Node key={key} />);
};

export default Lights;
