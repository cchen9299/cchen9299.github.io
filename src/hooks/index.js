import { useRef } from 'react';
import useCharacterActions from './useCharacterActions';

const useFloorRandom = (max) => useRef(Math.floor(Math.random() * max)).current;
const useRandom = () => useRef(Math.random()).current;

export {
  useCharacterActions,
  useFloorRandom,
  useRandom,
};
