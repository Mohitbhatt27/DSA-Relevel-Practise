//Print all subsets of a string. We have done subsets using BIT, revise that once, and now look at the subsets by backtracking. 


//TC-> O(n*2^n)
//SC-> O(n)

function subsets(str,ans,idx){
    if(idx==str.length){
        console.log(ans);
        return;
    }
    
    subsets(str,ans+str[idx],idx+1); //take
    subsets(str,ans+"",idx+1); // not take - backtracking
}

let str="abc";
subsets(str,"",0);