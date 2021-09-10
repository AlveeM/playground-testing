const assert = require('assert')
const tossingGame = require('../tossing-game')
const utils = require('../utils')

function fn(callback) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return callback(...args);
  }
  
  mockFn.mock = { calls: [] }
  return mockFn;
}

const initialGetWinner = utils.getWinner;
utils.getWinner = fn((p1, p2) => p1);

const winner = tossingGame('Chris', 'Tracey')
assert.strictEqual(winner, 'Chris')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Chris', 'Tracey'],
  ['Chris', 'Tracey']
])

utils.getWinner = initialGetWinner;