//Find index of first elem >=x

function lowerBound(arr,x){
    let start = 0; let ans=-1;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((end-start) / 2 + start);
      if (arr[mid] == x) {
        //potential ans found
        ans=mid;
        end = mid-1;
      } else if (arr[mid] > x) {
        end = mid - 1;
      }
      else start = mid+1;
    }
    return ans;
}

let arr = [1,2,2,3,3,4,4,5];
console.log(lowerBound(arr,4));