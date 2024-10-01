import React, {
  createContext,
  useMemo,
  useContext,
  useState,
  useReducer,
} from 'react';
import { node } from 'prop-types';
import { CINEMATIC_BOTTOM, CINEMATIC_COVERAGE_HEIGHT } from './hooks/constants';

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
      cinematicBottom: CINEMATIC_BOTTOM,
      coverHeight: CINEMATIC_COVERAGE_HEIGHT,
    },
  }),
  [
    interactableRefs,
    dispatchInteractableRefs,
    interactingRef,
    containerRef,
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
        floor: 4,
        title: 'Intro',
        subtitle: 'Roof Top',
        refKey: 'roofElevatorRef',
      },
      {
        levelFromRoof: 1,
        floor: 3,
        title: 'About Me',
        subtitle: 'Bedroom',
        refKey: 'bedroomElevatorRef',
      },
      {
        levelFromRoof: 2,
        floor: 2,
        title: 'Experience',
        subtitle: 'Office',
        refKey: 'officeElevatorRef',
      },
      {
        levelFromRoof: 3,
        floor: 1,
        title: 'Some Other Stuff',
        subtitle: 'Ground',
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
