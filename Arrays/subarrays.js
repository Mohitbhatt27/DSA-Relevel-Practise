function subarrays(arr) {
  let sub = [];
  let start = 0;
  let end = 0;

  for (let start = 0; start < arr.length; start++) {
    let str = '';
    for (let end = 0; end < arr.length; end++) {
      str += arr[end] + ' ';
      console.log(str);
    }
  }
}
let arr = [1, 2, 3, 4];
subarrays(arr);
