import {describe, expect, test} from '@jest/globals';
const convert = require('./tempConvert')

test('correctly converts from F to C - fixed value 32', () => {
    expect(convert.fahrenheitToCelsius(32)).toBe(0);
  });

test('correctly converts from F to C - fixed value 212', () => {
    expect(convert.fahrenheitToCelsius(212)).toBe(100);
  });

test('correctly converts from F to C - random value 0-212', () => {
    let r = Math.floor(Math.random() * 213);
    expect(convert.fahrenheitToCelsius(r)).toBe((r - 32) * (5 / 9));
  });

test('correctly converts from C to F - fixed value 0', () => {
    expect(convert.celsiusToFahrenheit(0)).toBe(32);
  });

test('correctly converts from C to F - fixed value 100', () => {
    expect(convert.celsiusToFahrenheit(100)).toBe(212);
  });

test('correctly converts from C to F - random value 0-100', () => {
    let r = Math.floor(Math.random() * 101);
    expect(convert.celsiusToFahrenheit(r)).toBe(((9 / 5) * r) + 32);
  });