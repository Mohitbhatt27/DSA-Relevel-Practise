/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 */

function minWindow(s, t) {
    let mapOfS = {};
    let mapOfT = {};
    for (let i = 0; i<t.length; i++) {
        if (mapOfT[t[i]] == undefined) {
            mapOfT[t[i]] = 1;
        } else {
            mapOfT[t[i]]++;
        }
    }
    let length = 0;
    let lengthOfSubstring = Infinity;
    let ans_idx = -1;
    let start = 0, end = 0;

    while (end < s.length) {
      if (mapOfS[s[end]] == undefined) {
        mapOfS[s[end]] = 1;
      } else {
        mapOfS[s[end]]++;
      }

      /**
        s = "A", t = "B"
        console.log(s[end]);
        console.log(mapOfS[s[end]]);
        console.log(mapOfT[s[end]]);
        */

      if (mapOfS[s[end]] <= mapOfT[s[end]]) {
        // console.log("inside if");
        length++;
      }

      if (length == t.length) {
        //trying to minimize the window
        while (
          mapOfS[s[start]] > mapOfT[s[start]] ||
          mapOfT[s[start]] == undefined
        ) {
          mapOfS[s[start]]--;
          start++;
        }
        if (end - start + 1 < lengthOfSubstring) {
          lengthOfSubstring = end - start + 1;
          ans_idx = start;
        }
      }
      end++;
    }
    if (ans_idx == -1) {
        return "";
    }
    return s.substring(ans_idx, ans_idx + lengthOfSubstring);
}


console.log(minWindow("A", "B"));