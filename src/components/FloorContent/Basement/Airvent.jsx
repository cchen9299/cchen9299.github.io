import React from 'react';
import styled from 'styled-components';

const Vent = styled.div`
    width: 80px;
    box-sizing: border-box;
    border: 5px solid #33426E;
    background-color: #1C2A52;
    height: 50px;
    margin: 0 auto;
`;

const Slats = styled.div`
    border-top: 2px solid #26345C;
    border-left: 5px solid #26345C;
    border-right: 5px solid #26345C;
    background-color: #33426E;
    height: 5px;
    margin: 2px;
`;

export default function Airvent() {
  return (
    <Vent>
      <Slats />
      <Slats />
      <Slats />
      <Slats />
    </Vent>
  );
}
