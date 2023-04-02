function create2DArray(nums) {
  const groups = [];
  const map = new Map();

  nums.forEach((num) => {
    if (!map.has(num)) {
      map.set(num, 0);
    }

    const index = map.get(num);
    if (groups.length === index) {
      groups.push([]);
    }

    groups[index].push(num);
    map.set(num, index + 1);
  });

  return groups;
}
let nums = [1, 2, 3, 4];
console.log(create2DArray(nums));