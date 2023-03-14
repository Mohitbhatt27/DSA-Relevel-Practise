var repeatedSubstringPattern = function(s) {
    if(s.length<=1){
        return false;
    }
    if(s.length==2){
        if(s.charAt(0)==s.charAt(1)){
            return true;
        }
        else{
            return false;
        }
    }
    let start=0;
    let end= 2;
    let count=0;
    let substr="";
    let length=0;
    while(end<s.length){
        substr=s.substring(start,end);
        if(s.startsWith(substr,end)){
            //repeating substring
            start=end;
            end=end+substr.length;
            count++;
            length=substr.length;
        }
        else{
            //not repeating so take one more character
            end++;
            }
        }
    if(count+1==s.length/length){
        return true;
    }
    return false;   
     };
 console.log(repeatedSubstringPattern("abaababaab"));