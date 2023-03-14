const key = Object.keys(obj).find(key => obj[key] === 'value2');
console.log(key);

const max = arr.reduce((a, b) => Math.max(a, b));