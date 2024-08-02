// Given an array of numbers, return the difference between the largest and smallest values.

function betweenExtremes(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1] - numbers[0];
}

//optimal solution

function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}
