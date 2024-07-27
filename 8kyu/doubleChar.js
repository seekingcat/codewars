// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  return str
    .split('')
    .map((letter) => letter + letter)
    .join('');
}

// this is the optimal solution
