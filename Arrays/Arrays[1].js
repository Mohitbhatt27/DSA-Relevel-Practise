/*
Array is an object that can store multiple items at once
An array is an ordered collection of data. 
hetrogenous elements allowed
Arrays are used to store multiple values in a single variable. 
This is compared to a variable that can store only one value.
Dynamic memory allocaation of Array in JS, meaning memory allocated to an array can increase or decrease in realtime
since we can add or remove elemts from an arrow in realtime
Each item in an array has a number attached to it,
called a numeric index, that allows you to access it.
In JavaScript, arrays start at index zero and can be manipulated with various methods.
Syntax: const array_name = [item1, item2, ...]; 
It is a common practice to declare arrays with the const keyword.

*/
const words=['Hello', 'Howare']
//words is the name of the array
//And the array contains 2 values
let myArray = [1, 2, 3, 4];
let catNamesArray = ["Jacqueline", "Sophia", "Autumn"];
//Arrays in JavaScript can hold different types of data, as shown above.
//Spaces and line breaks are not important. A declaration can span multiple lines:
const cars = [
    "Saab",
    "Volvo",
    "BMW"
  ];
//You can also create an array, and then provide the elements:
const cars1 = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

//The following example also creates an Array, and assigns values to it:
const cars2 = new Array("Saab", "Volvo", "BMW");

//The two examples above do exactly the same.
//There is no need to use new Array().
//For simplicity, readability and execution speed, use the array literal method.

const cars3 = ["Saab", "Volvo", "BMW"];
let car = cars3[0];

const car4 = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";

//Access the Full Array
//With JavaScript, the full array can be accessed by referring to the array name:

const cars5 = ["Saab", "Volvo", "BMW"];
//document.getElementById("demo").innerHTML = cars5;

//Arrays are Objects
//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

//Arrays use numbers to access its "elements". In this example, person[0] returns John:
const person = ["John", "Doe", 46];

//Objects use names to access its "members". In this example, person.firstName returns John:
const person1 = {firstName:"John", lastName:"Doe", age:46};

//Array Elements Can Be Objects
//JavaScript variables can be objects. Arrays are special kinds of objects.
//Because of this, you can have variables of different types in the same Array.
//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array

//Array Properties and Methods
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

//Adding Array Elements
//The easiest way to add a new element to an array is using the push() method:

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

//New element can also be added to an array using the length property:
const fruits1 = ["Banana", "Orange", "Apple"];
fruits1[fruits1.length] = "Lemon";  // Adds "Lemon" to fruits

//WARNING !
//Adding elements with high indexes can create undefined "holes" in an array:

const fruits3 = ["Banana", "Orange", "Apple"];
fruits3[6] = "Lemon";  // Creates undefined "holes" in fruits
console.log(fruits3[4]);
console.log(fruits3[45]);

//JavaScript does not support arrays with named indexes.
//In JavaScript, arrays always use numbered indexes.  
//In JavaScript, objects use named indexes.

//Push method always add elements at the end of the array.
//unshift alsways add element to the beginning of the array.

fruits3.unshift('Hi', 'hello');
console.log(fruits3);

fruits3.pop();
console.log(fruits3)
fruits3.shift();
console.log(fruits3);
console.log(fruits3.length);


// let newarray=[0,1,0,1,0,0,1];
// let zeroCount = 0;
// for (let i = 0; i < newarray.length; i++){
//   if(newarray[i]==0){
//     zeroCount++;
//   }
// }

// for(let i=0; i<newarray.length; i++){
//   if(i<zeroCount){
//     newarray[i]=0;
//   }
//   else newarray[i]=1;
// }

// console.log(newarray);


let arr11 = [0, 1, 0, 1, 0, 0, 1];
let left = 0, right = arr11.length - 1;

for (let i = 0; i < arr11.length; i++) {

 while (left < right) {

    if (arr11[left] == 1) {
      let temp = arr11[left];
      arr11[left] = arr11[right];
      arr11[right] = temp;
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
}
console.log(arr11);




