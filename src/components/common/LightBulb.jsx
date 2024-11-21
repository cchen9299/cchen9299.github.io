import { shape } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const LightsNode = styled.div`
    height: 70%;
    width: 2px;
    background-color: #FFE5CB;
    &:first-child{
        margin-right: 5px;
    }

    box-shadow:
      0 0 5px 1px #ED9C56,
      0 0 30px 5px #FF0;
`;

const Wrapper = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Globe = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    border: 1px solid white;
    border-radius: 100%;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 20px 0px rgba(255,255,255),
      0 0 20px 5px rgba(255,255,255,0.5);
`;

export default function LightBulb({ style }) {
  return (
    <Wrapper style={{ ...style }}>
      <LightsNode />
      <LightsNode />
      <Globe />
    </Wrapper>
  );
}

LightBulb.propTypes = {
  style: shape({}),
};

LightBulb.defaultProps = {
  style: {},
};
