// testing code goes here

'use strict';

const assert = require('chai').assert;
const myApp = require('../app/optimus.js');

describe("When optimus getPrime function is called ", function() {
  it("should return [2] for 2", function() {
    expect(myApp.getPrime(2)).toEqual(2);
  })
})
