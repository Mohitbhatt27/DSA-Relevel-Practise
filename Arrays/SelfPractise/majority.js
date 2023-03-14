/**
 * Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the array.
 */
function majorityElement(a, size)
    {
        let obj={};
        for(let i=0; i<size; i++){
            if(obj[a[i]]){
                obj[a[i]]++;
            }
            else{
                obj[a[i]]=1;
            }
        }
        let entries=Object.entries(obj);
        console.log(entries);
        for(let i=0; i<entries.length; i++){
            if(entries[i][1]>size/2){
                return entries[i][0];
            }
        }
        return -1;
    };
    console.log(majorityElement([3,1,3,3,2],5));