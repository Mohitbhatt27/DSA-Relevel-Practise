var wordPattern = function (pattern, s) {
  let a = pattern.split('');
  let b = s.split(' ');
  if (a.length != b.length) return false;
  let map1 = new Map(),
    map2 = new Map();
  for (let i = 0; i < a.length; i++) {
    let curr_pattern = a[i];
    let curr_word = b[i];
    if (!map1.has(curr_pattern)) {
      if (map2.has(curr_word)) return false;

      map1.set(curr_pattern, curr_word);
      map2.set(curr_word, curr_pattern);
    } else {
      if (!map2.has(curr_word)) return false;

      if (
        map1.get(curr_pattern) !== curr_word ||
        map2.get(curr_word) !== curr_pattern
      )
        return false;
    }
  }
  return true;
};

let inp = 'abba';
let s = 'dog constructor constructor dog';

console.log(wordPattern(inp, s));