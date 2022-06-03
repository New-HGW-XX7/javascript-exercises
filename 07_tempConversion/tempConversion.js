const ftoc = function(fValue) {
  let output = (fValue - 32) * (5 / 9);
  return Math.round(output * 10) / 10;
};

const ctof = function(cValue) {
  let output = cValue * (9 / 5) + 32;
  return Math.round(output * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
