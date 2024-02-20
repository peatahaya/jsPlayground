const letters = {
	h: 1,
	a: 2,
};
if ('h' in letters) {
	letters.h++;
}
console.log(letters.h);

function countLetters(letters) {
	const lettersObject = {};
	for (letter of letters) {
		if (letter in lettersObject) {
			lettersObject[letter]++;
		} else {
			lettersObject[letter] = 1;
		}
	}
	return lettersObject;
}

console.log(countLetters('haha lol xd'));

const wordsCount = phrase => {
	let words = [];
	let wordsObject = {};
	words = phrase.split(' ');
	for (word of words) {
		if (word in wordsObject) {
			wordsObject[word]++;
		} else {
			wordsObject[word] = 1;
		}
	}
	return wordsObject;
};

console.log(wordsCount('hi, piti lol lol haha piti xd'));

function wordFrequency (phrase) {
	const words = phrase.split();
	return countLetters(words);
};

console.log(wordFrequency('haha lol piti piti'));
