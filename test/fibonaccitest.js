// Janet Aballo, Mable Musimenta, Burani Patricia Patience

import {assert} from 'chai';
import {isFibonacciNumber, isPerfectSquare} from '../fibonacci.js';

// 0, 1, 2, 3, 5, 8, 13, 21, 34, 55

// fibonnaci formulas: (5n^2 + 4) and (5n^2 - 4)  => perfect square

describe ("perfect square", () =>{
	it("0 is a perfect square", () =>{
		assert.equal(isPerfectSquare(0), true)
	})
    it("4 is a perfect square", () =>{
        assert.equal(isPerfectSquare(4), true)
    })
		it("5 is not a perfect square", () =>{
        assert.equal(isPerfectSquare(5), false)
    })
		it("6 is not a perfect square", () =>{
        assert.equal(isPerfectSquare(6), false)
    })
		it("7 is a not a perfect square", () =>{
        assert.equal(isPerfectSquare(7), false)
    })
		it("9 is a perfect square", () =>{
        assert.equal(isPerfectSquare(9), true)
    })
});

describe ("fibonacci", () =>{
	const fibonacciNumbers = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];
	for(let i = 0; i < fibonacciNumbers.length; i++){
		it(`fibonacci(${i}) is ${fibonacciNumbers[i]}`, () =>{
			assert.equal(isFibonacciNumber(fibonacciNumbers[i]), true)
		})
	}

	const notFibonacciNumbers = [4, 6, 7, 9, 10, 11, 12, 14, 15, 16];
	for(let i = 0; i < notFibonacciNumbers.length; i++){
		it(`fibonacci(${i}) is not ${notFibonacciNumbers[i]}`, () =>{
			assert.equal(isFibonacciNumber(notFibonacciNumbers[i]), false)
		})
	}
});
