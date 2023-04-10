// There is a forest with an unknown number of rabbits. We asked n rabbits "How many rabbits have the same color as you?" and collected the answers in an integer array answers where answers[i] is the answer of the ith rabbit.

// Given the array answers, return the minimum number of rabbits that could be in the forest.

var numRabbits = function (answers) {
  let map = new Map();
  let count = 0;
  for (let i = 0; i < answers.length; i++) {
    if (map.has(answers[i])) {
      // if the color exists
      let val = map.get(answers[i]); // get the count
      if (val > 0) {
        // if the count is greater than 0
        map.set(answers[i], val - 1); // decrement the count
      } else {
        count += answers[i] + 1; // add the number of rabbits with the same color
        map.set(answers[i], answers[i]); // reset the count
      }
    } else {
      count += answers[i] + 1; // add the number of rabbits with the same color
      map.set(answers[i], answers[i]); // reset the count
    }
  }
  return count;
};


console.log(numRabbits([5,5,5,5,5,5,5])); 


