function bubbleSort(arr, k) {
  let n = arr.length;
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j]['salary'] > arr[j + 1]['salary']) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
  }
  return arr[n - k]['name'];
}
let arr = [
  { name: 'Ram', salary: 100000 },
  { name: 'Ramesh', salary: 10000 },
  { name: 'Rakesh', salary: 500000 },
  { name: 'Riya', salary: 650000 },
  { name: 'Rithik', salary: 45000 },
  { name: 'Ritesh', salary: 230000 },
];
let k = 2;
console.log(bubbleSort(arr, k));
