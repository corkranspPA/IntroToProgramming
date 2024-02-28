const fe = require('./FinalExam.js');

describe('divisibleBy', () => {
  test('4, 2 -> true', () => {
    expect(fe.divisibleBy(4,2)).toBe(true);
  });
  test('5, 2 -> false', () => {
    expect(fe.divisibleBy(5,2)).toBe(false);
  });
  test('25, 5 -> true', () => {
    expect(fe.divisibleBy(25,5)).toBe(true);
  });
});
describe('diff21', () => {
  test('19 -> 2', () => {
    expect(fe.diff21(19)).toBe(2);
  });
  test('100 -> 79', () => {
    expect(fe.diff21(100)).toBe(79);
  });
  test('21 -> 0', () => {
    expect(fe.diff21(21)).toBe(0);
  });
});
describe('positiveNegative', () => {
  test('1, -1 -> true', () => {
    expect(fe.positiveNegative(1, -1)).toBe(true);
  });
  test('-1, 1 -> true', () => {
    expect(fe.positiveNegative(-1, 1)).toBe(true);
  });
  test('-4, -5 -> false', () => {
    expect(fe.positiveNegative(-4, -5)).toBe(false);
  });
  test('4, 5 -> false', () => {
    expect(fe.positiveNegative(4, 5)).toBe(false);
  });
});
describe('copyEnd', () => {
  test('Hello -> lololo', () => {
    expect(fe.copyEnd('Proctor')).toBe('ororor');
  });
  test('ab -> ababab', () => {
    expect(fe.copyEnd('ab')).toBe('ababab');
  });
  test('Hi -> HiHiHi', () => {
    expect(fe.copyEnd('Hi')).toBe('HiHiHi');
  });
});
describe('abcOrder', () => {
  test('1,2,4,false -> true', () => {
    expect(fe.abcOrder(1, 2, 4, false)).toBe(true);
  });
  test('1,2,1,false -> false', () => {
    expect(fe.abcOrder(1, 2, 1, false)).toBe(false);
  });
  test('1,1,2,true -> true', () => {
    expect(fe.abcOrder(1, 1, 2, true)).toBe(true);
  });
});
describe('dupliCat', () => {
  test('good, dog -> goodog', () => {
    expect(fe.dupliCat('good', 'dog')).toBe('goodog');
  });
  test('hello, kitty -> hellokitty', () => {
    expect(fe.dupliCat('hello', 'kitty')).toBe('hellokitty');
  });
  test('cat, *empty string* -> cat', () => {
    expect(fe.dupliCat('cat', '')).toBe('cat');
  });
});