export const FLOOR_HEIGHT = '30px';
export const CINEMATIC_ASPECT_RATIO = 2.39;
export const CINEMATIC_COVER_HEIGHT = `(100vh  - (100vw / ${CINEMATIC_ASPECT_RATIO})) / 2`;
export const CINEMATIC_BOTTOM = `100vh - 150px - (${CINEMATIC_COVER_HEIGHT})`;
export const getMoveFloorCalc = (level) => `${level + 1}00vh - ${CINEMATIC_COVER_HEIGHT} - 150px - ${FLOOR_HEIGHT}`;

export const GLASS = `
    linear-gradient(160deg, 
        rgba(108,247,245,0) 0%, 
        rgba(145,249,247,0.15) 40%,
        rgba(255,255,255,0.3) 40%,
        rgba(255,255,255,0.3) 55%,
        rgba(145,249,247,0.15) 55%,
        rgba(108,247,245,0) 100%
    )
`;
