import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    p {
      color: rgb(175, 232, 255);
      margin-top: 10px;
    }
    h1, h2, h4 {
      color: rgb(175, 232, 255);
    }
`;

const Left = styled.div`
  width: 30%;
  height: 100%;
`;

const Right = styled.div`
  width: 70%;
  height: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

const backlogMap = [
  {
    title: 'This Site',
    list: [
      { title: 'Implement Character', tags: 'Feature' },
      { title: 'Light/Dark Mode', tags: 'Feature' },
      { title: 'Customizable Theme', tags: 'Feature' },
      { title: 'Flying Cars', tags: 'Feature' },
      { title: 'Micro Animations', tags: 'Feature' },
      { title: 'Polish', tags: 'Feature' },
      { title: 'Customizable Furniture and Clothing', tags: 'Feature' },
      { title: 'Implement viewport for mobile (?)', tags: 'Feature' },
      { title: 'Accessibility (?)', tags: 'Feature' },
      { title: 'Functional Testing', tags: 'Infrastructure' },
      { title: 'Full CICD Pipeline', tags: 'Infrastructure' },
    ],
  },
  {
    title: 'Algotrade',
    list: [
      { title: 'Keep Trying Strategies' },
    ],
  },
  {
    title: 'Automatic Window Blind Closer',
    list: [
      { title: 'Get a 3D Printer' },
    ],
  },
  {
    title: 'Self Driving Trash Bin',
    list: [
      { title: 'Take Apart My Roomba' },
    ],
  },
];

// const Tags = styled.p`
//   background-color: rgb(32, 117, 214);
//   padding: 0 5px;
//   margin-left: 10px;
// `;

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-right: ${({ isActive }) => (isActive ? '5px solid rgb(175, 232, 255)' : '5px solid rgb(86, 137, 200)')};
  border-bottom: 1px solid rgba(86, 137, 200, 1);
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? 'rgba(86, 137, 200, 0.7)' : '')};

  &:hover {
    background-color: rgba(86, 137, 200, 0.7);
  }
`;

const SubtextWrapper = styled.h6`
  mix-blend-mode: color-dodge;
  color: rgb(104, 166, 238);
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

const DetailsContainer = styled.div`
  height: 40vh;
  background-color: rgba(7, 18, 32, 0.7);
  border: 2px solid rgb(32, 117, 214);
  padding: 10px 20px 20px;
  scrollbar-color: rgba(7, 18, 32, 0.7) rgb(32, 117, 214);
  scrollbar-width: thin;
  overflow-y: scroll;
`;

const Container = styled.div`
    display: flex;
    flex-grow: 1;
`;

export default function BasementInterface() {
  const [selection, setSelection] = useState(backlogMap[0]);
  return (
    <Wrapper>
      <h1>Basement</h1>
      <h3 style={{ marginBottom: 10 }}>Backlog</h3>
      <Container>
        <Left>
          <div>
            {backlogMap.map((item, index) => {
              const { title, list } = item;
              return (
                <Selection
                  isActive={selection === item}
                  id={index}
                  key={`${title}-$`}
                  onClick={() => { setSelection(item); }}
                >
                  <h4>{title}</h4>
                  <SubtextWrapper>{`Tasks: ${list.length}`}</SubtextWrapper>
                </Selection>
              );
            })}
          </div>
        </Left>
        <Right>
          <DetailsContainer>
            {selection.list.map((e) => (
              <span key={e.title} style={{ display: 'flex' }}>
                <p>
                  - [] {e.title}
                </p>
                {/* <Tags>
                {e.tags}
              </Tags> */}
              </span>
            ))}
          </DetailsContainer>
        </Right>
      </Container>
    </Wrapper>
  );
}
