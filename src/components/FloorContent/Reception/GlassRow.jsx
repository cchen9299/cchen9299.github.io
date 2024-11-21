import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 60px;
`;

const GlassA = styled.div`
    position: relative;
    top: 15px;
    width: 6px;
    height: 20px;
    border: 1px solid white;
    border-radius: 100% 100% 0 0;
    border-bottom: none;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 10px 0px rgba(255,255,255, 0.7);

    &::before {
        content: '';
        position: absolute;
        top: -11px;
        left: 2.5px;
        height: 10px;
        width: 1px;

        background-color: rgba(255,255,255);
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }

    &::after {
        content: '';
        position: absolute;
        top: -11px;
        left: -1px;
        width: 6px;
        border: 1px solid white;
        border-radius: 0 0 100px 100px;
        border-bottom: none;

        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }
`;

const GlassB = styled.div`
    position: relative;
    top: 15px;
    width: 16px;
    height: 18px;
    border: 1px solid white;
    border-radius: 100% 100% 70% 70%;
    border-bottom: none;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 10px 0px rgba(255,255,255, 0.7);

    &::before {
        content: '';
        position: absolute;
        top: -11px;
        left: 7px;
        height: 10px;
        width: 2px;

        background-color: rgba(255,255,255);
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }

    &::after {
        content: '';
        position: absolute;
        top: -11px;
        left: 2px;
        width: 11px;
        border: 1px solid white;
        border-radius: 0 0 100px 100px;
        border-bottom: none;

        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }
`;

const GlassC = styled.div`
    position: relative;
    width: 14px;
    height: 22px;
    border: 1px solid white;
    border-bottom: 3px solid white;
    border-radius: 0 0 20% 20%;
    border-top: none;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 10px 0px rgba(255,255,255, 0.7);

    &::after {
        content: '';
        position: absolute;
        top: 2px;
        width: 4px;
        height: 12px;
        border: 2px solid white;
        border-radius: 0 5px 5px 0;
        border-left: none;
        right: -7px;
    }
`;

const GlassD = styled.div`
    width: 10px;
    height: 8px;
    border: 1px solid white;
    border-bottom: 3px solid white;
    border-top: none;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 10px 0px rgba(255,255,255, 0.7);
`;

const GlassContainer = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-around;
`;

const glassMap = {
  Champagne: GlassA,
  Wine: GlassB,
  Stein: GlassC,
  LowBall: GlassD,
};

const glassContainerMap = {
  Champagne: { },
  Wine: {},
  Stein: { alignItems: 'flex-end' },
  LowBall: { alignItems: 'flex-end' },
};

export default function GlassRow({ type }) {
  const Glass = glassMap[type];
  const style = glassContainerMap[type];
  return (
    <Wrapper>
      <GlassContainer style={{ ...style }}>
        <Glass />
        <Glass />
        <Glass />
        <Glass />
      </GlassContainer>
    </Wrapper>
  );
}

GlassRow.propTypes = {
  type: string,
};

GlassRow.defaultProps = {
  type: 'Stein',
};
