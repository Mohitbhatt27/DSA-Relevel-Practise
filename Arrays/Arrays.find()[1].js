/*
The find() method returns the first element in the provided array that satisfies the provided testing function. 
If no values satisfy the testing function, undefined is returned.

*/

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12

/*
Let's say there is an object and you need to return the key for a particular value, this can be used.
*/

let obj={one:1, two:2};
const found1= Object.keys(obj).find(element => obj[element]==2);
console.log(found1);

//traversing in keys array, and finding the key wheb a particular element is found.