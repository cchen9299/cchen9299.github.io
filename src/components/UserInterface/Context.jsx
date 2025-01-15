import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useStore from '../../Store';
import RoofInterface from './RoofInterface';
import BedroomInterface from './BedroomInterface';
import ReceptionInterface from './ReceptionInterface';
import BasementInterface from './BasementInterface';

const Wrapper = styled.div`
    color: rgb(104, 166, 238);
    padding: 1ch;
    height: calc(100% - 94px);
`;

const contextMap = {
  0: RoofInterface,
  1: BedroomInterface,
  2: ReceptionInterface,
  3: BasementInterface,
};

export default function Context() {
  const { currentLevel } = useStore();
  const ref = useRef(contextMap[currentLevel]);
  const { current: Content } = ref;

  useEffect(() => {
    setTimeout(() => { ref.current = contextMap[currentLevel]; }, 1150);
  }, [currentLevel]);

  return (
    <Wrapper>
      <Content />
    </Wrapper>
  );
}
