const palindromes = function (string) {
    let newString = string.toLowerCase();

    if(newString[newString.length - 1] === '.' || newString[newString.length - 1] === '!') {
        newString = newString.slice(0, newString.length - 1);
    }

    let reverse = ``;
    for(let i = newString.length - 1; i >= 0; i--) {
        reverse = reverse + newString[i];
     }

    let comp1 = Array.from(newString);
    let comp2 = Array.from(reverse);

    let newComp1 = comp1.filter(item => item != ' ');
    let newComp2 = comp2.filter(item => item != ' ');
    let final1 = newComp1.filter(item => item != ',');
    let final2 = newComp2.filter(item => item != ',');

    if(final1.join('') === final2.join('')) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
