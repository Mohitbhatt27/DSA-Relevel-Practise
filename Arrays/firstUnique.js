/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 */

var firstUniqChar = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[str[i]] == 1) {
      return str[i];
    }
  }
  return -1;
};

//Another attempt without using Object.entries(obj)

var firstUniqChar = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] == 1) {
      return i;
    }
  }
  return -1;
};
