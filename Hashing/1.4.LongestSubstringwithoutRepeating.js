//Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    let mp = {};
    let longest_length = 0;
    let start = 0;
    let end = 0;
    while (end < s.length) {
        // if the character is already present in the map, then we need to update the start index
        if(mp[s[end]] != undefined) {
            start = Math.max(start, mp[s[end]] + 1);
        }
        // update the map with the latest index of the character
        mp[s[end]] = end;
        longest_length = Math.max(longest_length, end - start + 1);
        end++;
    }
    return longest_length;
};


var lengthOfLongestSubstring = function (s) {
  let mp = {};
  let start = 0,
    end = 0;
  let ans = 0;
  while (end < s.length) {
    if (!mp[s[end]]) {
      mp[s[end]] = 1;
    } else {
      mp[s[end]]++;
    }
    while (mp[s[end]] > 1) {
      mp[s[end]]--;
      start++;
    }

    ans = Math.max(ans, end - start + 1);

    enve;
  }
  return ans;
};