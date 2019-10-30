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

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5434567890123456')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5534567890123456')).to.equal('MasterCard');
  });

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  const prefixes = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  const lengths = [16, 19];
  const generator = '1234567890123456789';

  for (let prefix of prefixes) {
    for (let length of lengths) {
      it(`has a prefix of ${prefix} and a length of ${length}`, () => {
        const cardNumber = prefix + generator.substring(prefix.length, length);
        expect(detectNetwork(cardNumber)).to.equal('Discover');
      });
    }
  }

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  const prefixes = ['5018', '5020', '5038', '6304'];
  const generator = '1234567890123456789';

  for (let prefix of prefixes) {
    for (let j = 12; j <= 19; j++) {
      it(`has a prefix of ${prefix} and a length of ${j}`, () => {
        const cardNumber = prefix + generator.substring(prefix.length, j);
        expect(detectNetwork(cardNumber)).to.equal('Maestro');
      });
    }
  }

});

describe('Switch', () => {
  let expect = chai.expect;
  const prefixes = ['4903', '4905', '4911', '4936', '6333', '6759', '564182', '633110'];
  const lengths = [16, 18, 19];
  const generator = '1234567890123456789';

  for (let prefix of prefixes) {
    for (let length of lengths) {
      it(`has a prefix of ${prefix} and a length of ${length}`, () => {
        const cardNumber = prefix + generator.substring(prefix.length, length);
        expect(detectNetwork(cardNumber)).to.equal('Switch');
      });
    }
  }

});

describe('China UnionPay', () => {
  let expect = chai.expect;
  const generator = '1234567890123456789';

  for (let i = 622126; i <= 622925; i++) {
    for (let j = 16; j <= 19; j++) {
      it(`has a prefix of ${i} and a length of ${j}`, () => {
        const cardNumber = (i).toString() + generator.substring(6, j);
        expect(detectNetwork(cardNumber)).to.equal('China UnionPay');
      });
    }
  }

  for (let i = 624; i <= 626; i++) {
    for (let j = 16; j <= 19; j++) {
      it(`has a prefix of ${i} and a length of ${j}`, () => {
        const cardNumber = (i).toString() + generator.substring(3, j);
        expect(detectNetwork(cardNumber)).to.equal('China UnionPay');
      });
    }
  }

  for (let i = 6282; i <= 6288; i++) {
    for (let j = 16; j <= 19; j++) {
      it(`has a prefix of ${i} and a length of ${j}`, () => {
        const cardNumber = (i).toString() + generator.substring(4, j);
        expect(detectNetwork(cardNumber)).to.equal('China UnionPay');
      });
    }
  }

});