const tossingGame = require('../tossing-game')
const utils = require('../utils')

test('returns player1 as winner if player1 wins more times', () => {
  jest.spyOn(utils, 'getWinner');
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = tossingGame('Chris', 'Tracey');
  console.log(utils.getWinner)
  
  expect(winner).toBe('Chris');
  expect(utils.getWinner).toHaveBeenCalledWith('Chris', 'Tracey');
  expect(utils.getWinner).toHaveBeenCalledTimes(2);

  utils.getWinner.mockRestore();
})
