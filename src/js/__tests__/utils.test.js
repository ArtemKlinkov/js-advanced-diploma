import { calcTileType } from '../utils';

test('should return "top-left" for index 0 and boardSize 9', () => {
  expect(calcTileType(0, 9)).toBe('top-left');
});

test('should return "top-right" for index 8 and boardSize 9', () => {
  expect(calcTileType(8, 9)).toBe('top-right');
});

test('should return "top" for index 5 and boardSize 9', () => {
  expect(calcTileType(5, 9)).toBe('top');
});

test('should return "left" for index 9 and boardSize 9', () => {
  expect(calcTileType(9, 9)).toBe('left');
});

test('should return "right" for index 17 and boardSize 9', () => {
  expect(calcTileType(17, 9)).toBe('right');
});

test('should return "center" for index 24 and boardSize 9', () => {
  expect(calcTileType(24, 9)).toBe('center');
});

test('should return "bottom-left" for index 72 and boardSize 9', () => {
  expect(calcTileType(72, 9)).toBe('bottom-left');
});

test('should return "bottom-right" for index 8 and boardSize 9', () => {
  expect(calcTileType(80, 9)).toBe('bottom-right');
});

test('should return "bottom" for index 75 and boardSize 9', () => {
  expect(calcTileType(75, 9)).toBe('bottom');
});
