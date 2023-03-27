function infixToPostfix(str) {
  let result = "";
  let obj = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
      result += ch;
    } else if (ch == '(') {
      stack.push(ch);
    } else if (ch == ')') {
      while (stack.length > 0 && stack[stack.length - 1] != '(') {
        result += stack.pop();
      }
      if (stack.length > 0 && stack[stack.length - 1] == '(') {
        stack.pop();
      }
    } else {
      if (stack.length == 0 || stack[stack.length - 1] == '(') {
        stack.push(ch);
      } else {
        while (stack.length > 0 && stack[stack.length - 1] != '(' && obj[stack[stack.length - 1]] >= obj[ch]) {
          result += stack.pop();
        }
        stack.push(ch);
      }
    }
  }
  while (stack.length > 0) {
    result += stack.pop();
  }
  return result;
}

console.log(infixToPostfix("A*B+C")); 
console.log(infixToPostfix('a+b*(c^d-e)^(f+g*h)-i')); 


// If the current token is an opening bracket, '(', push it into the stack.
// If the current token is a closing bracket, ')', pop tokens from the stack until the corresponding opening bracket ‘(‘ is removed. Append each operator at the end of the postfix expression.
// If the current token is an operand, append it at the end of the postfix expression.
// If the current token is an operator, push it on the top of the stack. Before doing that, first pop from the stack till we have a lower precedence operator on top, or the stack becomes empty. Append each operator at the end of the postfix expression.
// Finally, append any remaining operators in the stack at the end of the postfix expression and return the postfix expression. Following is the pictorial representation of the above logic for the infix expression