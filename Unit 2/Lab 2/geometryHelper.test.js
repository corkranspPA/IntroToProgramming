import {describe, expect, test} from '@jest/globals';
const geo = require('./geometryHelper.js');

describe('Rectangle area module', () => {
  test('1x1 Rectangle has area of 1', () => {
    expect(geo.areaOfRectangle(1,1)).toBe(1);
  });
  test('1x2 Rectangle has area of 1', () => {
    expect(geo.areaOfRectangle(1,2)).toBe(2);
  });
  test('4x0.5 Rectangle has area of 2', () => {
    expect(geo.areaOfRectangle(4,0.5)).toBe(2);
  });
  test('2.5x2.5 Rectangle has area of 6.25', () => {
    expect(geo.areaOfRectangle(2.5,2.5)).toBe(6.25);
  });
  test('10x15 Rectangle has area of 150', () => {
    expect(geo.areaOfRectangle(10,15)).toBe(150);
  });
  test('99x0 Rectangle has area of 0', () => {
    expect(geo.areaOfRectangle(99,0)).toBe(0);
  });
  test('0x99 Rectangle has area of 0', () => {
    expect(geo.areaOfRectangle(0,99)).toBe(0);
  });
});

describe('Rectangle perimeter module', () => {
  test('1x1 Rectangle has perimeter of 4', () => {
    expect(geo.perimeterOfRectangle(1,1)).toBe(4);
  });
  test('1x2 Rectangle has perimeter of 6', () => {
    expect(geo.perimeterOfRectangle(1,2)).toBe(6);
  });
  test('4x0.5 Rectangle has perimeter of 9', () => {
    expect(geo.perimeterOfRectangle(4,0.5)).toBe(9);
  });
  test('2.5x2.5 Rectangle has perimeter of 10', () => {
    expect(geo.perimeterOfRectangle(2.5,2.5)).toBe(10);
  });
  test('10x15 Rectangle has perimeter of 50', () => {
    expect(geo.perimeterOfRectangle(10,15)).toBe(50);
  });
  test('99x0 Rectangle has perimeter of 198', () => {
    expect(geo.perimeterOfRectangle(99,0)).toBe(198);
  });
  test('0x99 Rectangle has perimeter of 0', () => {
    expect(geo.perimeterOfRectangle(0,99)).toBe(198);
  });
});

describe('Circle area module', () => {
  test('Circle with radius 1 has area equal to pi', () => {
    expect(geo.areaOfCircle(1)).toBe(Math.PI);
  });
  test('Circle with radius 2 has area equal to ~12.56637', () => {
    expect(geo.areaOfCircle(2)).toBe(Math.PI * 2 * 2);
  });
  test('Circle with radius 7.5 has area equal to ~176.71459', () => {
    expect(geo.areaOfCircle(7.5)).toBe(Math.PI * 7.5 * 7.5);
  });
  test('Circle with radius 10 has area equal to ~314.15927', () => {
    expect(geo.areaOfCircle(10)).toBe(Math.PI * 10 * 10);
  });
  test('Circle with radius 0 has area equal to 0', () => {
    expect(geo.areaOfCircle(0)).toBe(0);
  });
});

describe('Circle circumference module', () => {
  test('Circle with radius 1 has circumference equal to ~6.28319', () => {
    expect(geo.circumferenceOfCircle(1)).toBe(2 * Math.PI);
  });
  test('Circle with radius 2 has circumference equal to ~12.56637', () => {
    expect(geo.circumferenceOfCircle(2)).toBe(2 * Math.PI * 2);
  });
  test('Circle with radius 7.5 has circumference equal to ~47.12389', () => {
    expect(geo.circumferenceOfCircle(7.5)).toBe(2 * Math.PI * 7.5);
  });
  test('Circle with radius 10 has circumference equal to ~62.83185', () => {
    expect(geo.circumferenceOfCircle(10)).toBe(2 * Math.PI * 10);
  });
  test('Circle with radius 0 has circumference equal to 0', () => {
    expect(geo.circumferenceOfCircle(0)).toBe(0);
  });
});

describe('Sphere volume module', () => {
  test('Sphere with radius 1 has volume equal to ~4.19', () => {
    expect(geo.volumeOfSphere(1)).toBe((4/3) * Math.PI);
  });
  test('Sphere with radius 2 has volume equal to ~33.51', () => {
    expect(geo.volumeOfSphere(2)).toBe((4/3) * Math.PI * 2 * 2 * 2);
  });
  test('Sphere with radius 7.5 has volume equal to ~1767.15', () => {
    expect(geo.volumeOfSphere(7.5)).toBe((4/3) * Math.PI * 7.5 * 7.5 * 7.5);
  });
  test('Sphere with radius 10 has volume equal to ~4188.79', () => {
    expect(geo.volumeOfSphere(10)).toBe((4/3) * Math.PI * 10 * 10 * 10);
  });
  test('Sphere with radius 0 has volume equal to 0', () => {
    expect(geo.volumeOfSphere(0)).toBe(0);
  });
});

describe('Triangle perimeter module', () => {
  test('Equilateral triangle /w side length 1 has perimeter equal to 3', () => {
    expect(geo.perimeterOfTriangle(1,1,1)).toBe(3);
  });
  test('Triangle /w side lengths 5, 6, 7 has perimeter equal to 18', () => {
    expect(geo.perimeterOfTriangle(5,6,7)).toBe(18);
  });
  test('Triangle /w side lengths 6, 14, 9 has perimeter equal to 29', () => {
    expect(geo.perimeterOfTriangle(6,14,9)).toBe(29);
  });
  test('Triangle /w side lengths 5.25, 8.75, 6.4 has perimeter equal to 20.4', () => {
    expect(geo.perimeterOfTriangle(5.25,8.75,6.4)).toBe(20.4);
  });
  test('Equilateral triangle /w side length 10 has perimeter equal to 30', () => {
    expect(geo.perimeterOfTriangle(10,10,10)).toBe(30);
  });
  test('Triangle /w side lengths 0, 0, 0 has perimeter equal to 0', () => {
    expect(geo.perimeterOfTriangle(0,0,0)).toBe(0);
  });
});

describe('Triangle area module', () => {
  test('Equilateral triangle /w side length 1 has area equal to ~0.433', () => {
    expect(geo.areaOfTriangle(1,1,1)).toBe(0.4330127018922193);
  });
  test('Triangle /w side lengths 5, 6, 7 has area equal to ~14.6969', () => {
    expect(geo.areaOfTriangle(5,6,7)).toBe(14.696938456699069);
  });
  test('Triangle /w side lengths 6, 14, 9 has area equal to ~18.41', () => {
    expect(geo.areaOfTriangle(5,6,7)).toBe(18.410255294264662);
  });
  test('Triangle /w side lengths 5.25, 8.75, 6.4 has area equal to ~16.679', () => {
    expect(geo.areaOfTriangle(5.25,8.75,6.4)).toBe(16.679325525931787);
  });
  test('Equilateral triangle /w side length 10 has area equal to ~43.3', () => {
    expect(geo.areaOfTriangle(10,10,10)).toBe(43.30127018922193);
  });
  test('Triangle /w side lengths 0, 0, 0 has area equal to 0', () => {
    expect(geo.areaOfTriangle(0,0,0)).toBe(0);
  });
});