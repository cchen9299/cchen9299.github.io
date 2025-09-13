import { shape, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ActionKeyWrapper = styled.p`
    width: 35px;
    height: 35px;
    mix-blend-mode: screen;
    border-radius: 5px;
    background-color: rgb(183, 208, 236);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 21px;
    color: black;
`;

const TextWrapper = styled.p`
    margin-left: 10px;
    color: rgb(175, 232, 255);
`;

const Wrapper = styled.div`
    height: 50px;
    min-width: 200px;
    position: absolute;
    bottom: 180px;
    border: 2px solid rgb(32, 117, 214);
    padding: 2px 10px;
    background-color: rgba(0, 64, 142, 0.9);
    display: flex;
    z-index: 200;
    align-items: center;
`;

export default function TooltipButton({
  actionKey, text, style, ...rest
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading -- DOM default props
    <Wrapper style={{ ...style }} {...rest}>
      <ActionKeyWrapper>
        {actionKey}
      </ActionKeyWrapper>
      <TextWrapper style={{ marginLeft: 10 }}>
        {text}
      </TextWrapper>
    </Wrapper>
  );
}

TooltipButton.propTypes = {
  text: string.isRequired,
  actionKey: string.isRequired,
  style: shape({}),
  rest: shape({}),
};
