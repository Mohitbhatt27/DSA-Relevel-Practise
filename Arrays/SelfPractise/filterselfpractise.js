let cities = [
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 },
  { name: 'Chicago', population: 2695598 },
  { name: 'Houston', population: 2099451 },
  { name: 'Philadelphia', population: 1526006 },
];

//print only those which have population>3000000
let bigCities = cities.filter((city) => city.population > 3000000);
console.log(bigCities);

//write a program where we have to find and return those elements whose square is greater than 87.
let arr = [99, 83, 2, 7, 19, 8, 34];
let squareGreater = arr.filter((square) => square * square > 87);
console.log(squareGreater);

//Filtering Out all Small Values
let arr1 = [38, 83, 2, 7, 19, 8, 34];
let smallValues = arr1.filter((x) => x < 20);
console.log(smallValues);

//Find All the Prime Numbers in an Array
let arr2 = [-7, -5, -2, 2, 1, 3, 12, 14, 13, 15, 70, 17, 33, 25, 27, 30, 97];
let prime = arr2.filter((x) => {
  for (let i = 2; i * i <= x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
});
console.log(prime);
