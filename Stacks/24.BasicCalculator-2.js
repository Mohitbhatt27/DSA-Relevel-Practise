var calculate = function (s) {
   let stack = [];
   let num = 0; // current number being built
   let sign = '+'; // current sign
   for (let i = 0; i < s.length; i++) {
      let ch = s.charAt(i);
      if (ch >= '0' && ch <= '9') {
         num = num * 10 + parseInt(ch);
      }
      if (
         ch == '+' ||
         ch == '-' ||
         ch == '*' ||
         ch == '/' ||
         i == s.length - 1
      ) {
         // if ch is an operator or we reached the end of the string

         if (sign == '+') stack.push(num);
         else if (sign == '-') stack.push(-num);
         else if (sign == '*') stack.push(stack.pop() * num);
         else if (sign == '/') stack.push(Math.trunc(stack.pop() / num));

         sign = ch; // update sign
         num = 0; // reset number
      }
   }
   return stack.reduce((a, b) => a + b); // sum up
};
