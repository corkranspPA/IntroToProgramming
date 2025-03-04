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
describe('in1020', () => {
  test('1 -> false', () => {
    expect(fe.in1020(1)).toBe(false);
  });
  test('21 -> false', () => {
    expect(fe.in1020(21)).toBe(false);
  });
  test('10 -> true', () => {
    expect(fe.in1020(10)).toBe(true);
  });
  test('20 -> true', () => {
    expect(fe.in1020(20)).toBe(true);
  });
  test('20 -> true', () => {
    expect(fe.in1020(15)).toBe(true);
  });
  test('20 -> true', () => {
    expect(fe.in1020(-15)).toBe(false);
  });
});
describe('eitherIn1020', () => {
  test('21, 9 -> false', () => {
    expect(fe.eitherIn1020(21, 9)).toBe(false);
  });
  test('9, 21 -> false', () => {
    expect(fe.eitherIn1020(9, 21)).toBe(false);
  });
  test('19, 9 -> true', () => {
    expect(fe.eitherIn1020(19, 9)).toBe(true);
  });
  test('21, 11 -> true', () => {
    expect(fe.eitherIn1020(21, 11)).toBe(true);
  });
  test('19, 16 -> true', () => {
    expect(fe.eitherIn1020(19, 16)).toBe(true);
  });
  test('-17, 0 -> false', () => {
    expect(fe.eitherIn1020(-17, 0)).toBe(false);
  });
});
describe('delDel', () => {
  test('abc -> abc', () => {
    expect(fe.delDel('abc')).toBe('abc');
  });
  test('adelbc -> abc', () => {
    expect(fe.delDel('adelbc')).toBe('abc');
  });
  test('xdelaware -> xaware', () => {
    expect(fe.delDel('xdelaware')).toBe('xaware');
  });
  test('delabc -> delabc', () => {
    expect(fe.delDel('delabc')).toBe('delabc');
  });
  test('abdelc -> abdelc', () => {
    expect(fe.delDel('delabc')).toBe('delabc');
  });
});
describe('makeBricks', () => {
  test('3 small & 1 big brick can make 8 -> true', () => {
    expect(fe.makeBricks(3, 1, 8)).toBe(true);
  });
  test('3 small & 1 big brick can make 9 -> false', () => {
    expect(fe.makeBricks(3, 1, 9)).toBe(false);
  });
  test('3 small & 2 big bricks can make 10 -> true', () => {
    expect(fe.makeBricks(3, 2, 10)).toBe(true);
  });
  test('7 small & 1 big brick can make 13 -> false', () => {
    expect(fe.makeBricks(7, 1, 13)).toBe(false);
  });
  test('2 small & 1000000 big bricks can make 1000003 -> false', () => {
    expect(fe.makeBricks(2, 1000000, 100003)).toBe(false);
  });
  test('20 small & 0 big bricks can make 19 -> true', () => {
    expect(fe.makeBricks(20, 0, 19)).toBe(true);
  });
  test('20 small & 0 big bricks can make 21 -> false', () => {
    expect(fe.makeBricks(20, 0, 21)).toBe(false);
  });
  test('0 small & 1 big brick can make 5 -> true', () => {
    expect(fe.makeBricks(0, 1, 5)).toBe(true);
  });
  test('0 small & 100 big bricks can make 5 -> true', () => {
    expect(fe.makeBricks(0, 100, 5)).toBe(true);
  });
  test('0 small & 100 big bricks can make 1 -> false', () => {
    expect(fe.makeBricks(0, 100, 1)).toBe(false);
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
  test('*empty string*, dog -> cat', () => {
    expect(fe.dupliCat('', 'dog')).toBe('dog');
  });
  test('x, x -> *empty string*', () => {
    expect(fe.dupliCat('x', 'x')).toBe('x');
  });
  test('xx, xx -> xxx', () => {
    expect(fe.dupliCat('xx', 'xx')).toBe('xxx');
  });
});