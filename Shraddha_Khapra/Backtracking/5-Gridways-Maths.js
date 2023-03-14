//In a grid, If we are going from 0,0 to m,n, such that we can only go down or right, then
//The total number of right turns would be m-1, and total number of down turns would be n-1
//Hence the problem has been reduced to a permutation Problem


//total characters = (n-1+m-1)
//Repeating characters are D which is n-1 times and R which is m-1 times

//Total number of paths = (m+n-2) choose (n-1) = (m+n-2)! / ((n-1)! * (m-1)!)

//This is because the total number of moves required to go from (0,0) to (m,n) is (m-1) right moves and (n-1) down moves, for a total of (m-1) + (n-1) = (m+n-2) moves. To calculate the total number of unique paths, we need to choose (n-1) of these moves to be down moves, and the rest to be right moves.

//The formula for combinations, or "n choose k", is n! / (k! * (n-k)!),

//so the formula is: (n-1+m-1)! / (n-1)! * (m-1)!


var uniquePaths = function (m, n) {
  /*
    ways = (n-1+m-1)! / (n-1)! * (m-1)!
     */

  return factorial(n - 1 + m - 1) / (factorial(n - 1) * factorial(m - 1));
};

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}