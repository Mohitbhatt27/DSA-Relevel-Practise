function prevSmallerElem(nums) {
  let stack = [];
  let result = Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] <= nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  return result;
}
function nextSmallerElemOnTheRight(nums) {
  let stack = [];
  let result = Array(nums.length).fill(-1);
  stack.push(0);
  for (let i = 1; i < nums.length; i++) {
    let next = nums[i];
    while (stack.length > 0 && next < nums[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      result[topIndex] = i;
    }
    stack.push(i);
  }
  return result;
}

/*
Max Area at every bar = height * maximum width
Max width = NextSmallerIdx - PreviousSmallerIndex - 1

corner case: [1,1] 
Both left smaller and right smaller of both elem would be -1,-1 and -1 - (-1) -1 = -1

so, what can do is when nextSmallerIdx is -1, we can replace -1 with the length,
2-(-1)-1 = 2
*/

function maxAreaHistogram(arr) {
  let leftSmallerIndices = prevSmallerElem(arr);
  let rightSmallerIndices = nextSmallerElemOnTheRight(arr);

  let maxArea = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let currLeftSmaller = leftSmallerIndices[i];
    let currRightSmaller =
      rightSmallerIndices[i] == -1 ? arr.length : rightSmallerIndices[i];
    let currWidth = currRightSmaller - currLeftSmaller - 1;
    let currArea = currWidth * arr[i];
    maxArea = Math.max(maxArea, currArea);
  }
  return maxArea;
}

console.log(maxAreaHistogram([2, 3]));
