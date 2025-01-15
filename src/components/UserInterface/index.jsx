import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import styled, { keyframes } from 'styled-components';
import { CINEMATIC_COVER_HEIGHT } from '../../hooks/constants';
import SecondaryButton from '../common/SecondaryButton';
import Context from './Context';
import Settings from './Settings';
import Button from '../common/Button';
import useStore from '../../Store';

const menuOpen = (height) => keyframes`
  0% {
      width: 0%;
      height: 0px;
  }
  70% {
      width: 100%;
      height: 0;
  }
  100% {
      width: 100%;
      height: ${height};
  }
`;

const menuClose = (height) => keyframes`
  0% {
      width: 100%;
      height: ${height};
  }
  30% {
      width: 100%;
      height: 0px;
  }
  100% {
      width: 0%;
      height: 0;
  }
`;

const InterfaceContainer = styled.div`
    background-color: rgba(0, 64, 142, 0.5);
    border: 2px solid rgb(32, 117, 214);
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    /* height: ${({ isImmersive }) => `calc(96vh - (${isImmersive ? CINEMATIC_COVER_HEIGHT : '0px'} * 2) - 30px)`}; */
    position: relative;
    overflow: hidden;
    animation-name: ${({ isImmersive, direction }) => {
    const calc = `calc(96vh - (${isImmersive ? CINEMATIC_COVER_HEIGHT : '0px'} * 2) - 30px)`;
    return direction === 'normal' ? menuOpen(calc) : menuClose(calc);
  }
};
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
`;

const Wrapper = styled.div`
    @media (min-width: 1513px) {
        width: 38vw;
    }
    width: 45vw;
    position: fixed;
    right: 1vw;
    top: ${({ isImmersive }) => `calc(${isImmersive ? CINEMATIC_COVER_HEIGHT : '0px'} + 1vh)`};
`;

const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const menuList = [
  { title: 'Context', id: 'context' },
  { title: 'Settings', id: 'settings' },
];

const Placeholder = styled.div``;

const interfaceMap = {
  null: Placeholder,
  context: Context,
  settings: Settings,
};

export default function UserInterface() {
  const { isImmersive, currentLevel } = useStore();
  const [interfaceSelection, setInterfaceSelection] = useState('context');
  const [animateDirection, setAnimateDirection] = useState('normal');
  const interfaceContainerRef = useRef(null);
  const onInterfaceSelection = useCallback((id) => {
    setAnimateDirection('normal');
    setInterfaceSelection(id);
  }, [interfaceSelection]);
  const [hasPageLoaded, setHasPageLoaded] = useState(false);

  const Interface = interfaceMap[interfaceSelection];
  useEffect(() => {
    setHasPageLoaded(() => {
      if (hasPageLoaded) {
        setAnimateDirection('reverse');
        setTimeout(() => {
          setAnimateDirection('normal');
          setInterfaceSelection(null);
        }, 1050);
        setTimeout(() => setInterfaceSelection('context'), 1150);
      }
      return true;
    });
    return () => {
      setHasPageLoaded(false);
      setAnimateDirection('normal');
    };
  }, [currentLevel]);

  return (
    <Wrapper isImmersive={isImmersive}>
      <MenuContainer>
        {menuList.map(({ title, id }) => (
          <SecondaryButton
            key={`menu-${title}`}
            text={title}
            id={id}
            onClick={onInterfaceSelection}
            isActive={interfaceSelection === id}
            style={{ marginRight: 10, marginBottom: 10 }}
          />
        ))}
      </MenuContainer>
      <div style={{
        display: 'flex',
        justifyContent: animateDirection === 'normal' ? 'flex-start' : 'flex-end',
      }}
      >
        <InterfaceContainer
          ref={interfaceContainerRef}
          isImmersive={isImmersive}
          direction={animateDirection}
          style={{ display: interfaceSelection ? 'flex' : 'none' }}
        >
          <Interface setInterfaceSelection={setInterfaceSelection} />
          <div style={{ maxWidth: 300, margin: 10 }}>
            <Button
              text="close"
              onClick={() => {
                setAnimateDirection('reverse');
                setTimeout(() => setInterfaceSelection(null), 1050);
              }}
            />
          </div>
        </InterfaceContainer>
      </div>
    </Wrapper>
  );
}
