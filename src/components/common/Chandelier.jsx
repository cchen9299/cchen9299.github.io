import React from 'react';
import styled from 'styled-components';
import { useFloorRandom } from '../../hooks';

const LightsNode = styled.div`
    height: ${() => `${useFloorRandom(useFloorRandom(8) + 50) + 10}%`};
    width: 3px;
    background-color: #FFF;
    margin-top: ${() => `${useFloorRandom(useFloorRandom(10) + 50)}px`};

    box-shadow:
      0 0 15px 1px #FF0,
      0 0 300px 0px #FF0;
`;

const Wrapper = styled.div`
    width: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default function Chandelier() {
  return (
    <Wrapper>
      <LightsNode />
      <LightsNode />
      <LightsNode />
      <LightsNode />
      <LightsNode />
      <LightsNode />
      <LightsNode />
    </Wrapper>
  );
}
