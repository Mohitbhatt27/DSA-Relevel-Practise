// s = "(1+(4+5+2)-3)+(6+8)"
// '(1)';
// '1234567897';
// '1-( -2)';

const calculate = (s) => {
  let stack = [];
  let totalSum = 0;
  let sign = 1;
  s.replace(' ', '');
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (isDigit(char)) {
      let num = Number(char);
      i++;
      while (isDigit(s[i])) {
        num = num * 10 + Number(s[i]);
        i++;
      }
      i--; //imp
      totalSum += sign * num;
      sign = 1; //reset
    } else if (isSign(char)) {
      if (char == '-') sign *= -1;
    } else if (isOpeningParenthesis(char)) {
      console.log(i, s[i]);
      stack.push(totalSum);
      stack.push(sign);
      totalSum = 0; //resetting to calculate whatever is inside bracket
      sign = 1; //resetting for the same
    } else if (isClosingParenthesis(char)) {
      totalSum *= stack.pop(); //multiplying with sign
      totalSum += stack.pop(); //adding previous same to it
    }
  }
  return totalSum;
};

const isDigit = (ch) => {
  return /[0-9]/.test(ch);
};

const isSign = (ch) => {
  return /[\+\-\*\/]/.test(ch);
};

const isOpeningParenthesis = (ch) => {
  return /[\(]/.test(ch);
};

const isClosingParenthesis = (ch) => {
  return /[\)]/.test(ch);
};

s = '(1+(4+5+2)-3)+(6+8)';
console.log(calculate(s));
// '(1)';
// '1234567897';
// '1-( -2)';
