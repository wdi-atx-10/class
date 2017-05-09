var chai = require('chai');
var expect = chai.expect;

var Calculator = require('../calculator');
var calculator;

describe('Calculator Test Suite', function() {
  before(function() {
     calculator = new Calculator();
  });

  describe('Methods related to adding', function() {
    it('should return the sum', function() {
      var sum = calculator.add(2, 3);

      expect(sum).to.equal(5);
    });
  });

  describe('Methods related to subtracting', function() {

  });
});
