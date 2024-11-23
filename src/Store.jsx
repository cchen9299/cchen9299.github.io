import React, {
  createContext,
  useMemo,
  useContext,
  useState,
  useReducer,
} from 'react';
import { node } from 'prop-types';
import { CINEMATIC_BOTTOM, CINEMATIC_COVER_HEIGHT } from './hooks/constants';

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
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isImmersive, setIsImmersive] = useState(true);

  const initialState = useMemo(() => ({
    interactableRefs,
    dispatchInteractableRefs,
    interactingRef,
    setInteractingRef,
    currentLevel,
    setCurrentLevel,
    isImmersive,
    setIsImmersive,

    sceneRefs: {
      containerRef,
      blockerRef,
    },
    sceneSettings: {
      cinematicBottom: CINEMATIC_BOTTOM,
      coverHeight: CINEMATIC_COVER_HEIGHT,
    },
  }),
  [
    interactableRefs,
    dispatchInteractableRefs,
    interactingRef,
    containerRef,
    currentLevel,
    setCurrentLevel,
    isImmersive,
    setIsImmersive,
  ]);

  const initialElevatorState = useMemo(() => ({
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
        title: 'Experience',
        subtitle: 'Apartment',
        refKey: 'bedroomElevatorRef',
      },
      {
        levelFromRoof: 2,
        floor: 2,
        title: 'About Me',
        subtitle: 'Lounge',
        refKey: 'groundElevatorRef',
      },
      {
        levelFromRoof: 3,
        floor: 1,
        title: 'Active Projects',
        subtitle: 'Basement',
        refKey: 'basementElevatorRef',
      },
    ],
  }), []);

  return (
    <StoreContext.Provider value={initialState}>
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
