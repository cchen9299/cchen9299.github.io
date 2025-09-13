import React, { useRef } from 'react';
import styled from 'styled-components';
import GlassFacade from '../../common/GlassFacade';
import Bed from './Bed';
import Kitchen from './Kitchen';
import Couch from './Couch';
import Chandelier from '../../common/Chandelier';
import Stairs from './Stairs';

const Top = styled.div`
    height: 50%;
    position: relative;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Bottom = styled.div`
    height: 50%;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: flex-end;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Floor = styled.div`
    width: 450px;
    height: 15px;
    background-color: #5F90B8;
    border-left: 200px solid #131E41;
`;

const LivingRoom = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1002;
`;

const ChandelierContainer = styled.div`
  position: absolute;
  bottom: 120px;
  right: 17%;

  height: 50%;
  width: 100px;
  z-index: 100;
`;

export default function Bedroom() {
  const bedroomBottomRef = useRef();

  return (
    <Wrapper>
      <GlassFacade />
      <Top>
        <Bed />
        <Floor />
      </Top>
      <Bottom ref={bedroomBottomRef}>
        <Stairs bedroomBottomRef={bedroomBottomRef} />
        <Kitchen />
        <LivingRoom>
          <ChandelierContainer>
            <Chandelier />
          </ChandelierContainer>
          <Couch />
        </LivingRoom>
      </Bottom>
    </Wrapper>
  );
}
