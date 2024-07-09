import {assert} from 'chai';
import {getTaxValue} from '../calculator.js';

describe ("calculator", () =>{
    it("tax Value of 10000 is 0", () =>{
        assert.equal(getTaxValue(10000), 0)
    });
})