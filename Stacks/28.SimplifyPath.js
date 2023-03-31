var simplifyPath = function (path) {
  let split = path.split('/');
  let stack = [];
  let n = split.length;
  for (let i = 0; i < n; i++) {
    let curr = split[i];
    if (curr == '' || curr == '.') {
      continue;
    } else if (curr == '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push('/' + curr);
    }
  }
  return stack.length == 0 ? '/' : stack.join('');
};
