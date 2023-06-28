/**
 * Given a string s, return the longest 
palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 
Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = 0;
    let start = 0;
    let end = 0;
    for(let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i+1);
        let len = Math.max(len1, len2);
        if(len > max) {
            max = len;
            start = i - Math.floor((len - 1)/2);
            end = i + Math.floor(len/2);
        }
    }
    return s.substring(start, end+1);
};

function expandAroundCenter(s, left, right) {
    let L = left;
    let R = right;
    while(L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
        L--;
        R++;
    }
    return R - L - 1;
}

console.log(longestPalindrome("babad")); //bab
console.log(longestPalindrome("cbbd")); //bb
