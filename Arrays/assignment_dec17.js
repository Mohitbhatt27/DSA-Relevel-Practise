/**
 *  "Write a program to sort an integer array with custom number as reference.
Sample Input:
2356481790
0 1 2 3 9 5 6 2 8 1 9

Sample Output:
2 2 3 5 6 8 1 1 9 9 0

Explanation:
-Our current integer is not 0123456789 it is 2356481790 as per the given input format.
-So the integer should be sorted in the given order and the output is 2 2 3 5 6 8 1 1 9 9 0
 */

function sortWithCustomNumber(arr, customNumber) {
  // Create a mapping from customNumber to the index of each digit
  let digitIndexes = {};
  for (let i = 0; i < customNumber.length; i++) {
    digitIndexes[customNumber[i]] = i;
  }

  // Sort the array using the customNumber as a reference
  arr.sort((a, b) => {
    // Compare the digits of a and b using their indexes in customNumber
    let aDigits = a.toString().split('');
    let bDigits = b.toString().split('');
    let i = 0;
    while (i < aDigits.length && i < bDigits.length) {
      if (digitIndexes[aDigits[i]] < digitIndexes[bDigits[i]]) {
        return -1;
      } else if (digitIndexes[aDigits[i]] > digitIndexes[bDigits[i]]) {
        return 1;
      }
      i++;
    }
    // If one number has more digits than the other, compare the remaining digits to 0
    while (i < aDigits.length) {
      if (digitIndexes[aDigits[i]] !== 0) {
        return 1;
      }
      i++;
    }
    while (i < bDigits.length) {
      if (digitIndexes[bDigits[i]] !== 0) {
        return -1;
      }
      i++;
    }
    // If the numbers are equal, return 0
    return 0;
  });

  return arr;
}

let arr = [0, 1, 2, 3, 9, 5, 6, 2, 8, 1, 9];
let customNumber = '2356481790';

console.log(sortWithCustomNumber(arr, customNumber)); // prints [2, 2, 3, 5, 6, 8, 1, 1, 9, 9, 0]
