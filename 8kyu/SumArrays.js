// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  'use strict';
  return numbers.length ? numbers.reduce((acc, c) => acc + c) : 0;
}

// or could just initialise the thing with 0

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
