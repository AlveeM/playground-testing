const { sum, mul } = require('../index')

test('sum adds numbers', () => {
  const actual = sum(3, 4)
  const expected = 7
  expect(actual).toBe(expected)
})

test('mul multiplies numbers', () => {
  const actual = mul(3, 4)
  const expected = 12
  expect(actual).toBe(expected)
})