const ftoc = function(fValue) {
  return (fValue - 32) * (5 / 9);
};

const ctof = function(cValue) {
  return cValue * (9 / 5) + 32
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
