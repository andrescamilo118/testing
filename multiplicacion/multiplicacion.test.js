const multi = require('./multiplicacion');

test('adds 1 * 2 to equal 2', () => {
  expect(multi(1, 2)).toBe(2);
});