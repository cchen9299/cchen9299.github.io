import React from 'react';
import styled from 'styled-components';
import Shelf from './Shelf';
import { GLASS, GLASS_B } from '../../../hooks/constants';

const Stack = styled.div`
    position: relative;
    bottom:0;
    z-index:10000;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 10px solid transparent;
`;

const Glass = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${GLASS_B};
    border: 10px solid #1C2A52;
`;

export default function Server() {
  return (
    <Stack>
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Glass />
    </Stack>
  );
}
