import {assert} from 'chai';
import {multiply} from '../multiply.js';

describe ("multiply", () =>{
    it("multiply 1*1 to 1", () =>{
        assert.equal(multiply(1,1), 1)
    })
    it("multiply 2*2 to 4", () =>{
        assert.equal(multiply(2,2), 4)
    })
    it("multiply 3*3 to 9", () =>{
        assert.equal(multiply(3,3), 9)
    })
});

