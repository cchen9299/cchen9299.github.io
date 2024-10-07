import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';
import { FloatingButton, ParallaxLayer } from '../styledComponents';
import useStore, { useElevatorStore } from '../Store';
import { getElevationBounds } from '../hooks/utils';
import { getMoveFloorCalc } from '../hooks/constants';

export const ElevatorNode = styled(ParallaxLayer)`
  min-height: 235px;
  height: ${({ isTopLevel }) => (isTopLevel ? 'inherit' : 100)}%;
  width: 150px;
  background-color: #1C344E;
  z-index: 1000;
  bottom:0;
`;

const ElevatorText = styled.div`
  padding: 10px;
  border: 2px solid;
  border-radius: 5px;
  border-color: #FFD3FF;
  background-color: rgba(0,102,255,0.5);
  box-shadow:
    inset 0 0 20px 5px #F0F,
    0 0 5px 2px #FFF,
    0 0 5px 2px #F0F,
    0 0 50px 5px #F0F;

  font-size: 1.25rem;
  font-family: "Orbitron", sans-serif;
  color: #FFD3FF;
  text-shadow: 
    0 0 10px #FFF,
    0 0 10px #F0F,
    0 0 50px #F0F;
`;

const keyToAction = {
  87: 'up',
  38: 'up',
  83: 'down',
  40: 'down',
  70: 'f',
};

const DoorLeft = styled.div`
  background-color: #33426E;
  width: 70px;
  height: 200px;
`;

const DoorRight = styled(DoorLeft)`
  border-left: 5px solid #101D43;
  -webkit-transform: scale(-1, 1);
  transform: scale(-1, 1);
`;

export default function Elevator({ level }) {
  const ref = useRef();
  const {
    interactableRefs: { character },
    sceneRefs: { containerRef },
    dispatchInteractableRefs,
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
      case 'f':
        if (floorList.includes(menuSelection)) {
          const {
            elevationTop: destinationTop,
          } = getElevationBounds(selectionIndex);
          containerRef.current.scrollTo(0, destinationTop);
          character.setY(getMoveFloorCalc(selectionIndex));
          setMenuSelection(null);
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
    menuSelection,
    containerRef,
    floorList,
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
  }, [menuSelection, ref, floorList, dispatchInteractableRefs, level]);

  return (
    <ElevatorNode ref={ref} isTopLevel={level === 0}>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          bottom: 0,
          left: -10,
        }}
      >
        <DoorLeft style={{ marginRight: 2 }} />
        <DoorRight />
      </div>
      <div style={{ position: 'absolute', bottom: 235 }}>
        <ElevatorText>Elevator {level}</ElevatorText>
      </div>
      {menuSelection === 'TOOLTIP'
        && (
        <FloatingButton style={{ top: 100 }}>
          Take Elevator
        </FloatingButton>
        )}
      {floorList.includes(menuSelection) && floorList.map(({ title, subtitle }) => (
        <div key={title + subtitle}>
          <button
            type="button"
            style={{
              backgroundColor: menuSelection.title === title ? 'skyblue' : '',
            }}
          >
            <p>{title}</p>
            <p>{subtitle}</p>
          </button>
        </div>
      ))}
    </ElevatorNode>
  );
}

Elevator.propTypes = {
  level: number.isRequired,
};
