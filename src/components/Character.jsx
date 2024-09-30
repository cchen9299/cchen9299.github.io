import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ParallaxLayer } from '../styledComponents';
import { useCharacterActions } from '../hooks';
import useStore from '../Store';

const CharacterNode = styled(ParallaxLayer)`
  height: 150px;
  width: 70px;
  background-color: black;
  position: relative;
`;

export default function Character() {
  const {
    interactablesRef: { characterRef },
  } = useStore();
  const { x, y, setDirection } = useCharacterActions();

  return (
    <CharacterNode
      ref={characterRef}
      id="ghost"
      style={{
        left: x,
        top: y,
        transition: 'all 0.1s linear',
      }}
    />
  );
}
