// var groupAnagrams = function(strs) {
//     let arr=Array(strs.length);
//     for(let i=0; i<arr.length; i++){
//         arr[i]=Array(2);
//     }
//     for(let i=0; i<strs.length; i++){
//         arr[i][0]=strs[i].split("").sort().join();
//         arr[i][1]=i;
//     }
//     console.log(arr);
//     arr.sort();
//     console.log(arr);
//     let ans=[];
//     let temp=[strs[arr[0][1]]];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i][0]==arr[i-1][0]){
//             temp.push(strs[arr[i][1]]);
//         }
//         else{
//             ans.push(temp);
//             temp=[strs[arr[i][1]]];
//         }
//     }
//     //last group will not be added from loop, so add it seprately
//     ans.push(temp);
//     return ans;
// };
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));


var groupAnagrams = function(strs){
    let obj={};
    for(let i=0; i<strs.length; i++){
        let current=strs[i].split('').sort().join('');
        if(obj[current]){
            obj[current].push(strs[i]);
        }
        else{
            obj[current]=[strs[i]];
        }
    }
    let ans=[];
    ans.push(Object.values(obj));
    return ans;

};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));