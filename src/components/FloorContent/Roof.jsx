import React from 'react';
import styled from 'styled-components';
import { GLASS } from '../../hooks/constants';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Railing = styled.div`
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: 80px;
    background-color: #101D43;
    border-top: $101D43;
`;

const Glass = styled.div`
    min-width: 50px;
    flex: 1;
    margin-left: 3px;
    height: 80px;
    background: ${GLASS}
`;

// const UpperFloor = styled.div`
//   position:relative;
//   height: calc(${CINEMATIC_COVER_HEIGHT} * 2 + 60px);
//   background-color: #101D43;
//   z-index: 1000;
// `;

export default function Roof() {
  const amount = new Array(12);
  const arr = [...amount.keys()];
  return (
    <Wrapper style={{ }}>
      <Railing />
      <div style={{
        display: 'flex',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
      }}
      >
        {arr.map((key) => <Glass key={`floor${key}`} />)}
      </div>
      {/* <LowerFloor /> */}
    </Wrapper>
  );
}
