/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (char of s) {
    if (char === "{") {
      stack.push("}");
    } else if (char === "(") {
      stack.push(")");
    } else if (char === "[") {
      stack.push("]");
    } else {
      if (stack.pop() !== char) return false;
    }
  }
  return !stack.length;
}

console.log(isValid("{}[]()"));