const sum = require('./sum');

test('add 1 + 2 to to equal 3', function () {
    expect(sum (1, 2)).toBe(3);
});