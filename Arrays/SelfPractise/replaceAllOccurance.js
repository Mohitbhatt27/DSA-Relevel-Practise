let s = "daabcbaabcbc", part="abc";

var removeOccurrences = function(s, part) {
    while(s.indexOf(part)!=-1){
        s=s.replace(part,"");
    }
    return s;
    
};
console.log(removeOccurrences(s,part));