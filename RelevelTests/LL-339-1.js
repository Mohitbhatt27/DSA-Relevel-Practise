//You are given a binary string s consisting only of zeroes and ones.

// A substring of s is considered balanced if all zeroes are before ones and the number of zeroes is equal to the number of ones inside the substring. Notice that the empty substring is considered a balanced substring.

// Return the length of the longest balanced substring of s.

// A substring is a contiguous sequence of characters within a string.

/**
 * @param {string} c
 * @return {number}
 */
//check if substring of 's' is a palindrome and contains only 0's and 1's
function f(a, b, c) {
  while (a < b) {
    if (c[a++] != '0' || c[b--] != '1') return false;
  }
  return true;
}

function findTheLongestBalancedSubstring(s) {
  let ans = 0;
  //all possible substring of 's'
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (f(i, j, s) && (j - i + 1) % 2 == 0) {
        ans = Math.max(ans, j - i + 1);
      }
    }
  }
  return ans;
}


let s = "01000111";
console.log(findTheLongestBalancedSubstring(s));