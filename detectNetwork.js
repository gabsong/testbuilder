// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  const prefixOne = cardNumber[0];
  const prefixTwo = cardNumber.substring(0, 2);
  const prefixThree = cardNumber.substring(0, 3);
  const prefixFour = cardNumber.substring(0, 4);
  const prefixSix = cardNumber.substring(0, 6);
  const digits = cardNumber.length;

  function betweenInclusive(numInt, lowerBound, upperBound) {
    return numInt >= lowerBound && numInt <= upperBound;
  }

  if (
    prefixTwo === '38' || prefixTwo === '39'
    && digits === 14
    ) {
    return "Diner's Club";

  } else if (
    prefixTwo === '34' || prefixTwo === '37'
    && digits === 15
    ) {
    return 'American Express';

  } else if (
    betweenInclusive(parseInt(prefixTwo), 51, 55)
    && digits === 16
    ) {
    return 'MasterCard';

  } else if (
    prefixFour === '6011'
    || betweenInclusive(parseInt(prefixThree), 644, 649)
    || prefixTwo === '65'
    && (digits === 16 || digits === 19)
    ) {
    return 'Discover';

  } else if (
    ['5018', '5020', '5038', '6304'].indexOf(prefixFour) !== -1
    && betweenInclusive(digits, 12, 19)
    ) {
    return 'Maestro';

  } else if (
    ['4903', '4905', '4911', '4936', '6333', '6759'].indexOf(prefixFour) !== -1
    || ['564182', '633110'].indexOf(prefixSix) !== -1
    && [16, 18, 19].indexOf(digits) !== -1
    ) {
    return 'Switch';

  } else if (
    betweenInclusive(parseInt(prefixSix), 622126, 622925)
    || betweenInclusive(parseInt(prefixThree), 624, 626)
    || betweenInclusive(parseInt(prefixFour), 6282, 6288)
    && betweenInclusive(digits, 16, 19)
    ) {
    return 'China UnionPay';

  } else if (prefixOne === '4' && [13, 16, 19].indexOf(digits) !== -1) {
    return 'Visa';
  }

};
