// let person = {
//     name: 'piti',
//     shirt: 'none',
// };

// console.log(person.name);
// console.log(person.shirt)

// person.phone = '781-993-570';

// console.log(person);

const introducer = (name, shirt, assets, debt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: assets,
        debt: debt,
        netWorth: function () {
            return this.assets - this.debt;
        }
    };
    
    const intro = `Hi, my name is ${person.name}, my shirt is ${person.shirt} and my net worth is $${person.netWorth()}.`
    return intro;
};

console.log(introducer('piti', 'white', 1000000, 5000));
