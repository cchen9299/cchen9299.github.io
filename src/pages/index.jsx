import React from 'react';
import styled from 'styled-components';
import '../styles.css';
import { Store } from '../Store';
import Container from '../components/Container';
import { CINEMATIC_COVER_HEIGHT } from '../hooks/constants';

const IndexPage = () => (
  <Store>
    <main>
      {/* <Blocker /> */}
      <Cover />
      <Container />
      <Cover style={{ bottom: 0 }} />
    </main>
  </Store>
);

export default IndexPage;

const Cover = styled.div`
  width: 100vw;
  height: calc(${CINEMATIC_COVER_HEIGHT});
  background-color: black;
  position: absolute;
  z-index: 1001
`;

const Blocker = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  opacity: 0.5;
  background-color: pink;
  position: absolute;
  z-index: 1000;
`;
