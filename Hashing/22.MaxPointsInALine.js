// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

// 1. if numerator is 0 ->
// 2. Store slope in smallest fraction, by dividing each with gcd of numerator and denominator
// 3. parallel to x and y axis ->

var maxPoints = function (points) {
  if (points.length === 0) return 0;
  let res = 1; // at least one point

  for (let i = 0; i < points.length; i++) {
    const map = new Map();
    const point1 = points[i];

    for (let j = i + 1; j < points.length; j++) {
      const point2 = points[j];
      const deltaX = point1[0] - point2[0];
      const deltaY = point1[1] - point2[1];

      // slope gives us direction
      let slope = Infinity; // parallel to y axis
      if (deltaX !== 0) {
        slope = deltaY / deltaX;
      }

      if (!map.has(slope)) {
        // if slope is not present in map, then add it to map
        map.set(slope, 1);
      }
      // if slope is present in map, then increment the count of points with same slope
      map.set(slope, map.get(slope) + 1);
      // update res
      res = Math.max(res, map.get(slope));
    }
  }

  return res;
};
