//sum of digits till n
function sum(n){
    if(n<1) return 0;
    return n + sum(n-1);
}
console.log(sum(5));