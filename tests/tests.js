// testing code goes here

'use strict';

const assert = require('chai').assert;
const myApp = require('../app/optimus.js');

describe("When optimus getPrimes function is called ", function() {
  it("should return [1,2] for 2", function() {
    expect(myApp.getPrimes(2)).toEqual([1,2]);
  })
})
