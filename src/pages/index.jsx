import React from 'react';
import styled from 'styled-components';
import '../styles.css';
import { Store } from '../Store';
import Container from '../components/Container';

const IndexPage = () => {
  const coverHeight = (window.innerHeight / 2.39) * 0.5;
  const cinematicBottom = window.innerHeight - coverHeight;

  return (
    <Store>
      <main>
        <Blocker />
        <Cover style={{ height: coverHeight, opacity: 0.5 }} />
        <Container />
        <Cover style={{ height: coverHeight, top: cinematicBottom, opacity: 0.5 }} />
      </main>
    </Store>
  );
};

export default IndexPage;

const Cover = styled.div`
  width: 100vw;
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
