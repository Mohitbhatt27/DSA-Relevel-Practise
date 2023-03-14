//The let declaration declares a block-scoped local variable, optionally initializing it to a value.

// let x = 1;
// if (x === 1) {
//   let x = 2;
//   console.log(x); // expected output: 2
// }
// console.log(x); // expected output: 1

/*The other difference between var and let is that the 
let is initialized to a value only when a parser evaluates it
Many issues with let variables can be avoided by declaring them 
at the top of the scope in which they are used
Unlike var, let begins declarations, not statements. 
That means you cannot use a lone let declaration as the body of a block 
(which makes sense, since there's no way to access the variable).*/


//if (true) 
//let a = 1; SyntaxError: Lexical declaration cannot appear in a single-statement context

/*
Variables declared by let have their scope in the block for which they are declared, 
as well as in any contained sub-blocks.
*/

function varTest() {
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  
  function letTest() {
    let x = 1;
    {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }
  
  //At the top level of programs and functions, let, unlike var, 
  //does not create a property on the global object. For example:

  var xyz = 'global';
  let yza = 'global';
  console.log(this.xyz); // "global"
  console.log(this.yza); // undefined  
  
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2; 

  function test() {
    var fool = 33;
    if (fool) {
      let fool = fool + 55; // ReferenceError
    }
  }
  test();

  /*
  The if block is evaluated because the outer var foo has a value.
  However due to lexical scoping this value is not available inside the block:
  the identifier foo inside the if block is the let foo.
  The expression (foo + 55) throws a ReferenceError because initialization of let foo has not completed — 
  it is still in the temporal dead zone.
  */


  /*
  However, this combination of var and let declaration below is a SyntaxError 
  due to var being hoisted to the top of the block. 
  This results in an implicit re-declaration of the variable.
  */

//   let x = 1;
// {
//   var x = 2; // SyntaxError for re-declaration
// }