// Write a solution to cleanup arrays. This can exist entirely in the squeakyClean function or contain multiple helper functions.

// Your squeakyClean function should accept an input array of values and return a new array with all empty strings, 0, null and undefined removed.

// MY SOLUTION
function squeakyClean(arr) {
  const newArr = arr.filter((item) => item != false && item != null);
  return newArr;
}

// BEST PRACTICE

function squeakyClean(arr) {
  return arr.filter(Boolean);
}
