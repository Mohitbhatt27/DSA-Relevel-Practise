// our task is to print all possible permutation of a string using recursion

// abc -> abc, acb, bac, bca, cab, cba -> 6

// Assumption: we will give chance to every character to come at first position, and recursion will get us the permutation of remaining characters

// Self-work: Attaching the first character to the permutation of remaining characters

// Base case: if string is of length 1, then return that string


function permutation (str, ans) {
    if (str.length == 0){
        console.log (ans);
        return;
    }

    for (let i = 0; i < str.length; i++){
        let ch = str[i];
        let new_str = str.slice(0, i) + str.slice(i + 1);
        permutation(new_str, ans + ch);
    }

}

permutation("abc", "");