import React from 'react';
import styled from 'styled-components';
import { useFloorRandom } from '../../../hooks';

const ShelfNode = styled.div`
    width: 120px;
    height: 30px;
    background-color: #101D43;

    border: 5px solid #1C2A52;
    border-bottom: 2px solid #26345C;
    display: flex;
`;

export const ServerLights = styled.div`
    height: 2px;
    width: ${() => `${useFloorRandom(useFloorRandom(3) + 50) + 10}%`};
    background-color: #56DDED;
    position: relative;
    margin-left: ${() => `${useFloorRandom(50) + 10}%`};
    top: 4px;
    margin-top:4px;

    box-shadow:
      0 0 20px 2px #56DDED,
      0 0 20px 0px #56DDED;
`;

export const ServerLightDots = styled.div`
    height: 3px;
    width: 3px;
    background-color: #56DDED;
    position: relative;
    margin-right: ${() => `${useFloorRandom(10) + 2}%`};
    top: 5px;
    margin-top:5px;

    box-shadow:
      0 0 20px 2px #56DDED,
      0 0 20px 0px #56DDED;
`;

export default function Shelf() {
  return (
    <ShelfNode>
      <div style={{ width: '100%' }}>
        <ServerLights />
        <ServerLights />
        <ServerLights />
      </div>
      <div style={{ display: 'flex', width: '100%', flexDirection: 'row-reverse' }}>
        <ServerLightDots />
        <ServerLightDots />
        <ServerLightDots />
      </div>
    </ShelfNode>
  );
}
