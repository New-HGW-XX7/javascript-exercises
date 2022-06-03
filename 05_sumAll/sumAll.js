const sumAll = function(a, b) {
    let sum = 0;
    let greaterNum;
    let smallerNum;

    if(a < 0 || typeof a !== "number" || b < 0 || typeof b !== "number") {
        return "ERROR";
    };

    if(b > a) {
         greaterNum = b;
         smallerNum = a;
    }
    else {
         greaterNum = a;
         smallerNum = b;
    }

    for(let i = greaterNum; i > smallerNum; i--) {
        sum += i;
    }
    return sum + smallerNum;
};

// Do not edit below this line
module.exports = sumAll;
