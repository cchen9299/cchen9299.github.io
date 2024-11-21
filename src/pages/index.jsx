import React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import styled, { StyleSheetManager } from 'styled-components';
import '../styles.css';
import { Store } from '../Store';
import Container from '../components/Container';
import { CINEMATIC_COVER_HEIGHT } from '../hooks/constants';
// import UserInterface from '../components/UserInterface';

function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    return isPropValid(propName);
  }
  return true;
}

const IndexPage = () => (
  <StyleSheetManager shouldForwardProp={shouldForwardProp}>
    <Store>
      <main>

        {/* <Blocker /> */}
        <Cover />
        <Container />
        {/* <UserInterface /> */}
        <Cover style={{ bottom: 0 }} />
      </main>
    </Store>
  </StyleSheetManager>
);

export default IndexPage;

const Cover = styled.div`
  width: 100vw;
  height: calc(${CINEMATIC_COVER_HEIGHT});
  background-color: black;
  position: absolute;
  z-index: 1001;
  opacity: 0.8;
`;

// const Blocker = styled.div`
//   height: 100vh;
//   width: 100vw;
//   overflow: hidden;
//   opacity: 0.5;
//   background-color: pink;
//   position: absolute;
//   z-index: 1000;
// `;
