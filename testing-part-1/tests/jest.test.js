const { sumAsync, mulAsync } = require('../index')

test('sumAsync adds numbers', async () => {
  const actual = await sumAsync(3, 4)
  const expected = 7
  expect(actual).toBe(expected)
})

test('mulAsync multiplies numbers', async () => {
  const actual = await mulAsync(3, 4)
  const expected = 12
  expect(actual).toBe(expected)
})