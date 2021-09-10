const { sum, mul } = require('../index')

let actual, expected

actual = sum(3, 4)
expected = 7
if (actual !== expected) {
  throw new Error(`${actual} is not equal to ${expected}`)
}

actual = mul(3, 4)
expected = 12
if (actual !== expected) {
  throw new Error(`${actual} is not equal to ${expected}`)
}