function getWinner(player1, player2) {
  const winNum = Math.random();

  if (winNum < 1 / 3) {
    return player1;
  } else if (winNum < 2 / 3) {
    return player2;
  } else {
    return null;
  }
}

module.exports = { getWinner }