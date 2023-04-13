var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let i = 0,
    j = people.length - 1;
  let ans = 0;

  while (i <= j) {
    ans++;
    if (people[i] + people[j] <= limit) {
      i++;
    }
    j--;
  }

  return ans;
};
