const calculate = (s) => {
  let result = 0;
  let prev = 0;
  let num = 0;
  let sign = '+';

  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);

    if (/[0-9]/.test(ch)) num = num * 10 + parseInt(ch);

    if (/[\+\-\*\/]/.test(ch) || i == s.length - 1) {
      if (sign == '+') {
        result += prev;
        prev = num;
      } else if (sign == '-') {
        result += prev;
        prev = -num;
      } else if (sign == '*') prev *= num;
      else if (sign == '/') prev = Math.trunc(prev / num);

      sign = ch;
      num = 0;
    }
  }

  return result + prev;
};

/**
 *Self note: Multiplication and division have higher precedence than addition and subtraction. This means that when we encounter a multiplication or division operator, we need to perform that operation before adding or subtracting the result to/from the result variable.

To achieve this, we use the prev variable to keep track of the intermediate result of any multiplication or division operations. When we encounter a multiplication or division operator, we update the prev variable by multiplying or dividing it by the current number. When we later encounter an addition or subtraction operator, we add the value of prev to the result variable and update prev with the current number.
 */
