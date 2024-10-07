import React from 'react';
import styled from 'styled-components';
import FramedWindow from './FramedWindow';

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
      <PanelContainer>
        <FramedWindow
          count={30}
          replacedIndex={[0, 2, 4]}
          glow={{
            0: '0 0 250px 0 #FF00FF',
            2: '0 0 250px 0 #F2F100',
            4: '0 0 500px 0 #FF00FF',
          }}
        />
      </PanelContainer>
    </Wrapper>
  );
}
