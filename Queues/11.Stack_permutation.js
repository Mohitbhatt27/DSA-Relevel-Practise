/**
 * A stack permutation is a permutation of objects in the given input queue which is done by transferring elements from the input queue to the output queue with the help of a stack and the built-in push and pop functions.

The rules are: 

Only dequeue from the input queue.
Use inbuilt push, and pop functions in the single stack.
Stack and input queue must be empty at the end.
Only enqueue to the output queue.
There are a huge number of permutations possible using a stack for a single input queue. 
Given two arrays, both of unique elements. One represents the input queue and the other represents the output queue. Our task is to check if the given output is possible through stack permutation.

Examples: 
Input: arr1[] = [ 1, 2, 3 ] , arr2[] = [ 2, 1, 3 ]
Output: YES
Explanation: 
push 1 from input to stack
push 2 from input to stack
pop 2 from stack to output
pop 1 from stack to output
push 3 from input to stack
pop 3 from stack to output

Input: arr1[] = [ 1, 2, 3 ] , arr2[] = [ 3, 1, 2 ]
Output: Not Possible
 */

function Stack_Permutation(input, output) {
    let stack = [];
    let op_index = 0;
    stack.push (input[0]);
    for (let i = 1; i < input.length; i++) {
        while (stack.length!=0 && stack[stack.length-1] == output[op_index]) {
            stack.pop();
            op_index++;
        }
        stack.push(input[i]);
    }
    while (stack.length!=0 && stack[stack.length-1] == output[op_index]) {
        stack.pop();
        op_index++;
    }
    if (stack.length == 0) {
        return true;
    }
    return false;
}

console.log(Stack_Permutation([1, 2, 3], [2, 1, 3]));
console.log(Stack_Permutation([1, 2, 3], [3, 1, 2]));