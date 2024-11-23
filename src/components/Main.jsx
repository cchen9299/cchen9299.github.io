import React from 'react';
import styled from 'styled-components';
import '../styles.css';
import Container from './Container';
import { CINEMATIC_COVER_HEIGHT } from '../hooks/constants';
import UserInterface from './UserInterface';
import useStore from '../Store';

const Main = () => {
  const { isImmersive } = useStore();
  return (
    <main>
      <Cover isImmersive={isImmersive} />
      <Container />
      <UserInterface />
      <Cover isImmersive={isImmersive} />
    </main>
  );
};

export default Main;

const Cover = styled.div`
  width: 100vw;
  height: calc(${({ isImmersive }) => (isImmersive ? CINEMATIC_COVER_HEIGHT : 0)});
  background-color: black;
  position: absolute;
  z-index: 1001;
  &:last-child{
      bottom: 0;
  }
`;
