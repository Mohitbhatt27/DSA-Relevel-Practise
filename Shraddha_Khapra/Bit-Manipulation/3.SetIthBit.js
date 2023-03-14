function setIthbit(n,k){
    let bitmask = 1<<k;
    return n|bitmask;
}