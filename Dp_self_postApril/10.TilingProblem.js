/**
 * Given  a brick wall of 4*N and tiles of size 4*1, find the number of ways to arrange tiles on the wall.
 */

function tiling(N) {
  if (N <= 3) return 1;
  if (N === 4) return 2;
  return tiling(N - 1) + tiling(N - 4);
}

console.log(tiling(5)); // 3
