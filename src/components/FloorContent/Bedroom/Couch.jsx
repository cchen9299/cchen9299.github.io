import React from 'react';
import styled from 'styled-components';
import { Highlight } from '../../common/styledComponents';

const LeftTop = styled.div`
    width: 135px;
    height: 45px;
    border-radius: 10px;
    background-color: #252154;
    border-bottom: 5px solid #191446;
    position: relative;
    top: 4px;
`;

const TopBoard = styled.div`
    position: absolute;
    top:0;
    right:0;
    width: 20px;
    height: calc(100% + 5px);
    background-color: #2B275D;
    border-radius: 10px;
`;

const LeftBottom = styled.div`
    width: 180px;
    height: 15px;
    border-radius: 10px;
    background-color: #252154;
    position: relative;
    border-bottom: 5px solid #191446;
`;

const RightTop = styled.div`
    width: 285px;
    height: 45px;
    border-radius: 10px;
    background-color: #41416F;
    border-bottom: 5px solid #191446;
    position: relative;
    top: 4px;
    
`;
const RightBottom = styled.div`
    width: 330px;
    height: 15px;
    border-radius: 10px;
    background-color: #41416F;
    position: relative;
    border-bottom: 5px solid #191446;
`;

const Wrapper = styled.div`
    position: absolute;
    bottom: 15px;
    right: 15%;
    width: 280px;
    height: 70px;
    z-index: 1000;
`;

const RightContainer = styled.div`
    display: flex;
    position: absolute;
    width: 235px;
    height: 100%;
    bottom: 0;
    flex-direction: column;
`;

const Glow = styled.div`
    width: 330px;
    height: 3%;
    background-color: #FFF;
    box-shadow:
        0 0 10px 0px #0FF,
        0 0 50px 2px #0FF;
    position: relative;
    z-index: 1002;
`;

export default function Couch() {
  return (
    <Wrapper>
      <RightContainer>
        <RightTop />
        <RightBottom />
      </RightContainer>
      <LeftTop>
        <TopBoard />
      </LeftTop>
      <LeftBottom />
      <Glow />
      <Highlight height="85px" width="350px" bottom="-10px" left="-10px" />
    </Wrapper>
  );
}
