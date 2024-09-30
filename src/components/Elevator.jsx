import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FloatingButton, ParallaxLayer } from '../styledComponents';
import useStore, { useElevatorStore } from '../Store';

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

const floorLevel = {
  1: 6,
  4: 3,
  7: 0,
};

const floorList = [
  {
    floor: 7,
    title: 'Intro',
    subtitle: 'Roof Top',
  },
  {
    floor: 4,
    title: 'About Me',
    subtitle: 'Apartment',
  },
  {
    floor: 1,
    title: 'Experience',
    subtitle: 'Reception',
  },
];

export default function Elevator({ level }) {
  const {
    interactablesRef: { elevatorRef, containerRef },
    sceneSettings: { coverHeight },
  } = useStore();
  const {
    showTooltip,
    menuSelection,
    setMenuSelection,
    setShowTooltip,
  } = useElevatorStore();

  const elevation = level * window.innerHeight;

  const onKeyDown = useCallback(({ keyCode }) => {
    const selectionIndex = floorList.indexOf(menuSelection);
    switch (keyToAction[keyCode]) {
      case 'up':
        if (menuSelection && selectionIndex > 0) setMenuSelection(floorList[selectionIndex - 1]);
        break;
      case 'down':
        if (menuSelection && selectionIndex < floorList.length - 1) {
          setMenuSelection(floorList[selectionIndex + 1]);
        }
        break;
      case 'f':
        if (showTooltip) {
          if (menuSelection) {
            console.log(menuSelection.floor);
            containerRef.current.scrollTo(
              0,
              window.innerHeight * floorLevel[menuSelection.floor]
            );
            setMenuSelection(null);
          } else {
            setMenuSelection(floorList[0]);
          }
        }
        break;
      default:
    }
  }, [
    showTooltip,
    setMenuSelection,
    menuSelection,
  ]);

  const onKeyUp = useCallback(({ keyCode }) => {
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, [onKeyDown, onKeyUp]);

  return (
    <ElevatorNode
      ref={elevatorRef}
      style={{ left: 100, top: elevation - ((coverHeight + 300)) }}
    >
      {showTooltip && !menuSelection
        && (
        <FloatingButton style={{ top: 100 }}>
          Take Elevator
        </FloatingButton>
        )}
      {menuSelection && floorList.map(({ title, subtitle, level }) => (
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
