import React from 'react';
import styled from 'styled-components';
import { GLASS } from '../../../hooks/constants';
import IndoorLight from '../../common/IndoorLight';

const Wrapper = styled.div`
    flex-grow: 1;
    min-height: calc(20% - 30px);
    min-width: 15%;
    position: relative;
`;

const LightWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items:center;
  justify-content:center;
  z-index: 10000;
`;

const Panel = styled.div`
    position: relative;
    background-color: #26345C;
    border-top: 5px solid #33426E;
    border-right: 5px solid #33426E;
    border-bottom: 5px solid #1C2A52;
    border-left: 5px solid #1C2A52;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
`;

const Window = styled.div`
    position: relative;
    height: calc(100% - 30px);
    width: calc(100% - 30px);
    top: calc(-100% + 35px);
    left: 15px;

    box-sizing: border-box;
    background: ${GLASS};
    box-shadow: ${({ glow }) => glow};
`;

const WindowFrame = styled.div`
    border: 15px solid #26345C;
    position: relative;
    box-sizing: border-box;
    margin: -10px;
    height: 100%;
    width: 100%;
    top: 10px;
    left: 10px;
`;

export default function FramedWindow({
  count,
  glow,
  replacedIndex = [],
  lightsIndex = [],
}) {
  const amount = new Array(count);
  const arr = [...amount.keys()];

  return arr.map((_, i) => {
    const hasSub = replacedIndex.includes(i);
    const hasLights = lightsIndex.includes(i);
    const Node = hasSub ? Window : Panel;
    return (
      <Wrapper key={`panel-${i}`}>
        {hasLights
        && (
        <LightWrapper>
          <IndoorLight />
        </LightWrapper>
        )}
        {hasSub && <WindowFrame />}
        <Node glow={glow[i]} style={{ zIndex: hasSub ? 1 : -1 }} />
      </Wrapper>
    );
  });
}
