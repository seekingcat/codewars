function check(data) {
  let output = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      output.push('senior');
    } else output.push('open');
  }
  return output;
}

// optimal solution, I was trying to map but I didn't destructure each item in the map
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? 'Senior' : 'Open'
  );
}
