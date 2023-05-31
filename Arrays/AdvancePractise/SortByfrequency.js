//Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

//Return the sorted string. If there are multiple answers, return any of them.

var frequencySort = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (obj[ch]) {
      obj[ch]++;
    } else {
      obj[ch] = 1;
    }
  }
  let temp = Object.entries(obj).sort((x, y) => y[1] - x[1]);

  let str = '';
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[i][1]; j++) {
      str += temp[i][0];
    }
  }
  return str;
};

const array = [
  [1, 3],
  [2, 1],
  [3, 2],
  [4, 1],
  [5, 3],
];
console.log(
  array.sort((x, y) => {
    if (x[1] == y[1]) {
      return y[0] - x[0];
    } else {
      return x[1] - y[1];
    }
  })
);
