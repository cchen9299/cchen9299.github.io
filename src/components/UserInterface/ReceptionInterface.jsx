import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import dialogueList from './bartenderDialogueOptions.json';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 10px;
    color: rgb(175, 232, 255);
  }

  h2 {
    color: rgb(175, 232, 255);
  }

  h5 {
    color: rgb(175, 232, 255);
    font-size: 14px;
  }
`;

const DetailsContainer = styled.div`
  @media (min-width: 1513px) {
    height: 40vh;
    max-height: 50vh;
  }
  height: 25vh;
  padding: 10px 20px;
  scrollbar-color: rgba(7, 18, 32, 0.7) rgb(32, 117, 214);
  scrollbar-width: thin;
  background-color: rgba(7, 18, 32, 0.7);
  border: 2px solid rgb(32, 117, 214);
  margin-top: 20px;
  overflow-y: scroll;
`;

const DialogueButton = styled.button`
  border: none;
  background-color: transparent;
  color: rgb(175, 232, 255);
  padding: 5px 0;
  font-family: 'Space Mono';
  font-size: 14px;
  font-weight: ${({ shouldBold }) => (shouldBold ? 700 : 400)}!important;
  cursor: pointer;
  &:hover {
    color: rgb(208, 240, 253);
  }
  &:active {
    color: rgb(175, 232, 255);
  }
`;

const dialogueHistory = [
  {
    npc: 'What can I get for you?',
  },
  {
    me: 'The usual.',
  },
  {
    npc: 'One Deschutes Red Chair NWPA coming right up.',
  },
  {
    npc: 'You seem disoriented, something on your mind?',
  },
];

export default function ReceptionInterface() {
  const [options, setOptions] = useState(
    dialogueList.filter(({ minConvoLength }) => minConvoLength <= dialogueHistory.length)
  );
  const [history, setHistory] = useState(dialogueHistory);
  const dialogContainer = useRef(null);
  const previousOptions = useRef(options);

  const onOptionClick = ({
    me, npc, navigation, subOptions,
  }) => {
    if (navigation) {
      setOptions(previousOptions.current);
      return;
    }
    if (subOptions) setOptions(subOptions);
    setHistory((c) => [...c, { me }]);
    setTimeout(() => {
      dialogContainer.current.scrollTo({ top: 9999, behavior: 'smooth' });
    }, 10);
    setTimeout(() => {
      setHistory((c) => [...c, { npc }]);
    }, 500);
    setTimeout(() => {
      dialogContainer.current.scrollTo({ top: 9999, behavior: 'smooth' });
    }, 510);
  };

  return (
    <Wrapper>
      <h2>Bartender</h2>
      <h4>About Me</h4>
      <DetailsContainer ref={dialogContainer} id="dialogueContainer">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {history.map(({ npc, me }) => {
            const message = npc || me;
            return (
              <p key={message} style={{ alignSelf: me ? 'flex-end' : 'flex-start', marign: '10px 0' }}>{message}</p>
            );
          })}
        </div>
      </DetailsContainer>
      <div style={{
        alignSelf: 'flex-end', display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
      }}
      >
        {options.map(({
          id, me, npc, subOptions, minConvoLength, navigation,
        }, i) => {
          if (dialogueHistory.length >= minConvoLength) {
            return (
              <DialogueButton
                key={id}
                type="button"
                style={{ fontWeight: 'bold' }}
                shouldBold={!history.some(({ me: historyMe }) => historyMe === me)}
                onClick={() => onOptionClick({
                  me, npc, subOptions, navigation,
                })}
              >
                {i + 1}. {me || navigation}
              </DialogueButton>
            );
          }
          return null;
        })}
      </div>
      {/* <h1>About Me</h1> */}
    </Wrapper>
  );
}
