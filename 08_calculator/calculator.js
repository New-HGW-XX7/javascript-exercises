const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = 0;
  array.forEach(number => total += number);
  return total;
};

const multiply = function(array) {
  let total = array[0];
  for(let i = 1; i < array.length; i++) {
    total = total * array[i];
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	let total;
  let innerResult;
  if(n === 0 || n === 1) {
    total = 1;
  } else {
    let arr = [];
    for(let i = 1; i <= n; i++) {
      arr.push(i);
    }

    total = arr[0];
    for(let i = 1; i < arr.length; i++) {
    total = total * arr[i];
    }
  }
  return total;
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
