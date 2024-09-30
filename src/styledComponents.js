import styled from 'styled-components';

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
