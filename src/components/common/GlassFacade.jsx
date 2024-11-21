import React from 'react';
import styled from 'styled-components';
import { GLASS_B } from '../../hooks/constants';

const Glass = styled.div`
    width: 100%;
    height: 100%;
    background: ${GLASS_B};
`;

const GlassColumn = styled.div`
    width: 20%;
    height: calc(50% - 10px);
`;

const VerticalMullion = styled.div`
    border-right: 3px solid #5F90B8;
    &:last-of-type {
        border-right: none;
    }
    background-color: #1C2A52;
    width: 15px;
    height: 100%;
`;

const HorizontalMullion = styled.div`
    border-top: 3px solid #5F90B8;
    &:first-of-type {
        border-top: none;
    }
    &:last-of-type {
        border-top: none;
    }
    background-color: #1C2A52;
    width: 100%;
    height: 15px;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-top: 10px solid #1C2A52;
    border-bottom: 10px solid #1C2A52;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: -1;
`;

export default function GlassFacade() {
  return (
    <Wrapper>
      <HorizontalMullion />
      <Container>
        <GlassColumn>
          <Glass />
          <HorizontalMullion />
          <Glass />
        </GlassColumn>
        <VerticalMullion />
        <GlassColumn>
          <Glass />
          <HorizontalMullion />
          <Glass />
        </GlassColumn>
        <VerticalMullion />
        <GlassColumn>
          <Glass />
          <HorizontalMullion />
          <Glass />
        </GlassColumn>
        <VerticalMullion />
        <GlassColumn>
          <Glass />
          <HorizontalMullion />
          <Glass />
        </GlassColumn>
        <VerticalMullion />
        <GlassColumn>
          <Glass />
          <HorizontalMullion />
          <Glass />
        </GlassColumn>
        <VerticalMullion />
        <GlassColumn>
          <Glass />
          <HorizontalMullion />
          <Glass />
        </GlassColumn>
        <VerticalMullion />
        <GlassColumn>
          <Glass />
          <HorizontalMullion />
          <Glass />
        </GlassColumn>
        <VerticalMullion />
      </Container>
      <HorizontalMullion />
    </Wrapper>
  );
}
