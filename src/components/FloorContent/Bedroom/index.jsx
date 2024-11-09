import React from 'react';
import styled from 'styled-components';
import GlassFacade from '../../common/GlassFacade';
import Bed from './Bed';
import Kitchen from './Kitchen';

const Half = styled.div`
    height: 50%;
    position: relative;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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

export default function Bedroom() {
  return (
    <Wrapper>
      <GlassFacade />
      <Half>
        <Bed />
        <Floor />
      </Half>
      <Half>
        <Kitchen />
      </Half>
    </Wrapper>
  );
}
