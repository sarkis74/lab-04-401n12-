'use strict';

const Buf = require('../loop.js');

describe('#loop  TDD testing for buffer functions', () => {
    beforeAll(() => {
        console.log('Initialized all tests');
    });

    afterAll(() => {
        console.log('Completed all tests');
    });

//Sarkis - Here will go buffer tests
    it('Makes sure array length is 3 and data type is array', () => {
        let NewBuf = new Buf('John', 'Jane', 'Sue');
        let myArr = NewBuf.buffer([]);
        console.log(myArr.length);
        expect(myArr.length).toEqual(3);
        expect(Array.isArray(myArr)).toEqual(true);
        expect(typeof myArr.toString()).toEqual('string'); //Since fs write file converts buffers automatically to strings must add 'toString() to mimic fs method
    });
});
