function getIthBit(n,k){
    let bitmask = (1<<k)
    return (n&bitmask)==0? 0 : 1;
}

console.log(getIthBit(2,1));