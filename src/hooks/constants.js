export const CINEMATIC_ASPECT_RATIO = 2.39;

export const CINEMATIC_COVERAGE_HEIGHT = (
  window.innerHeight - (window.innerWidth / CINEMATIC_ASPECT_RATIO)
) * 0.5;

export const CINEMATIC_BOTTOM = window.innerHeight - CINEMATIC_COVERAGE_HEIGHT;
