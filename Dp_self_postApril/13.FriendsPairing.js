/**
 * Given n friends, each one can remain single or can be paired up with some other friend. Each friend can be paired only once. Find out the total number of ways in which friends can remain single or can be paired up.
 * 
 * Examples :
 * Input  : n = 3
    Output : 4
    Explanation:
    {1}, {2}, {3} : all single
    {1}, {2, 3} : 2 and 3 paired but 1 is single.
    {1, 2}, {3} : 1 and 2 are paired but 3 is single.
    {1, 3}, {2} : 1 and 3 are paired but 2 is single.
    Note that {1, 2} and {2, 1} are considered same.
 */

/**
 * f(n) gives the number of ways n people can remain single or paired up.
 * Each person has two choices, either to remain single or paired up.
 * If he remains single, then the problem reduces to f(n-1)
 * If he pairs up with any of the remaining n-1 persons, then the problem reduces to f(n-2)
 * so f(n) = f(n-1) + (n-1)*f(n-2), where n-1 is for the n-1 persons with whom the nth person can pair up, and f(n-2) for the remaining n-2 persons.
 */

function pairs(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  //if nth friend decides to go alone then remaining people are n-1 who can make pairs among themselves
  //if nth friend decided to go in pair, he can pair with n-1 people, and then n-2 can pair themselves
  return pairs(n - 1) + (n - 1) * pairs(n - 2);
}

// console.log(pairs(210));

function pairsBU(n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + (i - 1) * dp[i - 2];
  }
  return dp[n];
}

//console.log(pairsBU(210));
