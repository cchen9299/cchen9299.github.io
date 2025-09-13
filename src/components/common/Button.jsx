import {
  bool, func, number, oneOfType, shape, string,
} from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.h6`
    color: rgb(175, 232, 255);
    text-transform: uppercase;
    font-weight: 400;
    font-size: 17px;
`;

const SubtextWrapper = styled.h6`
    mix-blend-mode: color-dodge;
    color: rgb(104, 166, 238);
    font-weight: 400;
    font-size: 12px;
`;

const Wrapper = styled.div`
    height: 50px;
    border: 2px solid rgb(32, 117, 214);
    background-color: ${({ isActive }) => (isActive ? 'rgba(86, 137, 200, 0.7)' : 'rgba(0, 64, 142, 0.7)')};
    &:hover{
        background-color: rgba(86, 137, 200, 0.7);
    }
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    clip-path: polygon(300px 0px, 300px 33px, 279px 54px, 0px 54px, 0px 0px);
    position: relative;
    cursor: pointer;

    &:after{
        content:'';
        width: 30px;
        height: 30px;
        position: absolute;
        right: -19px;
        bottom:-19px;
        border: 2px solid rgb(32, 117, 214);
        transform: rotate(45deg);
    }
`;

export default function Button({
  text, subtext, isActive, style, onClick, id, ...rest
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading -- default DOM props
    <Wrapper isActive={isActive} style={{ ...style }} onClick={() => { onClick(id); }} {...rest}>
      <SubtextWrapper onClick={() => { onClick(id); }}>
        {subtext}
      </SubtextWrapper>
      <TextWrapper onClick={() => { onClick(id); }}>
        {text}
      </TextWrapper>
    </Wrapper>
  );
}

Button.propTypes = {
  text: string.isRequired,
  id: oneOfType([string, number]).isRequired,
  onClick: func.isRequired,
  subtext: string,
  isActive: bool,
  style: shape({}),
};

Button.defaultProps = {
  subtext: '',
  isActive: false,
  style: {},
};
