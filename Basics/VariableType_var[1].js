/*
The var statement declares a function-scoped or globally-scoped variable, 
optionally initializing it to a value.
Default value is undefined.

var declarations, wherever they occur, 
are processed before any code is executed. This is called hoisting
*/

var a=5;
function a(){
    return 2;
}
console.log(a);

/*
It's important to point out that only a variable's declaration is hoisted, not its initialization. 
The initialization happens only when the assignment statement is reached. 
Until then the variable remains undefined (but declared):
*/


//var x = y, y = 'A';
//console.log(x + y); // undefinedA

/*
Here, x and y are declared before any code is executed, but the assignments occur later. 
At the time x = y is evaluated, y exists so no ReferenceError is thrown and its value is undefined. 
So, x is assigned the undefined value. Then, y is assigned the value 'A'. 
Consequently, after the first line, x === undefined && y === 'A', hence the result.
*/

'use strict';
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  //console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
}
foo();
//console.log(x); //Reference error as x is scoped to `foo`

function ok(){
    abacus=3; //Autoglobal, once ok() is called, abacus gets autoglobal scope and can be accessed.
}
ok();
console.log(abacus);
