function clearIthbit(n, k) {
  let bitmask = ~(1 << k);
  return (n & bitmask);
}

console.log(clearIthbit(10,1));