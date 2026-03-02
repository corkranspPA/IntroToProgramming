const fe = require('./FinalExam.js');

//
// Easy - 1 pt
//
describe('welcomeStudent', () => {
  test('Ava -> "Hello, Ava — welcome in!"', () => {
    expect(fe.welcomeStudent('Ava')).toBe('Hello, Ava — welcome in!');
  });

  test('multi-word name -> "Hello, Mr. Smith — welcome in!"', () => {
    expect(fe.welcomeStudent('Mr. Smith')).toBe('Hello, Mr. Smith — welcome in!');
  });

  test('empty string -> "Hello,  — welcome in!"', () => {
    expect(fe.welcomeStudent('')).toBe('Hello,  — welcome in!');
  });

  test('name with punctuation -> works', () => {
    expect(fe.welcomeStudent('Dr. Who')).toBe('Hello, Dr. Who — welcome in!');
  });
});

describe('isEvenScore', () => {
  test('10 -> true', () => {
    expect(fe.isEvenScore(10)).toBe(true);
  });

  test('7 -> false', () => {
    expect(fe.isEvenScore(7)).toBe(false);
  });

  test('0 -> true', () => {
    expect(fe.isEvenScore(0)).toBe(true);
  });

  test('-2 -> true (negative even)', () => {
    expect(fe.isEvenScore(-2)).toBe(true);
  });

  test('-3 -> false (negative odd)', () => {
    expect(fe.isEvenScore(-3)).toBe(false);
  });
});

describe('addOne', () => {
  test('4 -> 5', () => {
    expect(fe.addOne(4)).toBe(5);
  });

  test('-1 -> 0', () => {
    expect(fe.addOne(-1)).toBe(0);
  });

  test('0 -> 1', () => {
    expect(fe.addOne(0)).toBe(1);
  });
});

describe('makeEmail', () => {
  test('"spencer" -> "spencer@proctoracademy.org"', () => {
    expect(fe.makeEmail('spencer')).toBe('spencer@proctoracademy.org');
  });

  test('"alice" -> "alice@proctoracademy.org"', () => {
    expect(fe.makeEmail('alice')).toBe('alice@proctoracademy.org');
  });

  test('empty string -> "@proctoracademy.org"', () => {
    expect(fe.makeEmail('')).toBe('@proctoracademy.org');
  });

  test('name with dot -> "dr.who@proctoracademy.org"', () => {
    expect(fe.makeEmail('dr.who')).toBe('dr.who@proctoracademy.org');
  });
});

//
// Medium - 2 pts
//
describe('in1020or3040', () => {
  test('12, 19 -> true (both in 10..20)', () => {
    expect(fe.in1020or3040(12, 19)).toBe(true);
  });

  test('10, 20 -> true (10..20 boundaries)', () => {
    expect(fe.in1020or3040(10, 20)).toBe(true);
  });

  test('30, 40 -> true (30..40 boundaries)', () => {
    expect(fe.in1020or3040(30, 40)).toBe(true);
  });

  test('33, 39 -> true (both in 30..40)', () => {
    expect(fe.in1020or3040(33, 39)).toBe(true);
  });

  test('15, 35 -> false (split across ranges)', () => {
    expect(fe.in1020or3040(15, 35)).toBe(false);
  });

  test('9, 20 -> false (one below 10)', () => {
    expect(fe.in1020or3040(9, 20)).toBe(false);
  });

  test('41, 39 -> false (one above 40)', () => {
    expect(fe.in1020or3040(41, 39)).toBe(false);
  });
});

describe('dropZEnd', () => {
  test('"quiz" -> "qui" (ends with z)', () => {
    expect(fe.dropZEnd('quiz')).toBe('qui');
  });

  test('"buzz" -> "buz" (remove only last z)', () => {
    expect(fe.dropZEnd('buzz')).toBe('buz');
  });

  test('"zoo" -> "zoo" (does not end with z)', () => {
    expect(fe.dropZEnd('zoo')).toBe('zoo');
  });

  test('"z" -> "" (single z)', () => {
    expect(fe.dropZEnd('z')).toBe('');
  });

  test('empty string -> empty string', () => {
    expect(fe.dropZEnd('')).toBe('');
  });

  test('"zz" -> "z" (remove only one z)', () => {
    expect(fe.dropZEnd('zz')).toBe('z');
  });
});

