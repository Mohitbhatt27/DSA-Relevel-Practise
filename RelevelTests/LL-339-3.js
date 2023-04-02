
var miceAndCheese = function (reward1, reward2, k) {
  const length = reward1.length;
  const difference = new Array(length);
  for (let i = 0; i < length; i++) {
    difference[i] = [reward1[i] - reward2[i], i];
  }
  difference.sort((a, b) => b[0] - a[0]);

  let result = 0;
  for (let i = 0; i < k; i++) {
    // Add the reward1 value for the current element to the result variable
    result += reward1[difference[i][1]];
  }
  for (let i = k; i < length; i++) {
    // Add the reward2 value for the current element to the result variable
    result += reward2[difference[i][1]];
  }

  return result;
};
