// // Source : https://leetcode.com/problems/min-cost-climbing-stairs/

function minCostClimbingStairsBU(cost, n) {
  
  let iMinusTwo = cost[0];
  let iMinusOne = cost[1];
  for (let i = 2; i < n; i++) {
    let current = cost[i] + Math.min(iMinusOne, iMinusTwo);
    iMinusTwo = iMinusOne;
    iMinusOne = current;
  }
  return Math.min(iMinusOne, iMinusTwo);
}