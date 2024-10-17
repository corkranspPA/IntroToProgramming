const str = require('./stringHelper.js');

describe('endLy', () => {
  test('oddly -> true', () => {
    expect(str.endLy('oddly')).toBe(true);
  });
  test('odd -> false', () => {
    expect(str.endLy('odd')).toBe(false);
  });
  test('oddli -> false', () => {
    expect(str.endLy('oddli')).toBe(false);
  });
  test('ly -> true', () => {
    expect(str.endLy('ly')).toBe(true);
  });
  test('-> false', () => {
    expect(str.endLy('')).toBe(false);
  });
});

describe('proctorColor', () => {
  test('greenxx -> green', () => {
    expect(str.proctorColor('greenxx')).toBe('green');
  });
  test('xxwhite ->', () => {
    expect(str.proctorColor('xxwhite')).toBe('');
  });
  test('whiteTimes -> white', () => {
    expect(str.proctorColor('whiteTimes')).toBe('white');
  });
  test('blue ->', () => {
    expect(str.proctorColor('blue')).toBe('');
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

describe('lastFirst', () => {
  test('code -> eodc', () => {
    expect(str.lastFirst('code')).toBe('eodc');
  });
  test('abc -> cba', () => {
    expect(str.lastFirst('abc')).toBe('cba');
  });
  test('a -> a', () => {
    expect(str.lastFirst('ab')).toBe('ba');
  });
  test('Proctor -> rroctoP', () => {
    expect(str.lastFirst('Proctor')).toBe('rroctoP');
  });
});

describe('fizzString', () => {
  test('fig -> Fizz', () => {
    expect(str.fizzString('fig')).toBe('Fizz');
  });
  test('dib -> Buzz', () => {
    expect(str.fizzString('dib')).toBe('Buzz');
  });
  test('fib -> FizzBuzz', () => {
    expect(str.fizzString('fib')).toBe('FizzBuzz');
  });
  test('Proctor -> Proctor', () => {
    expect(str.fizzString('Proctor')).toBe('Proctor');
  });
});

describe('isDoubled', () => {
  test('BooBoo -> True', () => {
    expect(str.doubleUp('BooBoo')).toBe(true);
  });
  test('HelloThere -> false', () => {
    expect(str.doubleUp('HelloThere')).toBe(false);
  });
  test('aa -> true', () => {
    expect(str.doubleUp('aa!')).toBe(true);
  });
  test('Proctor -> false', () => {
    expect(str.doubleUp('Proctor')).toBe(false);
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