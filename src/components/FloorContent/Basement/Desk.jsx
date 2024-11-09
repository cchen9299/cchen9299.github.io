import React from 'react';
import styled from 'styled-components';
import { useFloorRandom } from '../../../hooks';
import { GLASS_B } from '../../../hooks/constants';

const Wraaapper = styled.div`
    position: absolute;
    bottom:0;
    right:30vw;
    display: flex;
    align-items:center;
    justify-content:center;
`;

const Wrapper = styled.div`
`;

const TopWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Computer = styled.div`
  right: 10px;
  width: 70px;
  height: 60px;
  background-color: #3C5394;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const ComputerLights = styled.div`
    height: 2px;
    width: ${() => `${useFloorRandom(useFloorRandom(3) + 30) + 10}%`};
    background-color: #56DDED;
    position: relative;
    margin-left: ${() => `${useFloorRandom(20) + 10}%`};
    margin-top: 4px;

    box-shadow:
      0 0 20px 2px #56DDED,
      0 0 20px 0px #56DDED;
`;

const ComputerGlass = styled.div`
    position: absolute;
    width: 55px;
    height: 50px;
    background: ${GLASS_B};
`;

const ComputerBottom = styled.div`
    width: 55px;
    height: 12px;
    background-color: #516CB9;
`;

const DeskTop = styled.div`
    width: 250px;
    height: 7px;
    background-color: #3A476C;

    border-bottom: 3px solid #56DDED;
    box-shadow:
      0 0 50px 2px #56DDED,
      0 0 50px 0px #56DDED;
`;

const Legs = styled.div`
    width: 10px;
    height: 70px;
    background-color: #1C2A52;
`;

const Monitor = styled.div`
  height: 80px;
  width: 100%;
  max-width: 60%;
  background-color: rgba(0,102,255,0.5);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  margin: 10px 5px 0;

  box-shadow:
    inset 0 0 20px 5px #F0F,
    0 0 5px 2px #FFF,
    0 0 5px 2px #F0F,
    0 0 50px 5px #F0F;
`;

const MonitorGroup = styled.div`
  width: 100%;
  position: absolute;
  bottom: 100px;
  z-index: 1;;
`;

export default function Desk() {
  return (
    <Wraaapper>
      <Wrapper>
        <TopWrapper>
          <MonitorGroup>
            <div style={{ margin: '10px 20px 0', display: 'flex' }}>
              <Monitor />
              <Monitor />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Monitor />
            </div>
          </MonitorGroup>
          <Computer>
            <ComputerLights />
            <ComputerLights />
            <ComputerLights />
            <ComputerLights />
            <ComputerBottom />
            <ComputerGlass />
          </Computer>
        </TopWrapper>
        <DeskTop />
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 10px' }}>
          <Legs />
          <Legs />
        </div>
      </Wrapper>
      <ChairGroup>
        <ChairTop />
        <div style={{ display: 'flex' }}>
          <ChairArm />
          <ChairBody />
          <ChairArm />
        </div>
        <ChairSeat />
        <ChairLeg />
        <ChairWheelGroup>
          <ChairWheel />
          <ChairWheel />
          <ChairWheel />
          <ChairWheel />
          <ChairWheel />
        </ChairWheelGroup>
      </ChairGroup>
    </Wraaapper>
  );
}

const ChairGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  height: 100%;
`;

const ChairTop = styled.div`
  width: 25px;
  height: 20px;
  background-color: #3A476C;
  border-radius: 7px;
  border-bottom: 3px solid #1C2A52;
  border-top: 3px solid #425179;
`;

const ChairBody = styled.div`
  width: 50px;
  height: 60px;
  background-color: #3A476C;
  border-radius: 10px;
  border-top: 5px solid #425179;
  border-bottom: 5px solid #1C2A52;
`;

const ChairArm = styled.div`
  width: 15px;
  height: 1px;
  border-radius: 100px;
  background-color: #3A476C;
  position: relative;
  top: 30%;

  border-top: 5px solid #425179;
  border-bottom: 3px solid #1C2A52;
`;

const ChairSeat = styled.div`
  width: 60px;
  height: 10px;
  background-color: #3A476C;
  border-radius: 5px;

  /* position: relative;
  top: -10px; */
  z-index: -1;

  border-top: 5px solid #425179;
  border-bottom: 5px solid #1C2A52;
`;

const ChairLeg = styled.div`
  width: 7px;
  height: 10px;
  background-color: #3A476C;
`;

const ChairWheelGroup = styled.div`
  display:flex;
  justify-content: space-between;
  border-top: 5px solid #3A476C;
  width: 50px;
`;

const ChairWheel = styled.div`
  width: 5px;
  height: 5px;
  background-color: #1C2A52;
`;
