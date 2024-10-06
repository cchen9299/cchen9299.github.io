import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';
import { FloatingButton, ParallaxLayer } from '../styledComponents';
import useStore, { useElevatorStore } from '../Store';
import { getElevationBounds } from '../hooks/utils';
import { FLOOR_HEIGHT } from '../hooks/constants';

export const ElevatorNode = styled(ParallaxLayer)`
  height: 200px;
  width: 150px;
  background-color: purple;
`;

const keyToAction = {
  87: 'up',
  38: 'up',
  83: 'down',
  40: 'down',
  70: 'f',
};

export default function Elevator({ level }) {
  const ref = useRef();
  const {
    interactableRefs: { character },
    sceneRefs: { containerRef },
    sceneSettings: { coverHeight },
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
            elevationBottom: destinationBottom,
          } = getElevationBounds(selectionIndex);
          containerRef.current.scrollTo(0, destinationTop);
          character.setY(destinationBottom - coverHeight - 150 - FLOOR_HEIGHT);
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
    coverHeight,
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
    <ElevatorNode
      ref={ref}
      style={{ left: 0, bottom: 0 }}
    >
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
