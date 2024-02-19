result = 0;

const howManyLetters = () => {
    const phrase = 'pitiajti is the greatest company on earth.';
    for (letter in phrase) {
        console.log(Number(letter) + 1);
    }
    for (index in phrase) {
        console.log(Number(index) + 1);
        result = Number(index) + 1;
    }
    return {result};
}

console.log(howManyLetters());

const sumArray = (numbers) => {
    result = 0;
    for (const number of numbers) {
        result += number;
    }
    return {result: result};
}

console.log(sumArray([1, 2, 3, 4]));

const max = (numbers) => {
    maxNum = 0;
    for (number of numbers) {
        if (number > maxNum) {
            maxNum = number;
        }
    }
    return maxNum;
}

console.log(max([1, 2, 7, 4, 5]));
