/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 */

let map;
let result;
const letterCombinations = function (arr) {
  if (arr.length === 0) return [];

  map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  result = [];
  let temp = '';
  helper(temp, 0, arr);
  return result;
};

function helper(temp, idx, arr) {
  // for '23', every combination will be of length 2
  if (temp.length === arr.length) {
    result.push(temp);
    return;
  }

  for (let i = 0; i < map[arr[idx]].length; i++) {
    helper(temp + map[arr[idx]][i], idx + 1, arr);
  }
}

console.log(letterCombinations('23'));
