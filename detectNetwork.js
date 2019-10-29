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
  if (prefix === '38' || prefix === '39' && digits === 14) {
    network = "Diner's Club";
  } else if (prefix === '34' || prefix === '37' && digits === 15) {
    network = 'American Express';
  }

  return network;
};


