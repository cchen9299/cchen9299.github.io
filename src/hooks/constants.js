export const CINEMATIC_ASPECT_RATIO = 2.39;
export const CINEMATIC_COVERAGE_HEIGHT = 'calc((100vh  - (100vw/2.39))/2)';
export const CINEMATIC_COVERAGE_WITH_FLOOR = 'calc((100vh + 30px - (100vw/2.39))/2)';
export const CINEMATIC_BOTTOM = 'calc(100vh - 150px - ((100vh + 30px - (100vw / 2.39)) / 2))';

export const getMoveFloorCalc = (target) => `calc(${target}px - (100vh  - (100vw/2.39))/2 - 150px)`;

export const CINEMATIC_COVER_HEIGHT = '(100vh  - (100vw/2.39))/2';
