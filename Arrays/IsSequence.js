var isSubsequence = function(s, t) {
    let start=0; let k=0;
    while(start<t.length){
        if(s.charAt(k)==t.charAt(start)){
            k++;
        }
        start++;
    }
    return k==s.length;
















};
console.log(isSubsequence("twn","xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn"))