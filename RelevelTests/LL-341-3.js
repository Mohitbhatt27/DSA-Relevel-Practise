// Given a string word to which you can insert letters "a", "b" or "c" anywhere and any number of times, return the minimum number of letters that must be inserted so that word becomes valid.

// A string is called valid if it can be formed by concatenating the string "abc" several times.

// Input: word = "b"
// Output: 2
// Explanation: Insert the letter "a" right before "b", and the letter "c" right next to "a" to obtain the valid string "abc".


// Input: word = "aaa"
// Output: 6
// Explanation: Insert letters "b" and "c" next to each "a" to obtain the valid string "abcabcabc".


// Input: word = "abc"
// Output: 0
// Explanation: word is already valid. No modifications are needed.

// Constraints:

// 1 <= word.length <= 50
// word consists of letters "a", "b" and "c" only. 

var addMinimum = function(word) {
let ans = 0;
let start = 0;
let nextChar = 'a'; 
while (start < word.length) {
    
  if (word[start] == nextChar) {
    // current character in word matches the expected character
    if (nextChar == 'a') nextChar = 'b';
    else if (nextChar == 'b') nextChar = 'c';
    else if (nextChar == 'c') nextChar = 'a';
    start++;
  } else {
    // current character in word does not match the expected character
    ans++; 
    if (nextChar == 'a') nextChar = 'b';
    else if (nextChar == 'b') nextChar = 'c';
    else if (nextChar == 'c') nextChar = 'a';
  }
}
// at the end, state must be equal to a. If it is not, more insertion needed
if (nextChar == 'b' || nextChar == 'c') {
   if (nextChar == 'b') ans += 2;
    else ans += 1;
}
return ans;
}

console.log(addMinimum("abcbca"));
