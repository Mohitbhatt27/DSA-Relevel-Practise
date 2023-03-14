const letterCombinations = function (digits) {
  if (digits.length == 0) return [];

  let map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let result = [];

  const backtrack = (path, i) => {
    /**
     * path is the current path being built,
     * i is the index of the current digit being processed.
     */

    /**
     * check if the path has the same length as the input digits
     *  if yes, we push the path to the result array and return.
     */

    if (path.length == digits.length) {
      result.push(path);
      return;
    }

    /**
     * Else we iterate through all the possible letters for the current digit
     * and call the backtrack function with the updated path string and the next digit index.
     */

    for (let j = 0; j < map[digits[i]].length; j++) {
      backtrack(path + map[digits[i]][j], i + 1);
    }
  };

  backtrack("", 0);
  return result;
};
