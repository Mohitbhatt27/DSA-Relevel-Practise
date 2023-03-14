function isPowerof2(n){
    if((n&(n-1))==0) return true;
    return false;
}
console.log(isPowerof2(32));
