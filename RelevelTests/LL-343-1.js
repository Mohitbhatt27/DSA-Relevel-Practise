var isWinner = function (player1, player2) {
  let score1 = 0;
  let score2 = 0;
  for (let i = 0; i < player1.length; i++) {
    if (i >= 1 && player1[i - 1] == 10) {
      score1 += 2 * player1[i];
    } else if (i >= 2 && player1[i - 2] == 10) {
      score1 += 2 * player1[i];
    } else {
      score1 += player1[i];
    }
    if (i >= 1 && player2[i - 1] == 10) {
      score2 += 2 * player2[i];
    } else if (i >= 2 && player2[i - 2] == 10) {
      score2 += 2 * player2[i];
    } else {
      score2 += player2[i];
    }
  }
  if (score1 > score2) {
    return 1;
  } else if (score2 > score1) {
    return 2;
  } else {
    return 0;
  }
};

console.log(isWinner([10, 2, 2, 3], [3, 8, 4, 5]));
