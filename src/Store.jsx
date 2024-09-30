import React, {
  createContext, useMemo, useContext, useState,
} from 'react';
import { node } from 'prop-types';

const StoreContext = createContext('store');
const ElevatorContext = createContext('elevator');

export function Store({ children }) {
  const characterRef = React.useRef();
  const containerRef = React.useRef();
  const elevatorRef = React.useRef();
  const blockerRef = React.useRef();

  const coverHeight = (window.innerHeight / 2.39) * 0.5;
  const cinematicBottom = window.innerHeight - coverHeight;

  const initialState = useMemo(() => ({
    interactablesRef: {
      elevatorRef,
      characterRef,
      containerRef,
      blockerRef,
    },
    sceneSettings: {
      cinematicBottom,
      coverHeight,
    },
  }),
  [
    elevatorRef,
    characterRef,
    containerRef,
    cinematicBottom,
    coverHeight,
  ]);

  const [showTooltip, setShowTooltip] = useState(false);
  const [menuSelection, setMenuSelection] = useState(null);

  const initialElevatorState = useMemo(() => ({
    showTooltip,
    setShowTooltip,
    menuSelection,
    setMenuSelection,

    floorLevel: {
      1: 7,
      2: 4,
      3: 1,
    },

    floorList: [
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
    ],

  }), [
    showTooltip,
    setShowTooltip,
    menuSelection,
    setMenuSelection,
  ]);

  return (
    <StoreContext.Provider
      value={initialState}
    >
      <ElevatorContext.Provider value={initialElevatorState}>
        {children}
      </ElevatorContext.Provider>
    </StoreContext.Provider>
  );
}

export default function useStore() { return useContext(StoreContext); }
export function useElevatorStore() { return useContext(ElevatorContext); }

Store.propTypes = {
  children: node.isRequired,
};
