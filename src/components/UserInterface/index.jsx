import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { CINEMATIC_COVER_HEIGHT } from '../../hooks/constants';
import SecondaryButton from '../common/SecondaryButton';
import Context from './Context';
import Settings from './Settings';
import Button from '../common/Button';
import useStore from '../../Store';

const InterfaceContainer = styled.div`
    background-color: rgba(0, 64, 142, 0.5);
    border: 2px solid rgb(32, 117, 214);
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: ${({ isImmersive }) => `calc(96vh - (${isImmersive ? CINEMATIC_COVER_HEIGHT : '0px'} * 2) - 30px)`};
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
  const { isImmersive } = useStore();
  const [interfaceSelection, setInterfaceSelection] = useState('context');
  const onInterfaceSelection = useCallback((id) => {
    setInterfaceSelection((cur) => (cur === id ? null : id));
  }, []);

  const Interface = interfaceMap[interfaceSelection];

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
      <InterfaceContainer isImmersive={isImmersive} style={{ display: interfaceSelection ? 'flex' : 'none' }}>
        <Interface setInterfaceSelection={setInterfaceSelection} />
        <div style={{ maxWidth: 300, margin: 10 }}>
          <Button text="close" onClick={() => setInterfaceSelection(null)} />
        </div>
      </InterfaceContainer>
    </Wrapper>
  );
}
