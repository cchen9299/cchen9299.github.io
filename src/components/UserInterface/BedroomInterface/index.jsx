import React, { useState } from 'react';
import styled from 'styled-components';
import { upgradeMap } from './maps';
import ClassList from './ClassList';

const encoder = new TextEncoder();

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  p {
    margin-top: 10px;
    color: rgb(175, 232, 255);
  }

  h3 {
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

const Selection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-right: ${({ isActive }) => (isActive ? '5px solid rgb(175, 232, 255)' : '')};
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
  height: 100%;
`;

const Right = styled.div`
  width: 70%;
  height: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

const AnimatedNode = styled.div`
  width: 10px;
  height: 10px;
  background-color: rgb(175, 232, 255);
  border-radius: 100px;
  margin: 0 16px;
  position: relative;
  z-index: 1;
  &::before{
    content: '';
    height: 40px;
    width: ${({ position }) => (position === 'first' ? '0px' : '2px')};
    left: 4px;
    bottom: 0;
    position: absolute;
    background-color: rgb(175, 232, 255);
  }
  &::after{
    content: '';
    height: 40px;
    width: ${({ position }) => (position === 'last' ? '0px' : '2px')};
    left: 4px;
    position: absolute;
    background-color: rgb(175, 232, 255);
  }
`;

const DetailsContainer = styled.div`
  height: 100%;
  background-color: rgba(7, 18, 32, 0.7);
  border: 2px solid rgb(32, 117, 214);
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

export default function BedroomInterface() {
  const [expSelection, setExpSelection] = useState(upgradeMap[0]);
  const [expHover, setExpHover] = useState(null);
  const name = 'Hank Chen';

  return (
    <Wrapper>
      <Left>
        {/* <Mugshot>
          <h2>No Photo In Database</h2>
        </Mugshot> */}
        <DetailsContainer>
          <SelectionList>
            {upgradeMap.map((item, index, arr) => {
              const { start, title } = item;
              let position = '';
              if (index === 0) position = 'first';
              if (arr.length - 1 === index) position = 'last';
              return (
                <Selection
                  isActive={expSelection === item}
                  id={index}
                  key={`${title}-$`}
                  onClick={() => { setExpSelection(item); }}
                  onMouseEnter={(e) => { setExpHover(upgradeMap[e.target.id]); }}
                  onMouseLeave={() => setExpHover(null)}
                >
                  <AnimatedNode position={position} />
                  <div>
                    <SubtextWrapper>{`${start}`}</SubtextWrapper>
                    <h5>{title}</h5>
                  </div>
                </Selection>
              );
            })}
          </SelectionList>
        </DetailsContainer>
      </Left>
      <Right>
        {/* <h2>{exp.title}</h2> */}
        {/* <SubtextWrapper>{exp.company}</SubtextWrapper> */}
        <ClassList
          list={expSelection.primaryClassList}
          start={expSelection.start}
          hoverItem={expHover}
          title="Primary Class Upgrades"
        />
        <ClassList
          list={expSelection.secondaryClassList}
          start={expSelection.start}
          hoverItem={expHover}
          title="Secondary Class Upgrades"
        />
      </Right>
      {/* <DecoTextContainer>
        <DecorationText>{btoa(exp.year)}</DecorationText>
        <DecorationText>{btoa(exp.title)}</DecorationText>
        <DecorationText>{btoa(exp.company)}</DecorationText>
      </DecoTextContainer> */}
      {/* <DecorationTitleA>
        EXPERIENCE
      </DecorationTitleA> */}

      <DecorationTextB>{encoder.encode(name)}</DecorationTextB>
      {/* <DecorationTitleB>
        HANK CHEN
      </DecorationTitleB> */}
    </Wrapper>
  );
}

// const Mugshot = styled.div`
//   height: 30%;
//   border: 2px solid rgb(32, 117, 214);
//   background-color: rgba(7, 18, 32, 0.7);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
// `;

// const Tags = styled.p`
//   background-color: rgb(32, 117, 214);
//   padding: 5px 10px;
//   margin-right: 10px;
// `;

// const TagsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const DecorationTitleA = styled.h1`
//   position: absolute;
//   opacity: 0.1;
//   font-size: 70px;
//   top: 50px;
//   left: 50px;
//   z-index: -1;
// `;

// const DecorationTitleB = styled.h1`
//   position: absolute;
//   opacity: 0.2;
//   bottom: 10px;
//   right: 10px;
//   font-size: 120px;
//   z-index: -1;
//   text-align: right;
// `;

// const DecorationText = styled.p`
//   margin: 0 !important;
//   font-size: 10px;
//   line-height: 10px;
// `;

// const DecoTextContainer = styled.div`
//   position: absolute;
//   right: 10px;
//   top: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   opacity: 0.2;
//   padding-right: 5px;
//   border-right: 2px solid;
// `;
