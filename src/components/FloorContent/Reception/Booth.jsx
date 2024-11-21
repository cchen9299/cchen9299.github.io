import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TopBoard = styled.div`
    position: absolute;
    top:0;
    right:0;
    height: calc(100% + 5px);
    border-radius: 10px;
    background-color: ${({ color }) => color};
    width: ${({ width = 20 }) => width}px;
`;

const LeftTop = styled.div`
    width: 135px;
    height: 45px;
    border-radius: 10px;
    background-color: #252154;
    border-bottom: 5px solid #191446;
    position: relative;
    top: 4px;
`;

const LeftBottom = styled.div`
    width: 180px;
    height: 15px;
    border-radius: 10px;
    background-color: #252154;
    position: relative;
    border-bottom: 5px solid #191446;
`;

const LeftContainer = styled.div`
    display: flex;
    width: 235px;
    height: 100%;
    flex-direction: column;
`;

const RightTop = styled.div`
    width: 135px;
    height: 45px;
    border-radius: 10px;
    background-color: #2B275D;
    border-bottom: 5px solid #191446;
    position: relative;
    top: 4px;
`;

const RightBottom = styled.div`
    width: 180px;
    height: 15px;
    border-radius: 10px;
    background-color: #2B275D;
    position: relative;
    border-bottom: 5px solid #191446;
`;

const RightContainer = styled.div`
    display: flex;
    position: absolute;
    width: 235px;
    height: 100%;
    bottom: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-end;
`;

const Table = styled.div`
    width: 110px;
    height: 8px;
    background-color: #41416F;
    border-left: 100px solid #252154;
    position: absolute;
    top: 25px;
    left: 70px;
`;

const Glow = styled.div`
    width: 180px;
    height: 3%;
    background-color: #FFF;
    box-shadow:
        0 0 10px 0px #0FF,
        0 0 50px 2px #0FF;
    position: relative;
`;

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 340px;
    height: 70px;
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    z-index: 1000;
`;

export default function Booth({ left, right }) {
  return (
    <Wrapper left={left} right={right}>
      <RightContainer>
        <RightTop>
          <TopBoard color="#41416F" />
        </RightTop>
        <RightBottom>
          <TopBoard color="#41416F" width={65} />
        </RightBottom>
        <Glow />
      </RightContainer>
      <Table />
      <LeftContainer>
        <LeftTop>
          <TopBoard color="#2B275D" />
        </LeftTop>
        <LeftBottom>
          <TopBoard color="#2B275D" width={65} />
        </LeftBottom>
        <Glow />
      </LeftContainer>
    </Wrapper>
  );
}

Booth.propTypes = {
  left: string,
  right: string,
};

Booth.defaultProps = {
//   left: '0',
//   right: '0',
};
