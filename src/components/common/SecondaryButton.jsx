import {
  bool, func, number, oneOfType, shape, string,
} from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.h6`
    color: rgb(175, 232, 255);
    text-transform: uppercase;
    font-size: 14px;
    line-height: 27px;
`;

const Wrapper = styled.div`
    width: 100px;
    height: 28px;
    padding: 0 10px;
    border: 2px solid rgb(32, 117, 214);
    background-color: ${({ isActive }) => (isActive ? 'rgba(86, 137, 200, 0.9)' : 'rgba(0, 64, 142, 0.9)')};
    &:hover{
        background-color: rgba(86, 137, 200, 0.9);
    }
    clip-path: polygon(124px 0px, 124px 19px, 111px 32px, 0px 32px, 0px 0px);
    position: relative;
    cursor: pointer;

    &:after{
        content:'';
        width: 30px;
        height: 30px;
        position: absolute;
        right: -23px;
        bottom:-23px;
        border: 2px solid rgb(32, 117, 214);
        transform: rotate(45deg);
    }
`;

export default function SecondaryButton({
  text, subtext, isActive, style, onClick, id, ...rest
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading -- default DOM props
    <Wrapper isActive={isActive} style={{ ...style }} onClick={() => { onClick(id); }} {...rest}>
      <TextWrapper>
        {text}
      </TextWrapper>
    </Wrapper>
  );
}

SecondaryButton.propTypes = {
  text: string.isRequired,
  id: oneOfType([string, number]).isRequired,
  onClick: func.isRequired,
  subtext: string,
  isActive: bool,
  style: shape({}),
};

SecondaryButton.defaultProps = {
  subtext: '',
  isActive: false,
  style: {},
};
