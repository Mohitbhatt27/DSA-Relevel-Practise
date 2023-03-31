// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

// Example 1:

// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3

var canCompleteCircuit = function (gas, cost) {
  let count = 0;
  let n = gas.length;
  let tank_capacity = 0;
  let flag = false;
  let start_of_tour = -1;
  let i = 0;

  // at max we can travel 2n times
  while (count < 2 * n) {

    if (i == start_of_tour) {
      //this condition will hit only when we have completed the tour
      return i;
    }
    // Adding the gas to the tank
    tank_capacity += gas[i];

    if (tank_capacity >= cost[i]) {
      //if we have enough tank capacity to travel to next station
      flag = true;

      //if we have not started the tour yet, let's start the tour
      if (start_of_tour == -1) {
        start_of_tour = i;
      }

      //now that we have travelled to next station, we need to reduce the tank capacity
      tank_capacity -= cost[i];

      //instead of i+1, we are doing (i+1)%n to handle the case when i is at the last station and it has to reach the 1st station
      i = (i + 1) % n;
      count++;

    } else {
      //if we don't have enough tank capacity to travel to next station, we need to reset the tank capacity and start the tour from next station
      flag = 0;
      tank_capacity = 0;
      i = (i + 1) % n;
      start_of_tour = -1;
      count++;
    }
  }
  return -1;
};
