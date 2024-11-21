import React from 'react';
import styled from 'styled-components';

const Tread = styled.div`
    width: 100px;
    height: 8px;
    background-color: #5F90B8;
    border-left: solid #131D41 30px;
    margin-top: 12px;
    margin-left: ${({ count }) => count * 30}px;
`;

const Wrapper = styled.div`
    height: 100%;
    position: absolute;
    z-index: -1;
    left: 30%;
`;

const getTreadMap = (treadCount) => {
  const treadMap = [];
  for (let i = 0; i <= treadCount; i += 1) {
    treadMap.push(<Tread count={i} />);
  }
  return treadMap;
};

export default function Stairs() {
  const bottomHeight = document.querySelector('#bedroom-bottom')?.clientHeight || 0;
  const treadCount = Math.floor(bottomHeight / 20);

  return (
    <Wrapper>
      {getTreadMap(treadCount).map((TreadNode) => TreadNode)}
    </Wrapper>
  );
}
