import React from 'react';
import styled from 'styled-components';
import { Screen } from '../styledComponents';
import Tower from '../../common/Tower';

export const FarBox = styled.div`
  height: 215vh;
  width: 100vw;
  position: relative;
  bottom:0;

  -webkit-transform: translateZ(-300px) scale(2.4);
  transform: translateZ(-300px) scale(2.4);
`;

export default function TowerGroup() {
  return (
    <div>
      <Tower height={110} width={22} right={80}>
        <Screen
          baseColor="#F0F"
          style={{
            marginTop: '10%', marginLeft: '50%', bottom: '10%', width: '40%', height: '50%', position: 'absolute',
          }}
        />
      </Tower>
      <Tower height={100} width={10} right={62}>
        <Screen
          baseColor="#0FF"
          style={{
            marginTop: '10%', marginLeft: '10%', width: '80%', height: '80%', position: 'absolute',
          }}
        />
      </Tower>
      <Tower height={80} width={10} right={65} />
      <Tower height={110} width={10} right={52}>
        <Screen
          baseColor="#FF0"
          style={{
            top: '25%', marginLeft: '10%', width: '80%', height: '70%', position: 'absolute',
          }}
        />
      </Tower>
      <Tower height={80} width={3} right={49} />
      <Tower height={80} width={10} right={40}>
        <Screen
          baseColor="#FF0"
          style={{
            marginTop: '50%', marginLeft: '10%', width: '80%', height: '5%',
          }}
        />
      </Tower>
      <Tower height={80} width={8} right={32}>
        <Screen
          baseColor="#EDFEF7"
          shadowColor="#56DDED"
          style={{ height: '2%' }}
        />
      </Tower>
      <Tower height={60} width={10} right={26} short={true}>
        <Screen
          baseColor="#F0F"
          style={{
            height: '30%', left: '50%', width: '40%', position: 'absolute', bottom: '5%',
          }}
        />
      </Tower>
      <Tower height={50} width={13} right={9} short={true}>
        <Screen
          baseColor="#F0F"
          style={{ height: '2%' }}
        />
      </Tower>
      <Tower height={30} width={15} right={15} short={true} />
    </div>
  );
}
