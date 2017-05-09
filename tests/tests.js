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
  it("should return [1,2,3,5,7] for 9", function() {
    expect(myApp.getPrimes(9)).toEqual([1,2,3,5,7]);
  })
  it("should return [1,2,3,5,7,11] for 12", function() {
    expect(myApp.getPrimes(12)).toEqual([1,2,3,5,7,11]);
  })
  it("should return [1,2,3,5,7,11,13,17,19] for 20", function() {
    expect(myApp.getPrimes(20)).toEqual([1,2,3,5,7,11,13,17,19]);
  })
  it("should return [1,2,3,5,7,11,13,17,19,23] for 25", function() {
    expect(myApp.getPrimes(25)).toEqual([1,2,3,5,7,11,13,17,19,23]);
  })
})
