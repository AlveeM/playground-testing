const assert = require('assert')
const tossingGame = require('../tossing-game')
const utils = require('../utils')

function fn(callback) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return callback(...args);
  }
  
  mockFn.mock = { calls: [] }
  mockFn.mockImplementation = newImplementation => (callback = newImplementation);
  return mockFn;
}

function spyOn(obj, prop) {
  const initialVal = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = initialVal);
}

spyOn(utils, 'getWinner');
utils.getWinner.mockImplementation((p1, p2) => p1);

const winner = tossingGame('Chris', 'Tracey')
assert.strictEqual(winner, 'Chris')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Chris', 'Tracey'],
  ['Chris', 'Tracey']
])

utils.getWinner.mockRestore();