var wordPattern = function(pattern, s) {
  let spl = s.split(" ");
  if(spl.length != pattern.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < spl.length; i++){
    let curr_pattern = pattern[i];
    let curr_word = spl[i];
    if(!obj[curr_pattern]){ 
        //before adding a new property, we need to check if the value is already present in the object
        //to handle corner cases like, pattern being abba, and string being dog dog dog dog
      if (Object.values(obj).includes(curr_word)){
        return false;
      }
      obj[curr_pattern] = curr_word;
    }
    else {
      if (obj[curr_pattern] != curr_word){
        return false;
      }
    }
  }
}