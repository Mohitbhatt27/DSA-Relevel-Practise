```const obj = {
    a: 2,
    b: 1,
    c: 4,
    d: 0,
    e: 6,
};

const arr = Object.entries(obj);
arr.sort((a, b) => a[1] - b[1]); // sorting on based on value
// arr.sort((a, b) => a[0] - b[0]);  sorting on based on key
console.log(arr);
```

