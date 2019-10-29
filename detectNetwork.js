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
  const digits = cardNumber.length;

  if (prefixTwo === '38' || prefixTwo === '39' && digits === 14) {
    // Diner's Club
    return "Diner's Club";
  } else if (prefixTwo === '34' || prefixTwo === '37' && digits === 15) {
    // American Express
    return 'American Express';
  } else if (prefixOne === '4' && [13, 16, 19].indexOf(digits) !== -1) {
    // Visa
    return 'Visa';
  } else if (['51', '52', '53', '54', '55'].indexOf(prefixTwo) !== -1 && digits === 16) {
    // MasterCard
    return 'MasterCard';
  } else if (prefixFour === '6011' || ['644', '645', '646', '647', '648', '649'].indexOf(prefixThree) !== -1 || prefixTwo === '65' && (digits === 16 || digits === 19)) {
    // Discover
    return 'Discover';
  } else if (['5018', '5020', '5038', '6304'].indexOf(prefixFour) !== -1 && [12, 13, 14, 15, 16, 17, 18, 19].indexOf(digits) !== -1) {
    // Maestro
    return 'Maestro';
  }

};
