function sum(a, b) {
	return a + b;
}

// arrow function with implicit return
const sumArrow = (a, b) => a + b;

// 
function calculateFoodTotal(food, tip) {
	tipPercentage = tip / 100;
	tipAmount = food * tipPercentage;
	total = sumArrow(food, tipAmount);
	return total;
}

console.log(calculateFoodTotal(100, 20));
