const testing = require('./testing.js');

//These are the tests found in Testing.ipynb
test('correct area - 1 x 1', () => {
    expect(testing.areaOfRect(1, 1)).toBe(1);
});

test('correct area - 2 x 2', () => {
    expect(testing.areaOfRect(2, 2)).toBe(4);
});

  //This test will fail, unless you've fixed testing.js!
test('correct area - 4 x 6', () => {
    expect(testing.areaOfRect(4, 6)).toBe(24);
});

test('correct area - 0 x 99', () => {
    expect(testing.areaOfRect(0, 99)).toBe(0);
});

  //Here are some more thorough randomized tests
test('correct area - random integers 0 - 9', () => {
    let l = Math.floor(Math.random() * 10);
    let w = Math.floor(Math.random() * 10);
    expect(testing.areaOfRect(w, l)).toBe(w * l);
});

test('correct area - random integers 0 - 9, ten rounds', () => {
    let l, w;
    for(let i = 0; i < 10; i++) {
        l = Math.floor(Math.random() * 10);
        w = Math.floor(Math.random() * 10);
        expect(testing.areaOfRect(w, l)).toBe(w * l);
    }
});

  