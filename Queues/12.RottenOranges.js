class CQueue {
  constructor() {
    this.arr = [];
    this.front = 0;
  }

  isEmpty() {
    return this.front == this.arr.length;
  }

  enqueue(data) {
    /**
     * Time: O(1)
     */
    this.arr.push(data);
  }

  dequeue() {
    /**
     * Time: O(1)
     */
    if (this.isEmpty()) {
      console.log('Queue is empty, cannot delete from an empty queue');
      return;
    }
    this.front++;
  }

  getFront() {
    /**
     * Time: O(1)
     */
    if (this.arr.length == 0) {
      console.log('No element is present as the queue is empty');
      return;
    }
    return this.arr[this.front];
  }
}

var orangesRotting = function (grid) {
  let queue = new CQueue();
  let row = grid.length;
  let col = grid[0].length;
  let totalTime = 0;
  let freshOranges = 0;
  let visited = new Array(row).fill().map(() => new Array(col).fill(0));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 2) {
        // mark on visited array
        visited[i][j] = 2;
        //insert in queue, along with the time = 0
        queue.enqueue([i, j, 0]);
      }
      if (grid[i][j] == 1) {
        freshOranges++;
      }
    }
  }
  if (freshOranges == 0) return 0;
  if (queue.isEmpty()) return -1;

  while (!queue.isEmpty()) {
    let [i, j, time] = queue.getFront();
    queue.dequeue();

    // check for all 4 directions, if there is a fresh orange, mark it as rotten and insert in the queue

    // up
    if (i - 1 >= 0 && grid[i - 1][j] == 1 && visited[i - 1][j] != 2) {
      visited[i - 1][j] = 2;
      queue.enqueue([i - 1, j, time + 1]);
      freshOranges--;
    }
    // down
    if (i + 1 < row && grid[i + 1][j] == 1 && visited[i + 1][j] != 2) {
      visited[i + 1][j] = 2;
      queue.enqueue([i + 1, j, time + 1]);
      freshOranges--;
    }
    // left
    if (j - 1 >= 0 && grid[i][j - 1] == 1 && visited[i][j - 1] != 2) {
      visited[i][j - 1] = 2;
      queue.enqueue([i, j - 1, time + 1]);
      freshOranges--;
    }
    // right
    if (j + 1 < col && grid[i][j + 1] == 1 && visited[i][j + 1] != 2) {
      visited[i][j + 1] = 2;
      queue.enqueue([i, j + 1, time + 1]);
      freshOranges--;
    }
    if (time > totalTime) totalTime = time;
  }

// if still fresh oranges are left, return -1
  if (freshOranges > 0) return -1;

  return totalTime;
};

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

console.log(orangesRotting(grid));
