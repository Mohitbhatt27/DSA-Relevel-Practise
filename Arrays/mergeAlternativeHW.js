function alternate(arr) {
    let result = [];
   
    
    let positves=arr.filter(elem=>elem>=0);
    let negatives=arr.filter(elem=>elem<0);
    let length=Math.min(positves.length,negatives.length);

    for (let i = 0; i < length; i++) {
        result.push(positves[i]);
        result.push(negatives[i]);
  }
  if(positves.length>negatives.length){
    //few positive elements are left
    for(let i=length; i<positves.length; i++){
        result.push(positves[i]);
    }
  }
  else if(negatives.length>positves.length){
    //few negative elements are left
    for(let i=length; i<negatives.length; i++){
        result.push(negatives[i]);
    }
  }
  return result;
}
  console.log(alternate([9, 18, -1, 0, -3, 2,-1,-4,-9])); 