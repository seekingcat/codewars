// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

// my solution

function differenceInAges(ages) {
  let sorted = ages.sort((a, b) => a - b);
  return [
    sorted[0],
    sorted[sorted.length - 1],
    sorted[sorted.length - 1] - sorted[0],
  ];
}

// clever solution using spread

function differenceInAges(ages) {
  let max = Math.max(...ages),
    min = Math.min(...ages);
  diff = max - min;

  return [min, max, diff];
}
