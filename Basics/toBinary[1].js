//number to binary

// function toBinary(n){
//     let b = ""+(n % 2);
//     while(n>1){
//         n = Math.floor(n / 2);
//         b =  (n % 2) + (b);
//     }
//     console.log(b);
// }

// toBinary(10);
// toBinary(5);

// function toBinary(num){
// let str="";
// while(num!=0){
// if((num&1)==0){
//     str+=0
// }
// else str+=1;

// //num=num>>1; //removing last bit
// num=Math.floor(num/2);
// }
// console.log(reverse_String(str));
// }

// function reverse_String(str){
//     let reverse="";
//     for(let i=str.length-1; i>=0; i--){
//         reverse+=str[i];
//     }
//     return reverse;
// }
// toBinary(4);
// toBinary(6);
// toBinary(10);

function toBinary(num){
    let ans="";
    while(num>0){
    if(num%2==0){
        ans="0"+ans;
    }
    else ans="1"+ans;

    num= Math.floor(num/2);
}
console.log(ans);
}
toBinary(4);
toBinary(6);
toBinary(10);


