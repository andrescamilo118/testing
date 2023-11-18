const rest = require('./resta');

test('adds 1 - 3 to equal 2', () => {
  expect(rest(1, 2)).toBe(3);
});