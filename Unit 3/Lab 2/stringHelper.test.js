const str = require('./stringHelper.js');

describe('notString', () => {
  test('candy -> not candy', () => {
    expect(str.notString('candy')).toBe('not candy');
  });
  test('x -> not x', () => {
    expect(str.notString('x')).toBe('not x');
  });
  test('bad -> not bad', () => {
    expect(str.notString('bad')).toBe('not bad');
  });
  test('-> not ', () => {
    expect(str.notString('')).toBe('not ');
  });
});

describe('makeAbba', () => {
  test('Hi, Bye -> HiByeByeHi', () => {
    expect(str.makeAbba('Hi', 'Bye')).toBe('HiByeByeHi');
  });
  test('Yo, Alice -> YoAliceAliceYo', () => {
    expect(str.makeAbba('Yo', 'Alice')).toBe('YoAliceAliceYo');
  });
  test('What, Up -> WhatUpUpWhat', () => {
    expect(str.makeAbba('What','Up')).toBe('WhatUpUpWhat');
  });
  test(',->', () => {
    expect(str.makeAbba('','')).toBe('');
  });
});
describe('missingChar', () => {
  test('kitten, 1 -> ktten', () => {
    expect(str.missingChar('kitten', 1)).toBe('ktten');
  });
  test('kitten, 0 -> itten', () => {
    expect(str.missingChar('kitten', 0)).toBe('itten');
  });
  test('kitten, 4 -> kittn', () => {
    expect(str.missingChar('kitten', 4)).toBe('kittn');
  });
  test('x, 0->', () => {
    expect(str.missingChar('x', 0)).toBe('');
  });
});
describe('frontBack', () => {
  test('code -> eodc', () => {
    expect(str.frontBack('code')).toBe('eodc');
  });
  test('abc -> cba', () => {
    expect(str.frontBack('abc')).toBe('cba');
  });
  test('a -> a', () => {
    expect(str.frontBack('ab')).toBe('ba');
  });
  test('Proctor -> rroctoP', () => {
    expect(str.frontBack('Proctor')).toBe('rroctoP');
  });
});
describe('doubleUp', () => {
  test('The -> TThhee', () => {
    expect(str.doubleUp('The')).toBe('TThhee');
  });
  test('Hi-There -> HHii--TThheerree', () => {
    expect(str.doubleUp('Hi-There')).toBe('HHii--TThheerree');
  });
  test('ItP! -> IIttPP!!', () => {
    expect(str.doubleUp('ItP!')).toBe('IIttPP!!');
  });
  test('Proctor -> PPrrooccttoorr', () => {
    expect(str.doubleUp('Proctor')).toBe('PPrrooccttoorr');
  });
});
describe('countHi', () => {
  test('abc hi ho -> 1', () => {
    expect(str.countHi('abc hi ho')).toBe(1);
  });
  test('ABChi hi -> 2', () => {
    expect(str.countHi('ABChi hi')).toBe(2);
  });
  test('hihi -> 2', () => {
    expect(str.countHi('hihi')).toBe(2);
  });
  test('Proctor! -> 0', () => {
    expect(str.countHi('Proctor!')).toBe(0);
  });
});
describe('middleThree', () => {
  test('Candy -> and', () => {
    expect(str.middleThree('Candy')).toBe('and');
  });
  test('and -> and', () => {
    expect(str.middleThree('and')).toBe('and');
  });
  test('solving -> lvi', () => {
    expect(str.middleThree('solving')).toBe('lvi');
  });
  test('Congratulations on finishing the lab! -> n f', () => {
    expect(str.middleThree('Congratulations on finishing the lab!')).toBe('n f');
  });
});