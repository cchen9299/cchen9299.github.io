import React from 'react';
import useStore from '../../Store';

export default function Settings() {
  const { isImmersive, setIsImmersive } = useStore();

  return (
    <div>
      <button
        type="button"
        onClick={() => { setIsImmersive((prev) => !prev); }}
      >
        Turn {isImmersive ? 'Off' : 'On'} Immersive Mode
      </button>
    </div>
  );
}
