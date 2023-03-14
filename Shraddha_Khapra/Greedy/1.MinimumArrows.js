function findMinArrowShots(points) {
  points.sort((a, b) => a[1] - b[1]);

  let lastArrow_position = points[0][1];
  let minArrows = 1;

  for (let i = 1; i < points.length; i++) {
    // Check if the current balloon overlaps with the previous balloon
    if (lastArrow_position >= points[i][0]) {
      continue;
    }

    // If there's no overlap, shoot a new arrow
    minArrows++;
    lastArrow_position = points[i][1];
  }
  return minArrows;
}
