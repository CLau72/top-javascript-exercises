const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(values) {
  let sum = 0;
	for (i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
};

const multiply = function(values) {
  let product = 1;
  for (i = 0; i < values.length; i++) {
    product *= values[i];
  }
  return product;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let factorial = 1
  for (i = a; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
