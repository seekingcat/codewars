// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str) {
  let newArr = str.split('');
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == '9' && newArr[i - 1] == '7' && newArr[i + 1] == '7') {
      newArr.splice(i, 1);
    }
  }
  return newArr.join('');
}

// not my solution but this one uses a string method .replace() and regular expressions to solve the puzzle
// looks for occurence of 79 in the str, looks to see if that's followed by 9, searches globally
// if it's found, the string 79 is replaced by 7
// very clever

// function sevenAte9(str){
//     return str.replace(/79(?=7)/g, '7');
//   }
