
export function isPerfectSquare(a){
	const sr = Math.sqrt(a);
	return sr % 1 === 0;
}

// sqrt(4) = 2
// sqrt(5) = 2.23606797749979
// sqrt(6) = 2.449489742783178
// sqrt(9) = 3

// fibonacci formulas: (5n^2 + 4) OR (5n^2 - 4)  => perfect square
export function isFibonacciNumber(a){
	return isPerfectSquare(5*a*a + 4) || isPerfectSquare(5*a*a - 4);
}
