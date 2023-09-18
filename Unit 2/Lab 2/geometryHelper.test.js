import {describe, expect, test} from '@jest/globals';
const geo = require('./geometryHelper.js');

describe('Rectangle area module', () => {
  test('1x1 Rectangle has area of 1', () => {
    expect(geo.areaOfRectangle(1,1)).toBe(1);
  });
});

describe('Rectangle perimeter module', () => {
  test('1x1 Rectangle has area of 4', () => {
    expect(geo.perimeterOfRectangle(1,1)).toBe(4);
  });
});

describe('Circle area module', () => {
  test('Circle with radius 1 has area equal to pi', () => {
    expect(geo.areaOfCircle(1)).toBe(Math.PI);
  });
});

describe('Circle circumference module', () => {
  test('Circle with radius 1 has area equal to 2 * pi', () => {
    expect(geo.circumferenceOfCircle(1)).toBe(2 * Math.PI);
  });
});

describe('Sphere volume module', () => {
  test('Sphere with radius 1 has volume equal to (4/3) * pi', () => {
    expect(geo.volumeOfSphere(1)).toBe((4/3) * Math.PI);
  });
});

describe('Triangle perimeter module', () => {
  test('Equilateral triangle /w side length 1 has perimeter equal to 3', () => {
    expect(geo.perimeterOfTriangle(1,1,1)).toBe(3);
  });
});

describe('Triangle area module', () => {
  test('Equilateral triangle /w side length 1 has area equal to 0.4330127018922193', () => {
    expect(geo.areaOfTriangle(1,1,1)).toBe(0.4330127018922193);
  });
});