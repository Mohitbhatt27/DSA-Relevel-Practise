function simplifyPath(A) {
 let B=A.trim();
  let stack = [];
  let dirs = B.split('/');
  for (let i = 0; i < dirs.length; i++) {
    let dir = dirs[i];
    if (dir === '' || dir === '.') continue;
    if (dir === '..') {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(dir);
    }
  }
  return '/' + stack.join('/');
}

console.log(simplifyPath('/home/'));
console.log(simplifyPath(' /a/./b/../../c/'));


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
    let str = readLine().trim();
    return simplifyPath(str);
}

function simplifyPath(A) {
  let B = A.trim();
  let stack = [];
  let dirs = B.split('/');
  for (let i = 0; i < dirs.length; i++) {
    let dir = dirs[i];
    if (dir === '' || dir === '.') continue;
    if (dir === '..') {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(dir);
    }
  }
  return '/' + stack.join('/');
}





process.stdin.resume();
process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function simplifyPath(str) {
  let stack = [];
  let spl = str.split('/');
  for (let i = 0; i < spl.length; i++) {
    let dir = spl[i];
    if (dir == '' || dir == '.') continue;
    if (dir == '..') {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(dir);
    }
  }
  return '/' + stack.join('/');
}

function main() {
  let str = readLine().trim();
  console.log(simplifyPath(str).trim());
}
