import React, { useCallback, useEffect } from 'react';
import useStore from '../Store';
import { FLOOR_HEIGHT } from './constants';

const checkCollision = (obj1Ref, obj2Ref) => {
  const rect1 = obj1Ref?.current?.getBoundingClientRect();
  const rect2 = obj2Ref?.current?.getBoundingClientRect();

  if (!rect1 || !rect2) return false;

  return (
    rect1.x < rect2.x + rect2.width
            && rect1.x + rect1.width > rect2.x
            && rect1.y < rect2.y + rect2.height
            && rect1.y + rect1.height > rect2.y
  );
};

const keyToDirectionMap = {
  87: 'up',
  38: 'up',
  68: 'right',
  39: 'right',
  83: 'down',
  40: 'down',
  65: 'left',
  37: 'left',
};

export default function useCharacterActions({ characterRef, speed = 5 }) {
  const {
    interactableRefs: { character, ...restInteractableRefs },
    dispatchInteractableRefs,
    sceneRefs: { containerRef },
    sceneSettings: { cinematicBottom },
  } = useStore();

  const [direction, setDirection] = React.useState(null);
  const [x, setX] = React.useState((window.outerWidth + 50) / 2);
  // const [y, setY] = React.useState((window.outerHeight + 50) / 2);
  const [y, setY] = React.useState(cinematicBottom - 150 - FLOOR_HEIGHT);

  const onKeyDown = useCallback(({ keyCode }) => {
    setDirection(keyToDirectionMap[keyCode]);
  }, [setDirection]);
  const onKeyUp = useCallback(() => setDirection(null), [setDirection]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, [onKeyDown, onKeyUp]);

  useEffect(() => {
    const clydeNavigation = setInterval(() => {
      Object.values(restInteractableRefs).forEach(({ ref, setState, state }) => {
        if (!state && checkCollision(characterRef, ref)) {
          setState('TOOLTIP');
        } else if (state && checkCollision(characterRef, ref)) {
          // do nothing
        } else {
          setState(null);
        }
      });

      switch (direction) {
        case 'right':
          setX((prev) => prev + speed);
          break;
        case 'left':
          setX((prev) => prev - speed);
          break;
        default:
      }
    }, 10);

    return () => clearInterval(clydeNavigation);
  }, [direction, containerRef, speed, characterRef, restInteractableRefs]);

  useEffect(() => {
    if (characterRef) {
      dispatchInteractableRefs({
        character: { ref: characterRef, setY, setX },
      });
    }
  }, [setX, setY, characterRef, dispatchInteractableRefs]);

  return {
    x, y, setDirection,
  };
}
