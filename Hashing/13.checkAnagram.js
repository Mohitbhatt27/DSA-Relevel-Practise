function checkAnagramOptimised(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  // frequency map of str1
  let mp = {}; 
  for (let i = 0; i < str1.length; i++) {
    if (!mp[str1[i]]) {
      mp[str1[i]] = 1;
    } else {
      mp[str1[i]] += 1;
    }
  }

  console.log(mp);

  // check str2 in the map
  for (let i = 0; i < str2.length; i++) {
    if (!mp[str2[i]]) {
      return false;
    } else {
      mp[str2[i]] -= 1; // now as we have found the character, we reduce the frequency
      if (mp[str2[i]] == 0) {
        delete mp[str2[i]]; // delete operator removes a property from an object
      }
  }
}

  return Object.entries(mp).length == 0;
}

console.log(checkAnagramOptimised('silent', 'listen'));
