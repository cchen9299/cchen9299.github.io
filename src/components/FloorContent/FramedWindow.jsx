import React from 'react';
import styled from 'styled-components';
import { GLASS } from '../../hooks/constants';

const Wrapper = styled.div`
    flex-grow: 1;
    min-height: calc(20% - 30px);
    min-width: 15%;
    position: relative;
`;

const Panel = styled.div`
    position: relative;
    background-color: #26345C;
    border-top: 5px solid #33426E;
    border-right: 5px solid #33426E;
    border-bottom: 5px solid black;
    border-left: 5px solid #101D43;
    box-sizing: border-box;
    height: 100%;
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
}) {
  const amount = new Array(count);
  const arr = [...amount.keys()];

  return arr.map((_, i) => {
    const hasSub = replacedIndex.includes(i);
    const Node = hasSub ? Window : Panel;
    return (
      <Wrapper key={`panel-${i}`}>
        {hasSub && <WindowFrame />}
        <Node glow={glow[i]} style={{ zIndex: hasSub ? 1 : -1 }} />
      </Wrapper>
    );
  });
}
