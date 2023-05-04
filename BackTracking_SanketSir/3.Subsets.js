function subsetsBackTrack(arr, temp, i) {
  if (i == arr.length) {
    console.log(temp);
    return;
  }
  temp.push(arr[i]); // include
  subsetsBackTrack(arr, temp, i + 1);
  temp.pop(); // exclude
  subsetsBackTrack(arr, temp, i + 1);
}

subsetsBackTrack([1, 2, 3], [], 0);
