import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AttributeList from './AttributeList';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-grow: 1;
`;

const Column = styled.div`
    width: 33%;
`;

const SubtextWrapper = styled.h6`
  mix-blend-mode: color-dodge;
  color: rgb(104, 166, 238);
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
`;

function ClassList({
  list, title, start, hoverItem,
}) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <Container>
        {list.map(({ specialty, skills }) => (
          <Column key={specialty}>
            <SubtextWrapper>
              {specialty}
            </SubtextWrapper>
            <AttributeList
              start={start}
              hoverItem={hoverItem}
              list={skills}
              specialty={specialty}
            />
          </Column>
        ))}
      </Container>
    </Wrapper>
  );
}

export default ClassList;

ClassList.propTypes = {
  list: PropTypes.shape([]).isRequired,
  title: PropTypes.string.isRequired,
  hoverItem: PropTypes.shape({}).isRequired,
  start: PropTypes.string.isRequired,
};
