const getTheTitles = function(arr) {
    let titleArray = [];
    arr.forEach(book => titleArray.push(book.title));
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
