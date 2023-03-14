/*
Scope simply means where to look for things.
But what we are looking for
we are looking for identifiers (variables/functions) inside our code
we play with value in 2 days
either a variable is going to get assigned
or we are going to use to varible
so every variable inside the code will be used in 2 above ways

So, what exactly JS does with the scoping of these variables is that it tries to sort
the variables to their corresponding scopes

Scopes in JS:

1. Global scope: A variable declared at the top of a program or somewhere outside any function 
is considered in global scope. Such variables can be used or accessed anywhere in the program.
*/

// function fun(){
//     x="hello"
// }
// console.log(x); throws an error

function fun(){
    x="hello"; //not in global scope
}
fun();
console.log(x); //now no error, because once the function has been called x="hello" is in the memory

/*
2. Local Scope: Variables will be accessed inside a function only. 
It is also called as function scope.
Above x is a local or function scoped variable so it can not be used outside the function until
it is present in the memory, by calling the function fun(), x was brought in the memory.
*/

/*
3 Block scope: Varible only accessible in a given block. We define a block by {}

*/

if(true){
 var a="hi"; //block scoped variable
}
else {
    var b="hii"; //block scoped varible
}

console.log(a); //a gets printed with value of a in case of var
console.log(b); //b gets an undefined value as it's not in the memory and is a block scoped variable

for(let i=0; i<3; i++){
    console.log(i); //block scope with let
}
//console.log(i); here it wont be accesible

for(var j=0; j<3; j++){
    console.log(j); //block scope with var
}
console.log(j+10); //here it will be accessible as it's with var and var gets global scope


function abc(){ 
    return 2;
}
console.log(abc);