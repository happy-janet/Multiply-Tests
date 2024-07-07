import {assert} from 'chai';
import {multiply} from '../multiply.js';

describe ("multiply", () =>{
    it("multiply 1*1 to 1", () =>{
        assert.equal(multiply(1,1), 1)
    })
});