describe('withoutFirstAndLast', () => {
  test('"Hello" -> "ell"', () => {
    expect(fe.withoutFirstAndLast('Hello')).toBe('ell');
  });

  test('"ab" -> ""', () => {
    expect(fe.withoutFirstAndLast('ab')).toBe('');
  });

  test('"a" -> ""', () => {
    expect(fe.withoutFirstAndLast('a')).toBe('');
  });

  test('"" -> ""', () => {
    expect(fe.withoutFirstAndLast('')).toBe('');
  });

  test('"JavaScript" -> "avaScrip"', () => {
    expect(fe.withoutFirstAndLast('JavaScript')).toBe('avaScrip');
  });
});

describe('sumOrDouble', () => {
  test('1, 2 -> 3', () => {
    expect(fe.sumOrDouble(1, 2)).toBe(3);
  });

  test('5, 5 -> 20', () => {
    expect(fe.sumOrDouble(5, 5)).toBe(20);
  });

  test('0, 0 -> 0', () => {
    expect(fe.sumOrDouble(0, 0)).toBe(0);
  });

  test('-3, -3 -> -12', () => {
    expect(fe.sumOrDouble(-3, -3)).toBe(-12);
  });

  test('-3, 3 -> 0', () => {
    expect(fe.sumOrDouble(-3, 3)).toBe(0);
  });
});

//
// Hard - 3 pts (loop required)
//
describe('hasHiThere', () => {
  test('"hi!" -> true (exact match)', () => {
    expect(fe.hasHiThere('hi!')).toBe(true);
  });

  test('"say hi! now" -> true (in the middle)', () => {
    expect(fe.hasHiThere('say hi! now')).toBe(true);
  });

  test('"hi!there" -> true (at the start)', () => {
    expect(fe.hasHiThere('hi!there')).toBe(true);
  });

  test('"well hi!" -> true (at the end)', () => {
    expect(fe.hasHiThere('well hi!')).toBe(true);
  });

  test('"h i!" -> false (not contiguous)', () => {
    expect(fe.hasHiThere('h i!')).toBe(false);
  });

  test('"HI!" -> false (case-sensitive)', () => {
    expect(fe.hasHiThere('HI!')).toBe(false);
  });

  test('"" -> false (empty string)', () => {
    expect(fe.hasHiThere('')).toBe(false);
  });

  test('"hi" -> false (missing !)', () => {
    expect(fe.hasHiThere('hi')).toBe(false);
  });
});

describe('staircase', () => {
  test('"Python", 4 -> "PPyPytPyth"', () => {
    expect(fe.staircase('Python', 4)).toBe('PPyPytPyth');
  });

  test('"Code", 3 -> "CCoCod"', () => {
    expect(fe.staircase('Code', 3)).toBe('CCoCod');
  });

  test('"Hi", 1 -> "H"', () => {
    expect(fe.staircase('Hi', 1)).toBe('H');
  });

  test('"Abcdef", 2 -> "AAb"', () => {
    expect(fe.staircase('Abcdef', 2)).toBe('AAb');
  });

  test('"Zebra", 5 -> "ZZeZebZebrZebra"', () => {
    expect(fe.staircase('Zebra', 5)).toBe('ZZeZebZebrZebra');
  });
});

describe('hasPair', () => {
  test('"book" -> true (oo)', () => {
    expect(fe.hasPair('book')).toBe(true);
  });

  test('"abc" -> false', () => {
    expect(fe.hasPair('abc')).toBe(false);
  });

  test('"aabb" -> true (aa)', () => {
    expect(fe.hasPair('aabb')).toBe(true);
  });

  test('"a" -> false (too short)', () => {
    expect(fe.hasPair('a')).toBe(false);
  });

  test('"" -> false (empty)', () => {
    expect(fe.hasPair('')).toBe(false);
  });

  test('"Mississippi" -> true (ss)', () => {
    expect(fe.hasPair('Mississippi')).toBe(true);
  });
});

describe('countEvens', () => {
  test('[1,2,3,4] -> 2', () => {
    expect(fe.countEvens([1, 2, 3, 4])).toBe(2);
  });

  test('[] -> 0', () => {
    expect(fe.countEvens([])).toBe(0);
  });

  test('[0, -2, 5] -> 2', () => {
    expect(fe.countEvens([0, -2, 5])).toBe(2);
  });

  test('[7, 9, 11] -> 0', () => {
    expect(fe.countEvens([7, 9, 11])).toBe(0);
  });

  test('[2, 2, 2, 2] -> 4', () => {
    expect(fe.countEvens([2, 2, 2, 2])).toBe(4);
  });
});
