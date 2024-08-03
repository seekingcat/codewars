// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  if (arr.length === 1) {
    return [arr[0], arr[0]];
  } else return [Math.min(...arr), Math.max(...arr)];
}

//  don't need the conditional lolz

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
