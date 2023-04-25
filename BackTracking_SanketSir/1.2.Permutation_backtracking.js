// In the recursive approach, we were making many substrings, so this time we can try and avoid it.
// Can we make use of swap function?
// In "abc", what if we swap a with a, a with b, and a with c?
// Then we will get "abc", "bac", "cba"
// Now, we can fix a, and then find the permutation of "bc" and "cb" recursively

function permutation(str, index) {
  if (str.length -1 == index) {
    console.log(str);
    return;
  }
  for (let i = index; i < str.length; i++) {
    str = swap(str, i, index);
    permutation(str, index + 1);
    str = swap(str, i, index);
  }
}

function swap(str, i, j) {
  let strArr = str.split('');
  let temp = strArr[i];
  strArr[i] = strArr[j];
  strArr[j] = temp;
  return strArr.join('');
}



let str = "abc";
permutation(str, 0);