const fe = require('./FinalExam.js');

describe('helloName', () => {
  test('Alice -> Hello, Alice!', () => {
    expect(fe.helloName('Alice')).toBe('Hello Alice!');
  });
  test('Bob -> Hello, Bob!', () => {
    expect(fe.helloName('Bob')).toBe('Hello Bob!');
  });
  test('Cthulu, the Great Dreamer -> Hello Cthulu, the Great Dreamer!', () => {
    expect(fe.helloName('Cthulu, the Great Dreamer')).toBe('Hello Cthulu, the Great Dreamer!');
  });
  test(' -> Hello, !', () => {
    expect(fe.helloName('')).toBe('Hello !');
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
  test('-21 -> 0', () => {
    expect(fe.diff21(-21)).toBe(42);
  });
});
describe('blackjack', () => {
  test('21, 1 -> 21', () => {
    expect(fe.blackjack(21, 1)).toBe(21);
  });
  test('1, 21 -> 21', () => {
    expect(fe.blackjack(1, 21)).toBe(21);
  });
  test('22, 1 -> 1', () => {
    expect(fe.blackjack(22, 1)).toBe(1);
  });
  test('17, 20 -> 20', () => {
    expect(fe.blackjack(17, 20)).toBe(20);
  });
  test('19, 16 -> 19', () => {
    expect(fe.blackjack(19, 16)).toBe(19);
  });
  test('-17, 0 -> 0', () => {
    expect(fe.blackjack(-17, 0)).toBe(0);
  });
});
describe('biggest', () => {
  test('1,2,4 -> 4', () => {
    expect(fe.biggest(1,2,4)).toBe(4);
  });
  test('1,2,2 -> 2', () => {
    expect(fe.biggest(1,2,2)).toBe(2);
  });
  test('1,1,1 -> 1', () => {
    expect(fe.biggest(1,1,1)).toBe(1);
  });
  test('-3,-1,-2 -> 1', () => {
    expect(fe.biggest(-3,-1,-2)).toBe(-1);
  });
});
describe('abcOrder', () => {
  test('1,2,4 -> true', () => {
    expect(fe.abcOrder(1, 2, 4)).toBe(true);
  });
  test('1,2,1 -> false', () => {
    expect(fe.abcOrder(1, 2, 1)).toBe(false);
  });
  test('1,1,2 -> false', () => {
    expect(fe.abcOrder(1, 1, 2)).toBe(false);
  });
  test('10,100,1000 -> true', () => {
    expect(fe.abcOrder(10, 100, 1000)).toBe(true);
  });
  test('-1000,-100,-10 -> true', () => {
    expect(fe.abcOrder(-1000, -100, -10)).toBe(true);
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