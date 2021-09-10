const { sum, mul } = require('../index')

let actual, expected

actual = sum(3, 4)
expected = 7
expect(actual).toBe(expected)

actual = mul(3, 4)
expected = 12
expect(actual).toBe(expected)

function expect(correctVal) {
  return {
    toBe(expectedVal) {
      if (correctVal !== expectedVal) {
        throw new Error(`${correctVal} is not equal to ${expectedVal}`)
      }
    }
  }
}