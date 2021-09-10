const assert = require('assert')
const tossingGame = require('../tossing-game')
const utils = require('../utils')

const initialGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

const winner = tossingGame('Chris', 'Tracey')
assert.strictEqual(winner, 'Chris')

utils.getWinner = initialGetWinner;