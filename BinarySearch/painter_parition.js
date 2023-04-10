/*Given 2 integers A and B and an array of integers C of size N. Element C[i] represents the length of ith board.
 You have to paint all N boards [C0, C1, C2, C3 … CN-1]. There are A painters available and each of them takes B units of time to paint 1 unit of the board.

Calculate and return the minimum time required to paint all boards under the constraints that any painter will only paint contiguous sections of the board.
 NOTE: 
 1. 2 painters cannot share a board to paint. That is to say, a board cannot be painted partially by one painter, and partially by another.
 2. A painter will only paint contiguous boards. This means a configuration where painter 1 paints boards 1 and 3 but not 2 is invalid.

 Return the ans % 10000003.
 */

function canPaint(mid, arr, p) {
    /*
     * p -> the total number of available painters
     * arr -> the length of all the n boards
     * mid -> max time that can be allocated to a painter
     * Time: O(n)
     * Space: O(1)
     */
    let painters = 1; // count of painter to whom we have allocated boards
    let unitspainted = 0; // how much length one painter has been allocated to paint
    for(let i = 0; i < arr.length; i++) { // go to each board and start allocation
        if(unitspainted + arr[i] > mid) { // if by allocating the new board to the painter, the time exceeds mid
            painters++; // we need a new painter
            unitspainted = arr[i]; // this new board will be allocated to the new painter;
            if(painters > p) {
                // we cannot paint the boards as for the given time it is less and we need more painters
                return false;
            }
        } else {
            unitspainted += arr[i];
        }
    }
    return true;
}

let arr = [5,10,20,30,15];
let p = 3;
let lo = arr[arr.length - 1];
let hi = 0;
let ans = -1;
for (let i = 0; i < arr.length; i++) {
   hi += arr[i];
}
while(lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if(canPaint(mid, arr, p)) {
        ans = mid; //potential answer found
        hi = mid - 1; // try to find something even less
    } else {
        lo = mid + 1;
    }
}
console.log(ans % 10000003);

/**
 * Time: O(nlog(sum(ai)))
 * Space: O(1)
 */