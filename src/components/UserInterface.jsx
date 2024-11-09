import React from 'react';
import styled from 'styled-components';
import { CINEMATIC_COVER_HEIGHT } from '../hooks/constants';

const Interface = styled.div`
  height: calc(96vh - (${CINEMATIC_COVER_HEIGHT} * 2));
  width: 100%;
  background-color: rgba(0,102,255,0.5);
  backdrop-filter: blur(20px);

  box-shadow:
    inset 0 0 20px 5px #F0F,
    0 0 5px 2px #FFF,
    0 0 5px 2px #F0F,
    0 0 50px 5px #F0F;
`;

const InterfaceContainer = styled.div`
  width: 36vw;
  height: 100%;
  position: fixed;
  right: 2vw;
  top: calc(${CINEMATIC_COVER_HEIGHT} + 2vh);
`;

export default function UserInterface() {
  return (
    <InterfaceContainer>
      <Interface />
    </InterfaceContainer>
  );
}
