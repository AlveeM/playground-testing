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

function expect(correctVal) {
  return {
    toBe(expectedVal) {
      if (correctVal !== expectedVal) {
        throw new Error(`${correctVal} is not equal to ${expectedVal}`)
      }
    }
  }
}

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch(error) {
    console.log(`𐄂 ${title}`)
    console.log(error)
  }
}