// 132 pattern

function find132pattern (nums) {
    // find 1 for a given 32 pattern

    // we need to maintain 32 pattern in the stack
    let stack = [];
    let thirdElement = -Infinity;
    stack.push(nums[nums.length - 1]);

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < thirdElement) {
          return true;
        }

        while (stack.length > 0 && nums[i] > stack[stack.length-1]) {
            thirdElement = stack.pop();
        }

        stack.push(nums[i]);

    }

    return false;

}

let nums = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10];
console.log(find132pattern(nums));