import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { CINEMATIC_COVER_HEIGHT } from '../../hooks/constants';
import SecondaryButton from '../common/SecondaryButton';
import Context from './Context';
import Settings from './Settings';
import Button from '../common/Button';

// const Interface = styled.div`
//   height: calc(96vh - (${CINEMATIC_COVER_HEIGHT} * 2));
//   width: 100%;
//   background-color: rgba(0,102,255,0.5);
//   backdrop-filter: blur(20px);

//   box-shadow:
//     inset 0 0 20px 5px #F0F,
//     0 0 5px 2px #FFF,
//     0 0 5px 2px #F0F,
//     0 0 50px 5px #F0F;
// `;

// const InterfaceContainer = styled.div`
//   width: 36vw;
//   height: 100%;
//   position: fixed;
//   right: 2vw;
//   top: calc(${CINEMATIC_COVER_HEIGHT} + 2vh);
// `;

const InterfaceContainer = styled.div`
  background-color: rgba(0, 64, 142, 0.5);
  border: 2px solid rgb(32, 117, 214);
  height: calc(96vh - (${CINEMATIC_COVER_HEIGHT} * 2) - 30px);
  backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Wrapper = styled.div`
    width: 36vw;
    position: fixed;
    margin-right: 2vw;
    right: 0;
    top: calc(${CINEMATIC_COVER_HEIGHT} + 1vh);
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
  const [interfaceSelection, setInterfaceSelection] = useState('context');
  const onInterfaceSelection = useCallback((id) => {
    setInterfaceSelection((cur) => (cur === id ? null : id));
  }, []);

  const Interface = interfaceMap[interfaceSelection];

  return (
    <Wrapper>
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
      <InterfaceContainer style={{ display: interfaceSelection ? 'flex' : 'none' }}>
        <Interface setInterfaceSelection={setInterfaceSelection} />
        <div style={{ maxWidth: 300, margin: 20 }}>
          <Button text="close" onClick={() => setInterfaceSelection(null)} />
        </div>
      </InterfaceContainer>
    </Wrapper>
  );
}
