// testing code goes here

'use strict';

const assert = require('chai').assert;
const myApp = require('../app/optimus.js');

describe("When optimus getPrimes function is called ", function() {
  it("should return [1,2] for 2", function() {
    expect(myApp.getPrimes(2)).toEqual([1,2]);
  })
  it("should return [1,2,3] for 3", function() {
    expect(myApp.getPrimes(3)).toEqual([1,2,3]);
  })
  it("should return [1,2,3] for 4", function() {
    expect(myApp.getPrimes(4)).toEqual([1,2,3]);
  })
  it("should return [1,2,3,5] for 5", function() {
    expect(myApp.getPrimes(5)).toEqual([1,2,3,5]);
  })
})
