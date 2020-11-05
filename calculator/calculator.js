function add (x,y) {
	return x + y;
}

function subtract (x,y) {
	return x - y;
}

function sum (arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

function multiply (arr) {
	let total = 1;
	for (let i = 0; i < arr.length; i++) {
		total *= arr[i];
	}
	return total;
}

function power(x, y) {
	return x ** y;
}

function factorial(num) {
	let total = num;
	if (num === 0 || num === 1) {
		return 1;
	}
	while (num > 1) {
		num--;
		total *= num;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}