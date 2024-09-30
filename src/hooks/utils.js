export const getElevationBounds = (level) => ({
  elevationTop: level * window.innerHeight,
  elevationBottom: (level + 1) * window.innerHeight,
});
