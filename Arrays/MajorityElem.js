function majorityElement(nums) {
    let count = 0;
    let majority = nums[0];
    for (let x of nums) {
      if (x === majority) {
        count++;
      } else {
        count--;
        if (count === 0) {
          majority = x;
          count = 1;
        }
      }
    }
    return majority;
  }

  //This algorithm is known as Boyer-Moore Majority Vote Algorithm