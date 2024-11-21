import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import BottleRow from './BottleRow';
import GlassRow from './GlassRow';
import BarCounter from './BarCounter';

const Wrapper = styled.div`
    height: 100%;
    width: 500px;
    position: relative;
    left: 150px;
    border-left: 5px solid #212554;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #375B83;
    height: auto;
    height: calc(100% - 110px);
`;

const Bottom = styled.div`
    height: 90px;
    display: flex;
    background-color: #1D2641;
`;

const Accent = styled.div`
    background-color: ${({ fill }) => fill};
    height: 100%;
    width: 110px;
    box-shadow:
        inset 0 0 10px 5px #FFFFFF,
        inset 0 0 50px 2px #AA94D6;
    display: flex;
    flex-direction: column;
`;

const BarDoor = styled.div`
    margin-top: 5px;
    background-color: #191446;
    height: 40px;
    width: 50px;
`;

export default function Bar() {
  const accentRef = useRef();
  const [rowCount, setRowCount] = useState();

  useEffect(() => {
    setRowCount(Math.floor(accentRef.current.clientHeight) / 50);
  }, []);

  const renderRows = () => {
    const list = [];
    for (let i = 2; i <= rowCount; i += 1) {
      list.push(<BottleRow />);
    }
    return list;
  };

  return (
    <Wrapper>
      <Top>
        <Accent ref={accentRef} fill="#51FFCB">
          {renderRows()}
          <GlassRow type="Stein" />
        </Accent>
        <Accent fill="#51DCFF">
          {renderRows()}
          <GlassRow type="Wine" />
        </Accent>
        <Accent fill="#51A5FF">
          {renderRows()}
          <GlassRow type="Champagne" />
        </Accent>
        <Accent fill="#6351FF">
          {renderRows()}
          <GlassRow type="LowBall" />
        </Accent>
      </Top>
      <Bottom>
        <div style={{ display: 'flex' }}>
          <BarDoor style={{ borderRight: '3px solid #465A93', marginRight: 5 }} />
          <BarDoor />
        </div>
        <BarCounter />
      </Bottom>
    </Wrapper>
  );
}
