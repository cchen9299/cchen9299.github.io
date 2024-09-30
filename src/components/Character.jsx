import React, { useRef } from 'react';
import styled from 'styled-components';
import { ParallaxLayer } from '../styledComponents';
import { useCharacterActions } from '../hooks';

const CharacterNode = styled(ParallaxLayer)`
  height: 150px;
  width: 70px;
  background-color: black;
  position: relative;
`;

export default function Character() {
  const ref = useRef();
  const { x, y } = useCharacterActions({ characterRef: ref });

  return (
    <CharacterNode
      ref={ref}
      id="ghost"
      style={{
        left: x,
        top: y,
        transition: 'all 0.1s linear',
      }}
    />
  );
}
