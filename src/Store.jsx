import React, {
  createContext,
  useMemo,
  useContext,
  useState,
  useReducer,
} from 'react';
import { node } from 'prop-types';

const StoreContext = createContext('store');
const ElevatorContext = createContext('elevator');

export function Store({ children }) {
  const containerRef = React.useRef();
  const blockerRef = React.useRef();

  const [interactableRefs, dispatchInteractableRefs] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {}
  );
  const [interactingRef, setInteractingRef] = useState(null);

  const coverHeight = (window.innerHeight / 2.39) * 0.5;
  const cinematicBottom = window.innerHeight - coverHeight;

  const initialState = useMemo(() => ({
    interactableRefs,
    dispatchInteractableRefs,
    interactingRef,
    setInteractingRef,

    sceneRefs: {
      containerRef,
      blockerRef,
    },
    sceneSettings: {
      cinematicBottom,
      coverHeight,
    },
  }),
  [
    interactableRefs,
    dispatchInteractableRefs,
    interactingRef,
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

    floorList: [
      {
        levelFromRoof: 0,
        floor: 3,
        title: 'Intro',
        subtitle: 'Roof Top',
        refKey: 'roofElevatorRef',
      },
      {
        levelFromRoof: 1,
        floor: 2,
        title: 'About Me',
        subtitle: 'Office',
        refKey: 'officeElevatorRef',
      },
      {
        levelFromRoof: 2,
        floor: 1,
        title: 'Experience',
        subtitle: 'Reception',
        refKey: 'groundElevatorRef',
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
