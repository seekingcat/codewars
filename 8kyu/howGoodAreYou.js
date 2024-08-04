// You receive an array with your peers' test scores. Now calculate the average and compare your score!

function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((acc, c) => acc + c) / classPoints.length
  );
}
