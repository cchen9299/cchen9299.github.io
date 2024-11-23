import React, { useState } from 'react';
import styled from 'styled-components';

const encoder = new TextEncoder();

const experienceMap = {
  0: {
    start: '2021',
    end: 'Present',
    year: '2021 - Present',
    title: 'Fullstack Engineer',
    company: 'American Express',
    details: [
      '> Developed consumer facing web applications for American Express in frontend and backend technologies.',
      '> Lead the reformation of how software testing is conducted for the same web application.',
      '> Contributed to the migration of the CI pipelines from Jenkins to Github Actions and the shape of the CD process.',
      '> Pioneered on many Developer Experience focused automation and process imporvements as designer, developer and project manager.',
    ],
    tags: ['JavaScript', 'React', 'NextJS', 'Java', 'Vert.x', 'Playwright', 'Selenium', 'Github Actions', 'Figma'],
  },
  1: {
    start: '2019',
    end: '2021',
    year: '2019 - 2021',
    title: 'UIUX Designer',
    company: 'Synapse Studios',
    details: [
      '> Designed two mobile apps from ground up from conducting user research to high fidelity wireframes.',
      '> Developed all code related to styling.',
      '> Advocated for design collaboration across individual scrum teams focused on different clients.',
    ],
    tags: ['CSS', 'JavaScript', 'React Native', 'Sketch'],
  },
  2: {
    start: '2018',
    end: '2019',
    year: '2018 - 2019',
    title: 'Visual Designer',
    company: 'Dauntless Studio',
    details: [
      'WIP',
    ],
    tags: ['Adobe Xd', 'Sketch', 'CSS'],
  },
  3: {
    start: '2017',
    end: '2018',
    year: '2017 - 2018',
    title: 'Contract Work',
    company: 'Various',
    details: [
      'WIP',
    ],
    tags: ['Adobe Xd', 'Adobe Photoshop', 'Sketch'],
  },
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
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

const SubtextWrapper = styled.h6`
  mix-blend-mode: color-dodge;
  color: rgb(104, 166, 238);
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`;

const Mugshot = styled.div`
  height: 30%;
  border: 2px solid rgb(32, 117, 214);
  background-color: rgba(7, 18, 32, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Selection = styled.div`
  padding: 10px 0;
  margin: 10px 0;
  border-bottom: 1px solid;
  border-right: 5px solid rgba(32, 117, 214, 0.5);
  cursor: pointer;

  background-color: ${({ isActive }) => (isActive ? 'rgba(86, 137, 200, 0.7)' : '')};

  &:hover {
    background-color: rgba(86, 137, 200, 0.7);
  }
`;

const SelectionList = styled.div`
`;

const Left = styled.div`
  width: 30%;
`;

const Right = styled.div`
  height: 50vh;
  width: 70%;
  padding-left: 10px;
`;

const DetailsContainer = styled.div`
  @media (min-width: 1513px) {
    height: 40vh;
    max-height: 50vh;
  }
  max-height: 30vh;
  padding: 10px 20px;
  scrollbar-color: rgba(7, 18, 32, 0.7) rgb(32, 117, 214);
  scrollbar-width: thin;
  background-color: rgba(7, 18, 32, 0.7);
  border: 2px solid rgb(32, 117, 214);
  margin-top: 20px;
  overflow-y: scroll;
`;

const Tags = styled.p`
  background-color: rgb(32, 117, 214);
  padding: 5px 10px;
  margin-right: 10px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DecorationTitleA = styled.h1`
  position: absolute;
  opacity: 0.1;
  font-size: 70px;
  top: 50px;
  left: 50px;
  z-index: -1;
`;

const DecorationTitleB = styled.h1`
  position: absolute;
  opacity: 0.2;
  bottom: 10px;
  right: 10px;
  font-size: 120px;
  z-index: -1;
  text-align: right;
`;

const DecorationText = styled.p`
  margin: 0 !important;
  font-size: 10px;
  line-height: 10px;
`;

const DecorationTextB = styled.p`
  margin: 0 !important;
  font-size: 10px;
  line-height: 10px;
  position: absolute;
  bottom: 10px;
  right: 16px;
  opacity: 0.2;
`;

const DecoTextContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  opacity: 0.2;
  padding-right: 5px;
  border-right: 2px solid;
`;

export default function BedroomInterface() {
  const [expSelection, setExpSelection] = useState(0);
  const exp = experienceMap[expSelection];
  const name = 'Hank Chen';
  return (
    <Wrapper>
      <Left>
        <Mugshot>
          <h2>No Photo In Database</h2>
        </Mugshot>
        <SelectionList>
          {Object.values(experienceMap).map(({ start, end, title }, index) => (
            <Selection
              isActive={expSelection === index}
              key={`${start} - ${end}`}
              onClick={() => { setExpSelection(index); }}
            >
              <h5>{title}</h5>
              <SubtextWrapper>{`${start} - ${end}`}</SubtextWrapper>
            </Selection>
          ))}
        </SelectionList>
      </Left>
      <Right>
        <h2>{exp.title}</h2>
        <SubtextWrapper>{exp.company}</SubtextWrapper>
        <DetailsContainer>
          {exp.details.map((copy) => <p key={copy}>{copy}</p>)}
        </DetailsContainer>
        <TagsContainer>
          {exp.tags.map((copy) => <Tags key={copy}>{copy}</Tags>)}
        </TagsContainer>
      </Right>
      <DecoTextContainer>
        <DecorationText>{btoa(exp.year)}</DecorationText>
        <DecorationText>{btoa(exp.title)}</DecorationText>
        <DecorationText>{btoa(exp.company)}</DecorationText>
      </DecoTextContainer>
      <DecorationTitleA>
        EXPERIENCE
      </DecorationTitleA>

      <DecorationTextB>{encoder.encode(name)}</DecorationTextB>
      <DecorationTitleB>
        HANK CHEN
      </DecorationTitleB>
    </Wrapper>
  );
}
