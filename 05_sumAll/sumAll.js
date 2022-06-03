const sumAll = function(a, b) {
    let sum = 0;
    for(let i = b; i > a; i--) {
        sum += i;
    }
    return sum + a;
};

// Do not edit below this line
module.exports = sumAll;
