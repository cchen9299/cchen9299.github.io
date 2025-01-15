import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';
import { ParallaxLayer } from './Background/styledComponents';
import useStore, { useElevatorStore } from '../Store';
import { getElevationBounds } from '../hooks/utils';
import { getMoveFloorCalc } from '../hooks/constants';
import TooltipButton from './common/TooltipButton';
import Button from './common/Button';

export const ElevatorNode = styled(ParallaxLayer)`
  min-height: 235px;
  height: ${({ isTopLevel }) => (isTopLevel ? 'inherit' : 100)}%;
  width: 150px;
  z-index: 100;
  bottom:0;
  position: absolute;

  display: flex;
  flex-direction: column-reverse;
  cursor: pointer;

  &:hover #elevator-tooltip {
    display: flex !important;
  }
`;

const ElevatorText = styled.div`
  flex-grow: 0;
  align-self: center;
  padding: 5px;
  border: 2px solid;
  border-radius: 5px;
  border-color: #FFD3FF;
  background-color: rgba(0,102,255,0.5);
  box-shadow:
    inset 0 0 20px 5px #F0F,
    0 0 5px 2px #FFF,
    0 0 5px 2px #F0F,
    0 0 50px 5px #F0F;

  text-transform: uppercase;
  font-size: 12px;
  font-family: "Orbitron", sans-serif;
  color: #FFD3FF;
  text-shadow: 
    0 0 10px #FFF,
    0 0 10px #F0F,
    0 0 50px #F0F;
  position: relative;
  bottom: 15px;
`;

const keyToAction = {
  87: 'up',
  38: 'up',
  83: 'down',
  40: 'down',
  70: 'enter',
  13: 'enter',
};

const DoorLeft = styled.div`
  background-color: #33426E;
  width: 55px;
  height: 180px;
`;

const DoorRight = styled(DoorLeft)`
  border-left: 5px solid #101D43;
  -webkit-transform: scale(-1, 1);
  transform: scale(-1, 1);
`;

const ListContainer = styled.div`
  position: absolute;
  z-index: 10000;
  bottom: 180px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 300px;
  padding: 10px;
  backdrop-filter: blur(20px);

  background-color: rgba(0, 64, 142, 0.5);
  border: 2px solid rgb(32, 117, 214);
`;

export default function Elevator({ level }) {
  const ref = useRef();
  const {
    interactableRefs: { character },
    sceneRefs: { containerRef },
    dispatchInteractableRefs,
    setCurrentLevel,
  } = useStore();
  const {
    floorList,
  } = useElevatorStore();
  const [menuSelection, setMenuSelection] = useState(null);

  const onKeyDown = useCallback(({ keyCode }) => {
    const selectionIndex = floorList.indexOf(menuSelection);
    switch (keyToAction[keyCode]) {
      case 'up':
        if (floorList.includes(menuSelection) && selectionIndex > 0) {
          setMenuSelection(floorList[selectionIndex - 1]);
        }
        break;
      case 'down':
        if (floorList.includes(menuSelection) && selectionIndex < floorList.length - 1) {
          setMenuSelection(floorList[selectionIndex + 1]);
        }
        break;
      case 'enter':
        if (floorList.includes(menuSelection)) {
          const {
            elevationTop: destinationTop,
          } = getElevationBounds(selectionIndex);
          containerRef.current.scrollTo(0, destinationTop);
          character.setY(getMoveFloorCalc(selectionIndex));
          setMenuSelection(null);
          setCurrentLevel(selectionIndex);
        } else {
          setMenuSelection(floorList[level]);
        }
        break;
      default:
    }
  }, [
    level,
    character,
    setMenuSelection,
    setCurrentLevel,
    menuSelection,
    containerRef,
    floorList,
  ]);

  const onElevatorClick = useCallback(() => {
    setMenuSelection(floorList[level]);
  }, [
    floorList,
    level,
    setMenuSelection,
  ]);

  const onMenuSelection = useCallback((id) => {
    const { elevationTop: destinationTop } = getElevationBounds(id);
    setMenuSelection(null);
    setCurrentLevel(id);
    setTimeout(() => {
      containerRef.current.scrollTo(0, destinationTop);
      character.setY(getMoveFloorCalc(id));
    }, 450);
  }, [
    character,
    containerRef,
    setMenuSelection,
    setCurrentLevel,
  ]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => { document.removeEventListener('keydown', onKeyDown); };
  }, [onKeyDown]);

  useEffect(() => {
    if (ref) {
      dispatchInteractableRefs({
        [floorList[level].refKey]: { ref, state: menuSelection, setState: setMenuSelection },
      });
    }
  }, [menuSelection, ref, floorList, dispatchInteractableRefs, level, setMenuSelection]);

  return (
    <>
      <ElevatorNode ref={ref} isTopLevel={level === 0} onClick={onElevatorClick}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* <Highlight height="205px" width="140px" bottom="-10px" left="5px" /> */}
          <DoorLeft style={{ marginRight: 2 }} />
          <DoorRight />
        </div>
        <ElevatorText>Elevator</ElevatorText>
        <TooltipButton id="elevator-tooltip" actionKey="F" text="Take Elevator" style={{ display: menuSelection === 'TOOLTIP' ? 'flex' : 'none' }} />

      </ElevatorNode>
      {floorList.includes(menuSelection) && (
        <ListContainer>
          {floorList.map(({
            title, subtitle, floor, levelFromRoof,
          }) => (
            <Button
              id={levelFromRoof}
              key={title + subtitle}
              text={title}
              subtext={`0${floor} ${subtitle}`}
              isActive={menuSelection.title === title}
              onClick={onMenuSelection}
              style={{ marginBottom: 10 }}
            />
          ))}
          <Button id="elevator-close" text="Close" onClick={() => setMenuSelection(null)} />
        </ListContainer>
      )}
    </>
  );
}

Elevator.propTypes = {
  level: number.isRequired,
};
