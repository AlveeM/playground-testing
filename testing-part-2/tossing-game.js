const utils = require('./utils')

function tossingGame(player1, player2) {
  const numsToWin = 2
  let p1Wins = 0
  let p2Wins = 0

  while (p1Wins < numsToWin && p2Wins < numsToWin) {
    const winner = utils.getWinner(player1, player2);
    if (winner == player1) {
      p1Wins++
    } else if (winner == player2) {
      p2Wins++
    }
  }

  return p1Wins > p2Wins ? player1 : player2;
}

module.exports = tossingGame