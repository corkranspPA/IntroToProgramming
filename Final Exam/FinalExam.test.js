const fe = require('./FinalExam.js');

describe('max', () => {
  test('1, 5 -> 5', () => {
    expect(fe.max(1,5)).toBe(5);
  });
  test('5, 1 -> 5', () => {
    expect(fe.max(5,1)).toBe(5);
  });
  test('3, 3 -> 3', () => {
    expect(fe.max(3,3)).toBe(3);
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
    expect(fe.copyEnd('Hello')).toBe('lololo');
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
describe('copyStart', () => {
  test('Hello -> lololo', () => {
    expect(fe.copyStart('Hello')).toBe('HeHeHe');
  });
  test('ab -> ababab', () => {
    expect(fe.copyStart('ab')).toBe('ababab');
  });
  test('Hi -> HiHiHi', () => {
    expect(fe.copyStart('H')).toBe('HHH');
  });
});