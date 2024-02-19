const fruits = ['pear', 'blueberry', 'banana', 'apple', 'strawberry'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

for (const fruit of fruits) {
	console.log(fruit);
}

const numbers = [1, 2, 3, 4, 5, 6];

let result = []

for (const number of numbers) {
	result.push(number * 2);
}

console.log(result);

const double = (numbers) =>  {
    let result = [];
    for (const number of numbers) {
        result.push(number ** 2);
    }
    return result;
}

console.log(double([1, 2, 3, 4, 5, 6]))