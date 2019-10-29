/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });

});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4234567890123') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4234567890123456') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });

});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5134567890123456')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5234567890123456')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5334567890123456')).to.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  // it('has a prefix of 54 and a length of 16', function() {
  //   detectNetwork('5434567890123456').should.equal('MasterCard');
  // });

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5434567890123456')).to.equal('MasterCard');
  });

  // it('has a prefix of 55 and a length of 16', function() {
  //   detectNetwork('5534567890123456').should.equal('MasterCard');
  // });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5534567890123456')).to.equal('MasterCard');
  });

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', () => {
    expect(detectNetwork('6011567890123456')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', () => {
    expect(detectNetwork('6011567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', () => {
    expect(detectNetwork('6444567890123456')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', () => {
    expect(detectNetwork('6444567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', () => {
    expect(detectNetwork('6454567890123456')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', () => {
    expect(detectNetwork('6454567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', () => {
    expect(detectNetwork('6464567890123456')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', () => {
    expect(detectNetwork('6464567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', () => {
    expect(detectNetwork('6474567890123456')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', () => {
    expect(detectNetwork('6474567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', () => {
    expect(detectNetwork('6484567890123456')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', () => {
    expect(detectNetwork('6484567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', () => {
    expect(detectNetwork('6494567890123456')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', () => {
    expect(detectNetwork('6494567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', () => {
    expect(detectNetwork('6534567890123456')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', () => {
    expect(detectNetwork('6534567890123456789')).to.equal('Discover');
  });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  it('has a prefix of 5018 and a length of 12', () => {
    expect(detectNetwork('501856789012')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', () => {
    expect(detectNetwork('5018567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', () => {
    expect(detectNetwork('50185678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', () => {
    expect(detectNetwork('501856789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', () => {
    expect(detectNetwork('5018567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', () => {
    expect(detectNetwork('50185678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', () => {
    expect(detectNetwork('501856789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', () => {
    expect(detectNetwork('5018567890123456789')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', () => {
    expect(detectNetwork('502056789012')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 13', () => {
    expect(detectNetwork('5020567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 14', () => {
    expect(detectNetwork('50205678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', () => {
    expect(detectNetwork('502056789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 16', () => {
    expect(detectNetwork('5020567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', () => {
    expect(detectNetwork('50205678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', () => {
    expect(detectNetwork('502056789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', () => {
    expect(detectNetwork('5020567890123456789')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', () => {
    expect(detectNetwork('503856789012')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', () => {
    expect(detectNetwork('5038567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', () => {
    expect(detectNetwork('50385678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', () => {
    expect(detectNetwork('503856789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', () => {
    expect(detectNetwork('5038567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', () => {
    expect(detectNetwork('50385678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', () => {
    expect(detectNetwork('503856789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', () => {
    expect(detectNetwork('5038567890123456789')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', () => {
    expect(detectNetwork('630456789012')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 13', () => {
    expect(detectNetwork('6304567890123')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', () => {
    expect(detectNetwork('63045678901234')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', () => {
    expect(detectNetwork('630456789012345')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', () => {
    expect(detectNetwork('6304567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', () => {
    expect(detectNetwork('63045678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', () => {
    expect(detectNetwork('630456789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', () => {
    expect(detectNetwork('6304567890123456789')).to.equal('Maestro');
  });

});

