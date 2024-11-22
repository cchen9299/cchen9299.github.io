import React from 'react';
import styled from 'styled-components';
import {
  ParallaxLayer,
  Screen,
  Antenna,
  Fog,
} from '../styledComponents';
import Tower from '../../common/Tower';

export const FarBox = styled.div`
  height: 200vh;
  width: 100vw;
  position: relative;
  background: linear-gradient(180deg, #0C1E37 10%, #386099 100%);

  -webkit-transform: translateZ(-500px) scale(2.7);
  transform: translateZ(-500px) scale(2.7);
`;

export default function ForthLayer() {
  return (
    <ParallaxLayer>
      <FarBox>
        <div>
          <Tower height={140} width={22} right={80}>
            <Screen baseColor="#F0F" />
          </Tower>
          <Tower height={170} width={12} right={70} />
          <Tower height={110} width={12} right={58}>
            <Screen
              baseColor="#F0F"
              style={{
                marginTop: '10px', marginLeft: '40%', width: '50%', height: '2%',
              }}
            />
          </Tower>
          <Tower height={120} width={7} right={50}>
            <Antenna height={150} left={55} />
            <Antenna height={75} left={45} />
          </Tower>
          <Tower height={80} width={4} right={45} />
          <Tower height={105} width={5} right={37} />
          <Tower height={120} width={13} right={25}>
            <Antenna height={75} left={45} color="#56DDED" />
            <Antenna height={400} left={50} />
            <Antenna height={200} left={55} />
            <Screen baseColor="#FF0" style={{ height: '2%' }} />
          </Tower>
          <Tower height={135} width={7} right={19} />
          <Tower height={95} width={5} right={13} />
          <Tower height={85} width={9} right={3}>
            <Antenna height={175} left={70} color="#522DCB" width={5} />
            <Screen
              baseColor="#0FF"
              style={{ height: '5px' }}
            />
            <Screen baseColor="#0FF" style={{ margin: '10px', marginRight: '15px', height: '4%' }} />
            <Screen
              baseColor="#F0F"
              style={{ marginLeft: '15px', marginRight: '5px', height: '2%' }}
            />
          </Tower>
        </div>
        <Fog />
      </FarBox>
    </ParallaxLayer>
  );
}
