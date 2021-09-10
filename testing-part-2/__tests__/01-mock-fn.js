const tossingGame = require('../tossing-game')
const utils = require('../utils')

test('returns player1 as winner if player1 wins more times', () => {
  const initialGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  // console.log(utils.getWinner.mock);

  const winner = tossingGame('Chris', 'Tracey');
  console.log(utils.getWinner.mock);
  
  expect(winner).toBe('Chris');
  // expect(utils.getWinner).toHaveBeenCalledWith('Chris', 'Tracey');
  // expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner.mock.calls).toEqual([
    ['Chris', 'Tracey'],
    ['Chris', 'Tracey'],
  ])

  utils.winner = initialGetWinner;
})

// test('returns player2 as winner if player2 wins more times', () => {
//   utils.getWinner = jest.fn((p1, p2) => p2);

//   const winner = tossingGame('Chris', 'Tracey');
//   expect(winner).toBe('Tracey');
// })
