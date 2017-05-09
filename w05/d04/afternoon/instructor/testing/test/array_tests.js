var chai = require('chai');
var expect = chai.expect;

describe('Test suite for JS array methods', function() {
  before(function() {
    // console.log('I run before all the tests');
    var items = [];
  });

  beforeEach(function() {
    // console.log('I run before each test');
    items = ['John', 'Jane', 'Joe'];
  });

  after(function() {
    // console.log('After all tests have run');
  });

  afterEach(function() {
    // console.log('Runs after each individual test');
  });

  // array.length
  it('should return number of elements', function() {
    expect(items.length).to.equal(3);
  });

  // array.push
  it('should add element to array', function() {
    items.push('Jack');

    expect(items).to.include('Jack');
  });

  // array.shift
  it('should remove first item from array', function() {
    var first = items.shift();

    expect(first).to.equal('John');
    expect(items.length).to.equal(2);
    expect(items.indexOf('John')).to.not.be.above(-1);
  });

  // array.pop
  it('should remove last item from array', function() {
    var last = items.pop();

    expect(last).to.equal('Joe');
    expect(items.length).to.equal(2);
    expect(items.indexOf('Joe')).to.not.be.above(-1);
  });

  // array.map
  

  // array.filter


});
