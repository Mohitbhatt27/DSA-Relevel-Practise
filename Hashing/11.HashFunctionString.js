function hash(str, size) {

    // tc: O(n), sc: O(1) where n is the length of the string

  let res = 0;
  let prime_pow = 1;

  for (let i = 0; i < str.length; i++) {
    res = ((res % size) + ((str.charCodeAt(i) * prime_pow) % size)) % size;
    prime_pow = ((prime_pow % size) * 19) % size;
  }

  return res;
}

/**
 * (a+b)%c = (a%c + b%c)%c
 */

console.log(hash('hello', 10));
console.log(hash('Mohit', 920));
console.log(hash('hello', 120));