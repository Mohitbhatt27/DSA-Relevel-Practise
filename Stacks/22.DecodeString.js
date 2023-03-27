// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

function decodeString(str) {
  let st = [],
    curr_string = '',
    curr_number = 0,
    n = str.length;

    for (let i = 0; i<n; i++) {
        let ch = str[i];
        if (ch >= '0' && ch<='9') curr_number = curr_number * 10 + parseInt(ch);
        else if (ch >= 'a' && ch<='z') curr_string+=ch;
        else if (ch == '['){
            st.push(curr_string);
            st.push(curr_number);
            curr_string = '';
            curr_number = 0;
        }
        else {
            let pre_number = st.pop();
            let pre_string = st.pop();
           // console.log(pre_string,pre_number,curr_string);
            curr_string = pre_string + curr_string.repeat(pre_number);
        }

    }
    return curr_string;
}

console.log(decodeString('2[abc]3[cd]ef'));



