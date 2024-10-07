import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ParallaxLayer } from '../styledComponents';
import { useCharacterActions } from '../hooks';

const CharacterNode = styled(ParallaxLayer)`
  height: 150px;
  width: 70px;
  background-color: black;
  position: absolute;

  left: ${({ x }) => x}vw;
  top: ${({ y }) => `calc(${y})`};
  transition: all 0.1s linear;
`;

export default function Character() {
  const ref = useRef();
  const { x, y } = useCharacterActions({ characterRef: ref });

  return (
    <CharacterNode
      ref={ref}
      id="ghost"
      x={x}
      y={y}
    />
  );
}
