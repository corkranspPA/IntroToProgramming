const fe = require('./FinalExam.js');

//
// Easy - 1 pt
//
describe('greetClass', () => {
  test('Alice -> "Welcome to class, Alice!"', () => {
    expect(fe.greetClass('Alice')).toBe('Welcome to class, Alice!');
  });

  test('Jordan -> "Welcome to class, Jordan!"', () => {
    expect(fe.greetClass('Jordan')).toBe('Welcome to class, Jordan!');
  });

  test('multi-word name -> "Welcome to class, Dr. Who!"', () => {
    expect(fe.greetClass('Dr. Who')).toBe('Welcome to class, Dr. Who!');
  });

  test('empty string -> "Welcome to class, !"', () => {
    expect(fe.greetClass('')).toBe('Welcome to class, !');
  });
});

describe('isPassing', () => {
  test('59 -> false (just below passing)', () => {
    expect(fe.isPassing(59)).toBe(false);
  });

  test('60 -> true (boundary passing grade)', () => {
    expect(fe.isPassing(60)).toBe(true);
  });

  test('100 -> true (high passing grade)', () => {
    expect(fe.isPassing(100)).toBe(true);
  });

  test('0 -> false (clearly failing)', () => {
    expect(fe.isPassing(0)).toBe(false);
  });

  test('-10 -> false (negative, still failing)', () => {
    expect(fe.isPassing(-10)).toBe(false);
  });
});

//
// Medium - 2 pts
//
describe('in3050', () => {
  test('35, 40 -> true (both in 30..50)', () => {
    expect(fe.in3050(35, 40)).toBe(true);
  });

  test('30, 50 -> true (30..50 boundaries)', () => {
    expect(fe.in3050(30, 50)).toBe(true);
  });

  test('65, 70 -> true (both in 60..80)', () => {
    expect(fe.in3050(65, 70)).toBe(true);
  });

  test('60, 80 -> true (60..80 boundaries)', () => {
    expect(fe.in3050(60, 80)).toBe(true);
  });

  test('35, 75 -> false (each in different valid ranges)', () => {
    expect(fe.in3050(35, 75)).toBe(false);
  });

  test('20, 40 -> false (one outside all ranges)', () => {
    expect(fe.in3050(20, 40)).toBe(false);
  });

  test('55, 85 -> false (both outside both ranges)', () => {
    expect(fe.in3050(55, 85)).toBe(false);
  });
});

describe('removeXStart', () => {
  test('"xapple" -> "apple" (starts with x)', () => {
    expect(fe.removeXStart('xapple')).toBe('apple');
  });

  test('"x" -> "" (single x)', () => {
    expect(fe.removeXStart('x')).toBe('');
  });

  test('"box" -> "box" (does not start with x)', () => {
    expect(fe.removeXStart('box')).toBe('box');
  });

  test('"xxbox" -> "xbox" (only remove first char if x)', () => {
    expect(fe.removeXStart('xxbox')).toBe('xbox');
  });

  test('empty string -> empty string', () => {
    expect(fe.removeXStart('')).toBe('');
  });
});

//
// Hard - 3 pts
//
describe('hasSixSeven', () => {
  test('"67" -> true (exact match)', () => {
    expect(fe.hasSixSeven('67')).toBe(true);
  });

  test('"5678" -> true (67 in the middle)', () => {
    expect(fe.hasSixSeven('5678')).toBe(true);
  });

  test('"123467" -> true (67 at the end)', () => {
    expect(fe.hasSixSeven('123467')).toBe(true);
  });

  test('"67123" -> true (67 at the start)', () => {
    expect(fe.hasSixSeven('67123')).toBe(true);
  });

  test('"1267" -> true (67 at the end of short string)', () => {
    expect(fe.hasSixSeven('1267')).toBe(true);
  });

  test('"1234" -> false (no 67)', () => {
    expect(fe.hasSixSeven('1234')).toBe(false);
  });

  test('"" -> false (empty string)', () => {
    expect(fe.hasSixSeven('')).toBe(false);
  });

  test('"6 7" -> false (characters separated)', () => {
    expect(fe.hasSixSeven('6 7')).toBe(false);
  });
});

describe('repeatFront', () => {
  test('"Chocolate", 4 -> "ChocChoChC"', () => {
    expect(fe.repeatFront('Chocolate', 4)).toBe('ChocChoChC');
  });

  test('"Python", 3 -> "PytPyP"', () => {
    expect(fe.repeatFront('Python', 3)).toBe('PytPyP');
  });

  test('"Hi", 1 -> "H"', () => {
    expect(fe.repeatFront('Hi', 1)).toBe('H');
  });

  test('"Abc", 2 -> "AbA"', () => {
    expect(fe.repeatFront('Abc', 2)).toBe('AbA');
  });

  test('"Code", 4 -> "CodeCodCoC"', () => {
    expect(fe.repeatFront('Code', 4)).toBe('CodeCodCoC');
  });
});