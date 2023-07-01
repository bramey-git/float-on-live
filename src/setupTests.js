import '@testing-library/jest-dom';

const matchMedia = () => ({
  matches: false,
  addListener() {},
  removeListener() {},
})
window.matchMedia = window.matchMedia || matchMedia