function clearLastKthBit(n,k){
   //we need a bitmask which has k zero on the right,
   //so instead of 1<<k, we do -1<<k
   //as -1 is all 1 in binary, 
   
   let bitmask = (-1<<k);
   return n&bitmask;
}

console.log(clearLastKthBit(7,2));
