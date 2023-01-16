const fibonacci = function (value) {
  const fibNumber = parseInt(value);
  let fibArray = [0, 1];

  if (fibNumber < 0) {
    return "OOPS"
  }

  for (let i = 1; i < fibNumber; i++) {
    nextNumber = fibArray.slice(-1)[0] + fibArray.slice(-2)[0]
    fibArray.push(nextNumber)
  }
  return fibArray.slice(-1)[0];
};

// Do not edit below this line
module.exports = fibonacci;
