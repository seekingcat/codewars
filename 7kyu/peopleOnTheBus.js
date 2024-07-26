// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).

var number = function (busStops) {
  let passengers = 0;
  busStops.map(([on, off]) => {
    passengers += on - off;
  });
  return passengers;
};

// optimal solution

const number = (busStops) =>
  busStops.reduce((rem, [on, off]) => rem + on - off, 0);
