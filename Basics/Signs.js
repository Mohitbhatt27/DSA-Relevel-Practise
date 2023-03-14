//https://ideone.com/mmu4na


/*
Requirements: "1. Given 2 numbers as input. You need to find if they have opposite signs or not.
Input -> +123, -12
Output -> true
*/

function oppositeSigns(x, y) {
    //The sign bit is 1 in negative numbers, and 0 in positive numbers.
    //The XOR of x and y will have the sign bit as 1 if they have opposite sign.
    //So XOR of x and y will be negative number if x and y have opposite signs.
  
    return (x ^ y) > 0;
  }
  let num1 = +123;
  let num2 = -12;
  if (oppositeSigns(num1, num2) > 0) {
    console.log(`${num1} and ${num2} have same signs`);
  } else {
    console.log(`${num1} and ${num2} have opposite signs`);
  }
  
  console.log(`\n`);
  
  /*
  2. Given 3 numbers. You need to find the smallest of three numbers without using comparison operators
  Input -> 12,44,2
  Output -> 2
  */
  
  function smallest(x, y, z) {
    //If value of (x/y) is zero, then x is greater than y, else y is greater.
  
    if (Math.floor(x / y) == 0) {
      //we will enter this block when x<y
      //now we need to check if x<z also
  
      if (Math.floor(x / z) == 0) {
        //we will enter this block when x<y also
        return `${x} is the smallest number amongst these three`;
      }
    }
  
    if (Math.floor(y / x) == 0) {
      //we will enter this block when y<x
  
      if (Math.floor(y / z) == 0) {
        //we will enter this block when y<z also
        return `${y} is the smallest number amongst these three`;
      }
    }
  
    if (Math.floor(z / x) == 0) {
      //we will enter this block when z<x
  
      if (Math.floor(z / y) == 0) {
        //we will enter this block when z<x also
        return `${z} is the smallest number amongst these three`;
      }
    }
  }
  
  console.log(smallest(12, 44, 2));
  