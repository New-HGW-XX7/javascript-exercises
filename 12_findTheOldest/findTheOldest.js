const findTheOldest = function(people) {
    const totalValue = people.reduce((total, item) => {
        if(item.yearOfDeath - item.yearOfBirth > total) total = item.yearOfDeath - item.yearOfBirth;
        return total;
    }, 0);
    let index;
    people.forEach(item => {
        if((item.yearOfDeath - item.yearOfBirth) === totalValue) index = people.indexOf(item);
    });
    return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;

