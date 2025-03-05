const fe = require('./FinalExam.js');

describe('pa', () => {
  test('Football -> Proctor Academy Football', () => {
    expect(fe.pa('Football')).toBe('Proctor Academy Football');
  });
  test('Field Hockey -> Proctor Academy Field Hockey', () => {
    expect(fe.pa('Field Hockey')).toBe('Proctor Academy Field Hockey');
  });
  test('Hornets -> Proctor Academy Hornets', () => {
    expect(fe.pa('Hornets')).toBe('Proctor Academy Hornets');
  });
  test('*empty string* -> Proctor Academy ', () => {
    expect(fe.pa('')).toBe('Proctor Academy ');
  });
});

describe('near100', () => {
  test('95 -> true', () => {
    expect(fe.near100(95)).toBe(true);
  });
  test('100 -> true', () => {
    expect(fe.near100(100)).toBe(true);
  });
  test('111 -> false', () => {
    expect(fe.near100(111)).toBe(false);
  });
  test('90 -> true', () => {
    expect(fe.near100(90)).toBe(true);
  });
  test('110 -> true', () => {
    expect(fe.near100(110)).toBe(true);
  });
  test('80 -> false', () => {
    expect(fe.near100(80)).toBe(false);
  });
});

describe('hasTeen', () => {
  test('13, 25, 30 -> true', () => {
    expect(fe.hasTeen(13, 25, 30)).toBe(true);
  });
  test('12, 19, 21 -> true', () => {
    expect(fe.hasTeen(12, 19, 21)).toBe(true);
  });
  test('10, 22, 9 -> false', () => {
    expect(fe.hasTeen(10, 22, 9)).toBe(false);
  });
  test('17, 18, 19 -> true', () => {
    expect(fe.hasTeen(17, 18, 19)).toBe(true);
  });
  test('1, 2, 3 -> false', () => {
    expect(fe.hasTeen(1, 2, 3)).toBe(false);
  });
});

describe('removeX', () => {
  test('xapple -> apple', () => {
    expect(fe.removeX('xapple')).toBe('apple');
  });
  test('axolotl -> aolotl', () => {
    expect(fe.removeX('axolotl')).toBe('aolotl');
  });
  test('box -> box', () => {
    expect(fe.removeX('box')).toBe('box');
  });
  test('xbox -> xbox', () => {
    expect(fe.removeX('xbox')).toBe('box');
  });
});

describe('canPack', () => {
  test('4 small & 1 medium can pack 9 -> true', () => {
    expect(fe.canPack(4, 1, 9)).toBe(true);
  });
  test('2 small & 3 medium cannot pack 13 -> false', () => {
    expect(fe.canPack(2, 3, 13)).toBe(false);
  });
  test('3 small & 2 medium can pack 11 -> true', () => {
    expect(fe.canPack(3, 2, 11)).toBe(true);
  });
  test('1 small & 0 medium cannot pack 5 -> false', () => {
    expect(fe.canPack(1, 0, 5)).toBe(false);
  });
  test('0 small & 2 medium can pack 10 -> true', () => {
    expect(fe.canPack(0, 2, 10)).toBe(true);
  });
  test('100 small & 0 medium can pack 99 -> true', () => {
    expect(fe.canPack(100, 0, 99)).toBe(true);
  });
  test('5 small & 1 medium can pack 6 -> true', () => {
    expect(fe.canPack(5, 1, 6)).toBe(true);
  });
  test('2 small & 1000000 medium can pack 1000003 -> false', () => {
    expect(fe.canPack(2, 1000000, 1000000)).toBe(false);
  });
});

describe('withoutP', () => {
  test('"pHi" -> "Hi"', () => {
    expect(fe.withoutP('pHi')).toBe('Hi');
  });
  test('"Hpi" -> "Hi"', () => {
    expect(fe.withoutP('Hpi')).toBe('Hi');
  });
  test('"Hi" -> "Hi"', () => {
    expect(fe.withoutP('Hi')).toBe('Hi');
  });
  test('"ppizza" -> "izza"', () => {
    expect(fe.withoutP('ppizza')).toBe('izza');
  });
  test('"popcorn" -> "opcorn"', () => {
    expect(fe.withoutP('popcorn')).toBe('opcorn');
  });
  test('"apple" -> "aple"', () => {
    expect(fe.withoutP('apple')).toBe('aple');
  });
});
