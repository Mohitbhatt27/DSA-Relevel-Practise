var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  let answer = new Array(spells.length);
  let m = potions.length;
  let maxPotion = potions[m - 1];

  for (let i = 0; i < spells.length; i++) {
    let spell = spells[i];
    // Minimum value of potion whose product with current spell will be at least success or more.
    let minPotion = Math.ceil((1.0 * success) / spell);
    // Check if we don't have any potion which can be used.
    if (minPotion > maxPotion) {
      answer[i] = 0;
      continue;
    }
    // We can use the found potion, and all potion in its right
    // (as the right potions are greater than the found potion).
    let index = lowerBound(potions, minPotion);
    answer[i] = m - index;
  }

  return answer;
};

  function lowerBound(arr, key) {
    let lo = 0;
    let hi = arr.length;
    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (arr[mid] < key) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    return lo;
  }
