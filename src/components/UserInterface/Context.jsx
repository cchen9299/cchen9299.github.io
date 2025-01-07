import React from 'react';
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
  const Content = contextMap[currentLevel];
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  );
}
