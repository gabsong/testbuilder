// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  const prefix = cardNumber.substring(0,2);
  const digits = cardNumber.length;
  let network = '';
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16
  if (prefix === '38' || prefix === '39' && digits === 14) {
    network = "Diner's Club";
  } else if (prefix === '34' || prefix === '37' && digits === 15) {
    network = 'American Express';
  } else if (prefix[0] === '4' && [13, 16, 19].indexOf(digits) !== -1) {
    network = 'Visa';
  } else if (['51', '52', '53', '54', '55'].indexOf(prefix) !== -1 && digits === 16) {
    network = 'MasterCard';
  }

  return network;
};
