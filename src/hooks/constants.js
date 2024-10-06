export const FLOOR_HEIGHT = '30px';
export const CINEMATIC_ASPECT_RATIO = 2.39;
export const CINEMATIC_COVER_HEIGHT = `(100vh  - (100vw / ${CINEMATIC_ASPECT_RATIO})) / 2`;
export const CINEMATIC_BOTTOM = `100vh - 150px - (${CINEMATIC_COVER_HEIGHT})`;
export const getMoveFloorCalc = (level) => `${level + 1}00vh - ${CINEMATIC_COVER_HEIGHT} - 150px - ${FLOOR_HEIGHT}`;
