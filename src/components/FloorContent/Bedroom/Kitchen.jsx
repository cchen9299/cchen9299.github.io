import React from 'react';
import styled from 'styled-components';
import Island from './Island';
import Chandelier from '../../common/Chandelier';

const UpperCabinet = styled.div`
    background-color: #465A93;
    width: 90px;
    height: 100%;
    border-left: 2px solid #303F6A;
    border-bottom: 2px solid #303F6A;
    z-index: 100;
`;

const UpperContainer = styled.div`
    display:flex;
    height: calc(100% - 190px);
    width: 100%;
`;

const LowerContainer = styled.div`
    background-color: #1C344E;
    height: 190px;
    width: 368px;
    display: flex;
    justify-content: space-between;
`;

const LeftCabinet = styled.div`
    height: 100%;
    min-width: 90px;
    background-color: #465A93;
    border-left: 2px solid #303F6A;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    z-index: 90;
`;

const ApplianceContainer = styled.div`
`;

const Appliance = styled.div`
    background-color: #303F6A;
    border-left: 2px solid #212940;
    height: 45px;
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

const ApplianceGlass = styled.div`
    background-color: #212940;
    height: 30px;
    width: 60px;
`;

const FridgeContainer = styled.div`
    height: 100%;
    display: flex;
`;

const FridgeLeft = styled.div`
    background-color: #212940;
    height: 100%;
    width: 35px;
    border-right: 2px solid #303F6A;
`;

const FridgeDoor = styled.div`
    background-color: #303F6A;
    height: 60px;
    width: 60px;
    border-left: 8px solid #212940;
    border-bottom: 2px solid #212940;
`;

const Glow = styled.div`
    width: 100%;
    height: 2%;
    background-color: #FFF;
    box-shadow:
        0 0 40px 2px #FFF,
        0 0 100px 10px #FFF,
        0 0 40px 2px #F0F,
        0 0 100px 10px #F0F;
    z-index: 50;
`;

const Wrapper = styled.div`
    width: 400px;
    height: 100%;
    position: relative;
    left: 150px;
    border-left: 4px solid #1D2641;
    display: flex;
`;

const Wall = styled.div`
  height: 100%;
  width: 45px;
  background-color: #142538;
  border-right: 8px solid #375B83;
  z-index: -1;
`;

const ChandelierContainer = styled.div`
  position: absolute;
  bottom: 120px;
  left: 60%;

  height: 50%;
  width: 100px;
  z-index: 100;
`;

export default function Kitchen() {
  return (
    <Wrapper>
      <div style={{ height: '100%' }}>
        <UpperContainer>
          <UpperCabinet />
          <UpperCabinet />
          <UpperCabinet />
          <UpperCabinet />
          <ChandelierContainer>
            <Chandelier />
          </ChandelierContainer>
        </UpperContainer>
        <LowerContainer>
          <LeftCabinet>
            <ApplianceContainer>
              <Appliance>
                <ApplianceGlass />
              </Appliance>
              <Appliance>
                <ApplianceGlass />
              </Appliance>
            </ApplianceContainer>
          </LeftCabinet>
          <Glow />
          <FridgeContainer>
            <FridgeLeft />
            <div>
              <FridgeDoor />
              <FridgeDoor />
            </div>
          </FridgeContainer>
          <Island />
        </LowerContainer>
      </div>
      <Wall />
    </Wrapper>
  );
}
