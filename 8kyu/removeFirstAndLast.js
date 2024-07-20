// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str){
     let strArr = str.split('')
     strArr.pop()
     strArr.shift()
     str = strArr.join('')
     return str
   };

//    This is more optimal
//    function removeChar(str) {
//     return str.slice(1, -1);
//   }