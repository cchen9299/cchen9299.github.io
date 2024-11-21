import styled from 'styled-components';
import { useFloorRandom } from '../../../hooks';

const drinkColorMap = {
  0: 'rgba(221, 92, 40, 0.6)',
  1: 'rgba(94, 20, 8, 0.6)',
  2: 'rgba(227, 158, 73, 0.6)',
  3: 'rgba(255, 255, 255, 0.3)',
};

const BottleA = styled.div`
    position: relative;
    width: 10px;
    height: 30px;
    border: 1px solid white;
    border-radius: 100% 100% 30% 30%;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 10px 0px rgba(255,255,255, 0.7);

    &::before {
        content: '';
        position: absolute;
        top: -11px;
        left: 3px;
        width: 2px;
        height: 10px;
        border: 1px solid white;
        border-bottom: none;

        background-color: rgba(255,255,255,0.1);
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 10px;
        height: ${() => useFloorRandom(10) + 10}px;
        border-radius: 0 0 16% 16%;

        background-color: ${() => drinkColorMap[useFloorRandom(4)]};
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }
`;

const BottleB = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid white;
    border-radius: 100% 100% 50% 50%;
    position: relative;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 10px 0px rgba(255,255,255, 0.7);

    &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: 8px;
        width: 2px;
        height: 7px;
        border: 1px solid white;
        border-bottom: none;

        background-color: rgba(255,255,255,0.1);
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 20px;
        height: ${() => useFloorRandom(10) + 5}px;
        border-radius: 0 0 4px 4px;
        
        background-color: ${() => drinkColorMap[useFloorRandom(4)]};
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }
`;

const BottleC = styled.div`
    width: 25px;
    height: 15px;
    border: 1px solid white;
    border-radius: 100px 100px 50% 50%;
    position: relative;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 10px 0px rgba(255,255,255, 0.7);

    &::before {
        content: '';
        position: absolute;
        top: -16px;
        left: 9.5px;
        width: 4px;
        height: 15px;
        border: 1px solid white;
        border-bottom: none;

        background-color: rgba(255,255,255,0.1);
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 25px;
        height: 15px;
        border-radius: 20px 20px 0 0;

        background-color: ${() => drinkColorMap[useFloorRandom(4)]};
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }
`;

const BottleD = styled.div`
    width: 15px;
    height: 25px;
    border: 1px solid white;
    border-radius: 40% 40% 60% 60%;
    position: relative;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 10px 0px rgba(255,255,255, 0.7);

    &::before {
        content: '';
        position: absolute;
        top: -11px;
        left: 5.5px;
        width: 2px;
        height: 10px;
        border: 1px solid white;
        border-bottom: none;

        background-color: rgba(255,255,255,0.1);
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 15px;
        height: ${() => useFloorRandom(10) + 10}px;
        border-radius: 10% 10% 100% 100%;

        background-color: ${() => drinkColorMap[useFloorRandom(4)]};
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }
`;

const BottleE = styled.div`
    width: 15px;
    height: 20px;
    border: 1px solid white;
    border-radius: 2px;
    position: relative;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 10px 0px rgba(255,255,255, 0.7);

    &::before {
        content: '';
        position: absolute;
        top: -11px;
        left: 5.5px;
        width: 2px;
        height: 10px;
        border: 1px solid white;
        border-bottom: none;

        background-color: rgba(255,255,255,0.1);
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 15px;
        height: ${() => useFloorRandom(15) + 5}px;
        border-radius: 0 0 2px 2px;

        background-color: ${() => drinkColorMap[useFloorRandom(4)]};
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }
`;

const BottleF = styled.div`
    width: 15px;
    height: 20px;
    border: 1px solid white;
    border-radius: 100px;
    position: relative;

    background-color: rgba(255,255,255,0.1);
    box-shadow:
      inset 0 0 10px 0px rgba(255,255,255, 0.7);

    &::before {
        content: '';
        position: absolute;
        top: -11px;
        left: 5.5px;
        width: 2px;
        height: 10px;
        border: 1px solid white;
        border-bottom: none;

        background-color: rgba(255,255,255,0.1);
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 15px;
        height: ${() => useFloorRandom(8) + 4}px;
        border-radius: 0 0 100px 100px;

        background-color: ${() => drinkColorMap[useFloorRandom(4)]};
        box-shadow:
        inset 0 0 5px 0px rgba(255,255,255, 0.7);
    }
`;

export const bottleMap = {
  0: BottleA,
  1: BottleB,
  2: BottleC,
  3: BottleD,
  4: BottleE,
  5: BottleF,
};
