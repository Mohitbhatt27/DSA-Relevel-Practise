//LeetCode 121
//121. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let profit_max = 0;
  let curr_min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - curr_min > profit_max) {
      profit_max = prices[i] - curr_min; //selling
    }

    if (prices[i] < curr_min) {
      curr_min = prices[i]; //and we buy on here
    }
  }
  return profit_max;
};
