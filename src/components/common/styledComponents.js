import styled, { keyframes } from 'styled-components';

export const pulse = keyframes`
  0%   { opacity:0; }
  30%  { opacity:1; }
  70%  { opacity:0; }
  100% { opacity:0; }
`;

export const Highlight = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  position: absolute;
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};

  z-index: 1;
  cursor: pointer;
  border: 3px solid rgba(150,255,255,0.8);
  box-sizing: border-box; 
  border-radius: 8px;
  box-shadow:
        0 0 5px 2px #0FF;
  /* opacity: 0; */
  &:hover{
    animation: ${pulse} 2s infinite;
  }
`;
