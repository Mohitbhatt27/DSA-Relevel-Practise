let arr=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
var plusOne = function(digits) {
    let str="";
    for(let digit of digits){
        str+=digit;
    }
    console.log(BigInt(str));
    let add=(String(Number(str)+1)).split("");
    return add;
};
plusOne(arr);