function removeKdigits(num, k) {
  let stack = []; 
  for (const digit of num) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  let result = stack.join('').replace(/^0+/, ''); // removing all starting zeros
  if(result == '') return '0';
  return result;
}

let num = '10', k = 2;
console.log(removeKdigits(num,k));