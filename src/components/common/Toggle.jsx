import { bool, func } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: rgb(175, 232, 255);
    height: 40px;
    width: 70px;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LabelContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const Switch = styled.div`
    height: 5px;
    width: 50px;
    border: 2px solid rgb(32, 117, 214);
    background-color: ${({ isActive }) => (isActive ? 'rgba(0, 217, 255, 0.991)' : 'rgba(0, 64, 142, 0.7)')};
`;

const Thumb = styled.div`
    height: 20px;
    width: 20px;
    position: absolute;
    background-color: rgb(32, 117, 214);
    right: ${({ isActive }) => (isActive ? 0 : '')};
    left: ${({ isActive }) => (!isActive ? 0 : '')};
    top: -5px;
`;

export default function Toggle({ isActive, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <div style={{ position: 'relative' }}>
        <Thumb isActive={isActive} />
        <Switch isActive={isActive} />
      </div>
      <LabelContainer>
        <h6>off</h6>
        <h6>on</h6>
      </LabelContainer>
    </Wrapper>
  );
}

Toggle.propTypes = {
  isActive: bool.isRequired,
  onClick: func.isRequired,
};
