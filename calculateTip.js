function calculateFoodTotal(food, tip) {
    tipPercentage = tip / 100;
    tipAmount = food * tipPercentage;
    total = food + tipAmount;
    return total;
}

console.log(calculateFoodTotal(100, 20))