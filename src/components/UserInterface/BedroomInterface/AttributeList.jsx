import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AttributeBox = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 2px;
  background-color: ${({ fillColor }) => fillColor || 'rgba(7, 18, 32, 0.7)'};
  z-index: ${({ fillColor }) => (fillColor ? 1 : -1)};
  box-shadow:
      0 0 5px 0px ${({ fillColor }) => fillColor || 'rgba(0,0,0,0)'},
      0 0 5px 0px ${({ fillColor }) => fillColor || 'rgba(0,0,0,0)'};
`;

const Container = styled.div`
  display: flex;
`;

const renderLevel = ({
  name, level, specialty, maxLevel, hoverItem,
}) => {
  const list = [];
  const insertAttributeBox = (boundary, color) => {
    for (let renderIndex = 1; renderIndex <= boundary; renderIndex += 1) {
      list.push(<AttributeBox shouldFill={true} fillColor={color} />);
    }
  };

  if (!hoverItem) {
    for (let renderIndex = 1; renderIndex <= level; renderIndex += 1) {
      const fillColor = '#FF0';
      list.push(<AttributeBox fillColor={fillColor} level={level} />);
    }
  } else {
    const { primaryClassList, secondaryClassList } = hoverItem;
    const hoverClassList = [...primaryClassList, ...secondaryClassList];
    const hoverSkills = hoverClassList.find((hover) => hover.specialty === specialty)?.skills;
    const hoverSkillLevel = hoverSkills?.find((hover) => hover.name === name)?.level || 0;
    const levelDiff = level - hoverSkillLevel;
    const isNegative = levelDiff < 0;
    const levelDiffAbs = Math.abs(levelDiff);

    if (isNegative) {
      insertAttributeBox(level, '#FF0');
      insertAttributeBox(levelDiffAbs, '#0F0');
    } else {
      insertAttributeBox(hoverSkillLevel, '#FF0');
      insertAttributeBox(levelDiffAbs, '#F0F');
    }
  }
  const unfilledLevel = maxLevel - list.length;
  for (let renderIndex = 1; renderIndex <= unfilledLevel; renderIndex += 1) {
    list.push(<AttributeBox level={level} />);
  }

  return <Container>{list}</Container>;
};

export default function AttributeList({
  list, maxLevel = 5, hoverItem, specialty,
}) {
  return (
    <div>
      {list.map(({ name, level }) => (
        <div key={name}>
          <p>{name}</p>
          {renderLevel({
            name, level, maxLevel, hoverItem, specialty,
          })}
        </div>
      ))}
    </div>
  );
}

AttributeList.propTypes = {
  list: PropTypes.shape([]).isRequired,
  maxLevel: PropTypes.number,
  hoverItem: PropTypes.shape({}).isRequired,
  specialty: PropTypes.string.isRequired,
};
