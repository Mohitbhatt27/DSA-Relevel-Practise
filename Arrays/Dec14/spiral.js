// assume that the input 2d array is called "arr"

// define the number of rows and columns in the array
const rows = arr.length;
const cols = arr[0].length;

// create a new empty 1d array to store the spiral pattern
const spiral = [];

// define the four directions in which we can move
const right = { x: 1, y: 0 };
const down = { x: 0, y: 1 };
const left = { x: -1, y: 0 };
const up = { x: 0, y: -1 };

// start from the top-left corner of the array (0, 0)
let x = 0;
let y = 0;
let direction = right;

// iterate over the elements of the array
for (let i = 0; i < rows * cols; i++) {
  // add the current element to the spiral array
  spiral.push(arr[y][x]);

  // check if we have reached the edge of the array
  // in the current direction
  if (
    (direction === right && x === cols - 1) ||
    (direction === down && y === rows - 1) ||
    (direction === left && x === 0) ||
    (direction === up && y === 0)
  ) {
    // if we have reached the edge, change direction
    // by turning clockwise
    if (direction === right) direction = down;
    else if (direction === down) direction = left;
    else if (direction === left) direction = up;
    else if (direction === up) direction = right;
  }

  // move to the next element in the current direction
  x += direction.x;
  y += direction.y;
}

// print the spiral array
console.log(spiral);
