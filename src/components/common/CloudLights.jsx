import React from 'react';
import styled from 'styled-components';
import { shape } from 'prop-types';
import LightBulb from './LightBulb';

const Wrapper = styled.div`
    display: flex;
    position: relative;
    width: 117px;
`;

export default function CloudLights({ style }) {
  return (
    <Wrapper style={{ ...style }}>
      <LightBulb style={{ transform: 'scale(0.6)', left: 0 }} />
      <LightBulb style={{ transform: 'scale(0.8)', left: 20, top: -15 }} />
      <LightBulb style={{ left: 30, top: 10 }} />
      <LightBulb style={{ transform: 'scale(0.6)', left: 53, top: -15 }} />
      <LightBulb style={{ transform: 'scale(0.8)', left: 60, top: 2 }} />
      <LightBulb style={{ transform: 'scale(0.6)', left: 82, top: 15 }} />
      <LightBulb style={{ transform: 'scale(0.8)', left: 85, top: -10 }} />
      <LightBulb style={{ transform: 'scale(0.6)', left: 108, top: -5 }} />
    </Wrapper>
  );
}

CloudLights.propTypes = {
  style: shape({}),
};

CloudLights.defaultProps = {
  style: {},
};
