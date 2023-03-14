function countSetBits(n){
    let count = 0;
    while(n>0){
      if ((n & 1) != 0) count++;
      n = n >> 1; //n>>1 = removes rightmost bit
    }
    console.log(count);
}

countSetBits(15);
