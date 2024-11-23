import React from 'react';
import styled from 'styled-components';
import useStore from '../../Store';
import Toggle from '../common/Toggle';

const Wrapper = styled.div`
  height: 100%;
  padding: 10px;
  p {
    margin-top: 10px;
    color: rgb(175, 232, 255);
  }

  h3 {
    margin-top: 20px;
    color: rgb(32, 117, 214);
    &:first-of-type{
        margin-top: 0;
    }
  }

  h5 {
    color: rgb(175, 232, 255);
    font-size: 14px;
  }
`;

export default function Settings() {
  const { isImmersive, setIsImmersive } = useStore();

  return (
    <Wrapper>
      <h3>Theme</h3>
      <div style={{ display: 'flex' }}>
        <p>
          [Work in Progress]
          <br />
          Dark or light theme. Changes scene night vs day cycle as well.
        </p>
      </div>
      <h3>Immersive Mode</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <p>
          Disabling this mode allows for free scrolling and removes
          cinematic crop around the window.
        </p>
        <Toggle isActive={isImmersive} onClick={() => { setIsImmersive((prev) => !prev); }} />
      </div>
    </Wrapper>
  );
}
