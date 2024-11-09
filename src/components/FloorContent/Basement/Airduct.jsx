import React from 'react';
import styled from 'styled-components';
import Airvent from './Airvent';

const Duct = styled.div`
    height: 80px;
    width: 100%;
    position: absolute;
    z-index: 1000;
    top: 3%;

    display: flex;
`;

const DuctSection = styled.div`
    background-color: #3A476C;
    height: 80px;
    width: 120px;
    z-index: 1000;

    box-sizing: border-box;

    border-top: 5px solid #425179;
    border-left: 5px solid #26345C;
    border-right: 5px solid #1C2A52;
    border-bottom: 5px solid #425179;

    display: flex;
    align-items: center;
`;

export default function Airduct() {
  return (
    <Duct>
      <DuctSection />
      <DuctSection />
      <DuctSection />
      <DuctSection />
      <DuctSection />
      <DuctSection>
        <Airvent />
      </DuctSection>
      <DuctSection />
      <DuctSection />
      <DuctSection />
      <DuctSection />
      <DuctSection>
        <Airvent />
      </DuctSection>
    </Duct>
  );
}
