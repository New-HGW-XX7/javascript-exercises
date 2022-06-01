const reverseString = function(string) {
    const array = string.split("");
    array.reverse();
    const output = array.join("");
    return output;
};

// Do not edit below this line
module.exports = reverseString;
