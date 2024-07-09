import {assert} from 'chai';
import {getTaxValue} from '../calculator.js';

describe ("calculator", () =>{
    it("tax Value of 10000 is 0", () =>{
        assert.equal(getTaxValue(10000), 0)
    });
    it("tax Value of 12000 is 2400", () =>{
        assert.equal(getTaxValue(12000), 2400)
    });
})