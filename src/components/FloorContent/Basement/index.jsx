import React from 'react';
import styled from 'styled-components';
import FramedWindow from './FramedWindow';
import Airduct from './Airduct';
import Server from './Server';
import Couch from './Couch';
import Desk from './Desk';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  overflow: hidden;
`;

const PanelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export default function Basement() {
  return (
    <Wrapper>
      <Airduct />
      <PanelContainer>
        <FramedWindow
          count={30}
          replacedIndex={[0, 2, 4]}
          lightsIndex={[7, 9, 11]}
          glow={{
            0: '0 0 250px 0 #FF00FF',
            2: '0 0 250px 0 #F2F100',
            4: '0 0 500px 0 #FF00FF',
          }}
        />
      </PanelContainer>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          display: 'flex',
          zIndex: 1,
          left: '5vw',
        }}
      >
        <Server />
        <Server />
        <Server />
        <Server />
      </div>
      <div style={{
        // width: '100%',
        // height: '100%',
        // bottom: 0,
      }}
      >
        <Couch />
        <Desk />
      </div>
    </Wrapper>
  );
}
