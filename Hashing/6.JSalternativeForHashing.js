const map1 = new Map();

map1.set('a', 'Hello');
map1.set('b', 'World');
map1.set('c', '!');

console.log(map1.get('a'));
console.log(map1.get('b'));
console.log(map1.get('c'));

console.log(map1.size);

map1.delete('a');

console.log(map1.get('a'));

console.log(map1.size);