let left = -1, right = -1; 

function dequeue(arr){
  arr[left] = undefined;
  left++;
}

function enqueue(arr,x){
  right++;
  arr[right]=x;
}

//when front == right, the queue is gets empty