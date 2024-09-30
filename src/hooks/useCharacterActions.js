import React, { useCallback, useEffect } from 'react';
import useStore, { useElevatorStore } from '../Store';

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

export default function useCharacterActions(speed = 5) {
  const {
    menuSelection, showTooltip, setMenuSelection, setShowTooltip, floorList,
  } = useElevatorStore();
  const {
    interactablesRef: { elevatorRef, characterRef, containerRef },
    sceneSettings: { cinematicBottom, coverHeight },
  } = useStore();
  const [direction, setDirection] = React.useState(null);
  const [x, setX] = React.useState((window.outerWidth + 50) / 2);
  // const [y, setY] = React.useState((window.outerHeight + 50) / 2);
  const [y, setY] = React.useState(cinematicBottom - 150 - 100);

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
      if (checkCollision(characterRef, elevatorRef)) {
        setShowTooltip(true);
      } else {
        setShowTooltip(false);
        setMenuSelection(null);
      }

      switch (direction) {
        // case 'up':
        //   setY((prev) => {
        //     containerRef.current.scrollBy(0, 0);
        //     return prev - speed;
        //   });
        //   break;
        case 'right':
          setX((prev) => prev + speed);
          break;
        case 'down':
          // setY((prev) => {
          //   containerRef.current.scrollBy(0, 0);
          //   return prev + speed;
          // });
          break;
        case 'left':
          setX((prev) => prev - speed);
          break;
        default:
      }
    }, 10);

    return () => clearInterval(clydeNavigation);
  }, [direction, containerRef, speed]);

  return {
    x, y, setDirection,
  };
}
