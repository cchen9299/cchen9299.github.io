import styled from 'styled-components';
import { useFloorRandom } from './hooks';

export const ParallaxLayer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: 100%;

  -webkit-transform-style: preserve-3d; 
  transform-style: preserve-3d;

  -webkit-transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
`;

export const MidBox = styled.div`
  background-color: rgba(255,0,0,1);
  height: 200px;
  min-width: 18%;
  margin: 1%;
  position: relative;
  box-sizing: border-box;
`;

export const FarBox = styled.div`
  background-color: rgba(0,255,0,1);
  height: 200px;
  min-width: 18%;
  margin: 1%;
  position: relative;
  box-sizing: border-box;

  -webkit-transform: translateZ(-300px) scale(2);
  transform: translateZ(-300px) scale(2);
`;

export const CloseBox = styled.div`
  background-color: rgba(0,0,255,1);
  height: 200px;
  min-width: 20%;
  margin: 7%;
  position: relative;
  box-sizing: border-box;

  -webkit-transform: translateZ(70px) scale(1.5);
  transform: translateZ(70px) scale(1.5);
`;

export const FloatingButton = styled.button`
  padding: 20px 10px;
  background-color: orange;
  z-index: 1000;
  position: absolute;
  border: none
`;

export const Screen = styled.div`
    width: 100%;
    height: 4%;
    background-color: ${({ baseColor }) => baseColor};
    box-shadow:
        0 0 40px 0px ${({ baseColor, shadowColor }) => shadowColor || baseColor},
        0 0 150px 0px ${({ baseColor, shadowColor }) => shadowColor || baseColor};
`;

export const TowerNode = styled.div`
    height: ${({ height }) => height}vh;
    width: ${({ width }) => width}vh;
    right: ${({ right }) => right}%;
    background: linear-gradient(180deg, #0C1E37 20%, #386099 100%);
    border-right: 5px solid #426B9F;
    
    position: absolute;
    bottom: 0%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const LightsShortNode = styled.div`
    height: ${() => `${useFloorRandom(useFloorRandom(4) + 1 * 100)}px`};
    width: 5px;
    background-color: ${() => 'rgba(214,209,232,1)'};
    margin-top: ${() => `${useFloorRandom(useFloorRandom(4) + 1 * 100)}%`};
    margin-left: ${() => `${useFloorRandom(10) + 5}`}%;
    margin-right: ${() => `${useFloorRandom(10) + 5}`}%;

    box-shadow:
      0 0 15px 1px #56DDED,
      0 0 300px 0px #56DDED;
`;

export const LightsNode = styled.div`
    height: ${() => `${useFloorRandom(useFloorRandom(4) + 1 * 400)}px`};
    width: 5px;
    background-color: ${() => 'rgba(214,209,232,1)'};
    margin-top: ${() => `${useFloorRandom(useFloorRandom(4) + 1 * 400)}%`};
    margin-left: ${() => `${useFloorRandom(10) + 5}`}%;
    margin-right: ${() => `${useFloorRandom(10) + 5}`}%;

    box-shadow:
      0 0 15px 1px #56DDED,
      0 0 300px 0px #56DDED;
`;

export const Antenna = styled.div`
    width: ${({ width = 3 }) => width}px;
    top: ${({ height }) => -height}px;
    left: ${({ left }) => left}%;
    height: ${({ height }) => height}px;
    position: absolute;
    
    box-shadow:
        0 0 15px 1px ${({ color = '#56DDED' }) => color};
    background-color: #D6D1E8;
`;

export const Fog = styled.div`
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;

    background: linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(255,255,255,0.3) 100%);
`;
