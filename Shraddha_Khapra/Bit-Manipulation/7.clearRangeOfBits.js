function clearRangeBit(n,i,j){
    //let n = 1010101010;
    //let i = 2, j = 5;
    //bitmask needed = 1111000011
    //divide bitmask into 2 parts
    //part 1 = 1111000000
    //part 2 = 0000000011
    //and Or them

    //if we need all zeros on left and k number of 1 on the right, we do 2^k -1.
    //31 = 2^5-1 = 011111
    //7 = 2^3-1 = 0111

    let a = -1 << (j + 1);
    //let b = (2**(i-1)) - 1;
    let b = (1<<i)-1; //1<<i=2^i
    let bitmask = a|b;
    return n & bitmask;
}

console.log(clearRangeBit(10,1,7));