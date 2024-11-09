import React from 'react';
import styled from 'styled-components';
import { ParallaxLayer } from '../../styledComponents';
import Tower from '../common/Tower';

export const FarBox = styled.div`
  height: 215vh;
  width: 100vw;
  position: relative;
  top: 100vh;

  -webkit-transform: translateZ(-100px) scale(1.4);
  transform: translateZ(-100px) scale(1.4);
`;

// export const CloseBox = styled(FarBox)`
//   position: absolute;
//   top: 380vh;
//   overflow: hidden;
//   height: 20vh;
//   width: 100vw;

//   -webkit-transform: translateZ(-300px) scaleX(2.4) scaleY(-2.4);
//   transform: translateZ(-300px) scaleX(2.4) scaleY(-2.4);
// `;

export default function SecondLayer() {
  return (
    <ParallaxLayer>
      <FarBox>
        <Tower height={80} width={40} right={80} />
        <Tower height={50} width={40} right={60} />
        <Tower height={50} width={40} right={40} />
        <Tower height={50} width={40} right={20} />
        <Tower height={50} width={40} right={0} />
      </FarBox>
    </ParallaxLayer>
  );
}
