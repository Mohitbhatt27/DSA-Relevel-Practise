/**
 * Six friends go on a trip and are looking for accommodation. After looking for hours, they find a hotel which offers two types of rooms — double rooms and triple rooms. A double room costs Rs. XX, while a triple room costs Rs. YY. The friends can either get three double rooms or get two triple rooms. Find the minimum amount they will have to pay to accommodate all six of them. Input Format The first line contains a single integer TT - the number of test cases. Then the test cases follow. The first and only line of each test case contains two integers XX and YY - the cost of a double room and the cost of a triple room. Output Format For each testcase, output the minimum amount required to accommodate all the six friends. Constraints 1 ≤ T ≤ 1001≤T≤100 1 ≤ X

Sample 1:
Input
3
10 15
6 8
4 8

Output
30
16
12
Sample 2:
Input
3
40 30
60 80
40 80
Output
60
160
120

Sample 3:
Input
4
80 90
38 50
50 80
100 150

Output
180
100
150
300

Sample 4:
Input
5
750 900
348 530
500 840
1000 1500
2000 3000

Output
1800
1044
1500
3000
6000

Sample 5:
Input
7
7050 9900
3408 5030
5070 8490
10080 15090
20800 30900
7657 9798
7900 3434

Output
19800
10060
15210
30180
61800
19596
6868

Explanation:
Test case 1: The friends can take three double rooms and thus pay a total of Rs. 30.
Test case 2: The friends can take two triple rooms and thus pay a total of Rs. 16.
Test case 3: The friends can take three double rooms and thus pay a total of Rs. 12.
 */

function minCost(T, cases) {
  let result = [];
  for (let i = 0; i < T; i++) {
    let X = cases[i][0];
    let Y = cases[i][1];
    result.push(Math.min(3 * X, 2 * Y));
  }
  return result;
}

console.log(
  minCost(3, [
    [10, 15],
    [6, 8],
    [4, 8],
  ])
);

console.log(
  minCost(3, [
    [40, 30],
    [60, 80],
    [40, 80],
  ])
);

console.log(
  minCost(4, [
    [80, 90],
    [38, 50],
    [50, 80],
    [100, 150],
  ])
);

console.log(
  minCost(5, [
    [750, 900],
    [348, 530],
    [500, 840],
    [1000, 1500],
    [2000, 3000],
  ])
);

console.log(
  minCost(7, [
    [7050, 9900],
    [3408, 5030],
    [5070, 8490],
    [10080, 15090],
    [20800, 30900],
    [7657, 9798],
    [7900, 3434],
  ])
);

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');
  // press ctrl+d in the terminal and then your main function will be executed automatically
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function readNumberArray() {
  let input = readLine(); // 1 2 3 4 5
  input = input.split(' '); // ['1', '2', '3', '4', '5']
  input = input.map((value) => Number(value)); // [1,2,3,4,5]
  return input;
}

function readNumberArrayByLine(noOfLines) {
  let result = [];
  for (let i = 0; i < noOfLines; i++) {
    result.push(Number(readLine()));
  }
  return result;
}

function readStringArray() {
  let input = readLine();
  return input.split(' ');
}

function readNumber() {
  return Number(readLine());
}

function readPairOfNumbers() {
  let input = readLine();
  input = input.split(' ').map((value) => Number(value));
  return input;
}

function main() {
  let testcases = Number(readLine());
  let result = [];
  for (let i = 0; i < testcases; i++) {
    [x, y] = readPairOfNumbers();
    x = Number(x);
    y = Number(y);
    result.push(Math.min(3 * x, 2 * y));
  }
    console.log(result.join('\n'));
}
