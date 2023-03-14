function updateIthBit(n,k,updateValue){
    if(updateValue==0) return clearIthbit(n,k);
    else return setIthbit(n,k);
}

function clearIthbit(n, k) {
  let bitmask = ~(1 << k);
  return n & bitmask;
}

function setIthbit(n, k) {
  let bitmask = 1 << k;
  return n | bitmask;
}