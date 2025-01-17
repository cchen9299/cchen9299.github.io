import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import styled, { keyframes } from 'styled-components';
import { bool, func, number } from 'prop-types';
import { ParallaxLayer } from './Background/styledComponents';
import useStore, { useElevatorStore } from '../Store';
import { getElevationBounds } from '../hooks/utils';
import { CINEMATIC_COVER_HEIGHT, getMoveFloorCalc } from '../hooks/constants';
// import TooltipButton from './common/TooltipButton';
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

`;

const Wrapper = styled.div`
  &:hover #elevator-tooltip {
    left: 0;
  }

  h2{
    color: rgb(175, 232, 255);
  }
  h4{
    color: rgb(104, 166, 238);
    mix-blend-mode: color-dodge;
  }
`;

const DetailsContainer = styled.div`
  height: 100px;
  background-color: rgba(7, 18, 32, 0.7);
  border: 2px solid rgb(32, 117, 214);
  margin-bottom: 10px;;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;


  box-shadow:
    inset 0 0 20px 5px rgb(49, 76, 107);
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
  display: flex;
  align-items: center;
`;

const Hamburger = styled.div`
  width: 12px;
  height: 0px;
  border: 1px solid #ffbfff;
  opacity: 0.9;
  border-radius: 100px;
  position: relative;
  z-index: 99999;
  margin: 3px;
  margin-right: 6px;

  text-shadow:
    0 0 10px 2px #FFF,
    0 0 50px 2px #F0F;

  &::before{
    content: '';
    width: 12px;
    height: 0px;
    position: absolute;
    border: 1px solid #FFD3FF;
    border-radius: 100px;
    left: -1px;
    bottom: 4px;
    text-shadow:
      0 0 10px 2px #FFF,
      0 0 50px 2px #F0F;
  }
  &::after{
    content: '';
    width: 12px;
    height: 0px;
    position: absolute;
    border: 1px solid #FFD3FF;
    border-radius: 100px;
    left: -1px;
    top: 4px;
    text-shadow:
      0 0 10px 2px #FFF,
      0 0 50px 2px #F0F;
  }
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
  z-index: 30000;
  bottom: -30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  padding: 10px;
  backdrop-filter: blur(20px);

    height: ${({ isImmersive }) => `calc(100vh - (${isImmersive ? CINEMATIC_COVER_HEIGHT : '0px'} * 2) - 30px)`};
  overflow: hidden;

  background-color: rgba(0, 64, 142, 0.5);
  border: 2px solid rgb(32, 117, 214);

  left: -324px;
  transition: left 0.5s;
`;

const menuOpen = () => keyframes`
  0% {
      width: 0%;
      opacity: 0;
  }
  10% {
      width: 2px;
      opacity: 0.75;
  }
  100% {
      width: 105px;
      opacity: 0.75;
  }
`;

const menuClose = () => keyframes`
  0% {
      width: 105px;
      opacity: 0.75;
  }
  90% {
      width: 0%;
      opacity: 1;
  }
  100% {
      width: 0%;
      opacity: 0;
  }
`;

const Light = styled.div`
  z-index: 10;
  height: 180px;
  background-color: #fff2c4;
  box-shadow:
      0 0 20px 5px #f9ce30,
      0 0 20px 5px #e0e0e0;

  animation-name: ${({ isDoorOpened }) => (isDoorOpened ? menuOpen() : menuClose())};
  animation-duration: 600ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  mix-blend-mode: screen;
  position: absolute;
`;

const ElevatorInsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  width: 110px;

  animation-name: ${({ isDoorOpened }) => (isDoorOpened ? menuOpen() : menuClose())};
  animation-duration: 600ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  mix-blend-mode: screen;
  position: absolute;
`;

const ElevatorInsideShade = styled.div`
  height: 180px;
  width: 70px;
  background-color: #101D43;
  position: absolute;
  right: 20px;
  z-index: 2;
  opacity: ${({ isDoorOpened }) => (isDoorOpened ? 0.2 : 0)};
  transition: opacity 0;
  transition-delay: 400ms;
`;
const ElevatorInsideTop = styled.div`
  width: 100%;
  height: 110px;
  background-color: #465A93;
`;
const ElevatorInsideBottom = styled.div`
  width: 100%;
  height: 68px;
  border-top: 2px solid #212940;
  background-color: #2B275D;
`;

export default function Elevator({
  level,
  isDoorOpened,
  setIsDoorOpened,
}) {
  const ref = useRef();
  const {
    interactableRefs: { character },
    sceneRefs: { containerRef },
    dispatchInteractableRefs,
    setCurrentLevel,
    isImmersive,
  } = useStore();
  const { floorList } = useElevatorStore();
  const [menuSelection, setMenuSelection] = useState(floorList[level]);

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
  }, [floorList, level, setMenuSelection]);

  const onMenuSelection = useCallback((id) => {
    const { elevationTop: destinationTop } = getElevationBounds(id);
    setMenuSelection(null);
    setCurrentLevel(id);
    setIsDoorOpened(false);
    setTimeout(() => {
      containerRef.current.scrollTo(0, destinationTop);
      character.setY(getMoveFloorCalc(id));
    }, 300);
    setTimeout(() => {
      setIsDoorOpened(true);
      setMenuSelection(floorList[level]);
    }, 800);
  }, [
    character,
    containerRef,
    setMenuSelection,
    setCurrentLevel,
    setIsDoorOpened,
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
    <Wrapper>
      <ElevatorNode
        ref={ref}
        isTopLevel={level === 0}
        onClick={onElevatorClick}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* <Highlight height="205px" width="140px" bottom="-10px" left="5px" /> */}
          <DoorLeft style={{ marginRight: 2 }} />
          <ElevatorInsideShade isDoorOpened={isDoorOpened} />
          <ElevatorInsideContainer isDoorOpened={isDoorOpened}>
            <ElevatorInsideTop />
            <ElevatorInsideBottom />
          </ElevatorInsideContainer>
          <Light isDoorOpened={isDoorOpened} />
          <DoorRight />
        </div>
        <ElevatorText>
          <Hamburger />
          Menu
        </ElevatorText>
        {/* <TooltipButton
          id="elevator-tooltip"
          actionKey="F"
          text="Take Elevator"
          style={{ display: menuSelection === 'TOOLTIP' ? 'flex' : 'none' }}
        /> */}

      </ElevatorNode>
      {/* {floorList.includes(menuSelection) && ( */}
      <ListContainer
        id="elevator-tooltip"
        isImmersive={isImmersive}
      >
        <DetailsContainer>
          <h4>Current Floor</h4>
          <h2>{menuSelection ? '0' : 'Elevating...'}{menuSelection?.floor} {menuSelection?.subtitle}</h2>
        </DetailsContainer>
        {floorList.map(({
          title, subtitle, floor, levelFromRoof,
        }) => (
          <div key={title + subtitle}>
            <Button
              id={levelFromRoof}
              text={title}
              subtext={`0${floor} ${subtitle}`}
              isActive={menuSelection?.title === title}
              onClick={(e) => { if (menuSelection?.title !== title) onMenuSelection(e); }}
              style={{ marginBottom: 10 }}
            />
          </div>
        ))}
        {/* <Button id="elevator-close" text="Close" onClick={() => setMenuSelection(null)} /> */}
      </ListContainer>
      {/* )} */}
    </Wrapper>
  );
}

Elevator.propTypes = {
  level: number.isRequired,
  isDoorOpened: bool.isRequired,
  setIsDoorOpened: func.isRequired,
};
