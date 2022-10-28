const sumAll = function (a, b) {
  let sum = 0;
  let start = 0;
  let end = 0;

  if (typeof a === "number" && typeof b === "number") {
    if (a < b && a > 0) {
      start = a;
      end = b;
    } else if (b < a && b > 0) {
      start = b;
      end = a;
    } else {
        return "ERROR"
    }
  } else {
    return "ERROR";
  }
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
