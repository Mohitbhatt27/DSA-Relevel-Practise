//All permutations of a string of size n would be n!

//TC-> O(n*n!)

function permutations(str,ans){

    if (str.length==0){
        console.log(ans);
        return;
    }
    for(let idx = 0; idx<str.length; idx++){
        let ch = str[idx];
        //making new string is important to not disturb the loop
        let new_str=str.slice(0,idx)+str.slice(idx+1);
        
    permutations(new_str,ans+ch);
    }
}

let str = "01";
permutations(str,"");