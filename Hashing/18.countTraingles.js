// Count of Right-Angled Triangle formed from given N points whose base or perpendicular are parallel to X or Y axis

function countRightTriangles(points) {
  let count = 0;
  let xMap = {};
  let yMap = {};
  let n = points.length;
  for (let i = 0; i < n; i++) {
    let [x, y] = points[i];
    if (xMap[x]) {
      xMap[x]++;
    } else {
      xMap[x] = 1;
    }
    if (yMap[y]) {
      yMap[y]++;
    } else {
      yMap[y] = 1;
    }
  }
  for (let i = 0; i < n; i++) {
    let [x, y] = points[i];
    count += (xMap[x] - 1) * (yMap[y] - 1);
  }
  return count;
}

let arr = [
  [1, 2],
  [2, 1],
  [2, 2],
  [2, 3],
  [3, 2],
];
console.log(countRightTriangles(arr));
