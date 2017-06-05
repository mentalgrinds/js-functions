/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(num) {
  return num.toString();
}


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(num) {
  return num + 1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(num) {
  return num - 1;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add(x, y) {
  return x + y;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract(x, y) {
  return x - y;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(x, y) {
  return x * y;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide(x, y) {
  return x/y;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(num) {
  return num**2;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(op, x, y) {
  var res;
  var output;
  switch (op) {
    case 'add':
      res = add(x, y);
      output = `${x} + ${y} = ${res}`;
      break;
    case 'subtract':
      res = subtract(x, y);
      output = `${x} - ${y} = ${res}`;
      break;
    case 'multiply':
      res = multiply(x, y);
      output = `${x} * ${y} = ${res}`;
      break;
    case 'divide':
      res = divide(x, y);
      output = `${x} / ${y} = ${res}`;
      break;
    default:
  }

  console.log(output);
  return res;
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a, b) {
  return a > b;
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan(a, b) {
  return a < b;
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a, b) {
  return a === b;
}


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(a, b) {
  if (a <= b) {
    return a;
  } else {
    return b;
  }
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(a) {
  return a % 2 === 0;
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(a) {
  return a % 2 !== 0;
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score, total) {
  var percent = score / total;

  console.log('percent ' + percent);

  // switch (true) {
  //   case (percent >= 0.9 && percent <= 1):
  //     return 'A';
  //     break;
  //   case (percent >= 0.8 && percent < 0.9):
  //     return 'B';
  //     break;
  //   case (percent >= 0.7 && percent < 0.8):
  //     return 'C';
  //     break;
  //   case (percent >= 0.6 && percent < 0.7):
  //     return 'D';
  //     break;
  //   case (percent >= 0 && percent < 0.6):
  //     return 'F';
  //     break;
  //   default:
  //     return percent + ' is not valid';
  // }

  if (percent >= 0.9 && percent <= 1) {
    return 'A';
  } else if (percent >= 0.8 && percent <= 0.9) {
    return 'B';
  } else if (percent >= 0.7 && percent <= 0.8) {
    return 'C';
  } else if (percent >= 0.6 && percent <= 0.7) {
    return 'D';
  } else if (percent >= 0 && percent <= 0.6) {
    return 'F';
  } else {
    return percent + ' is not valid';
  }
}


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews(rest) {
  if (rest.reviews) {
    rest.reviews++;
  } else {
    rest.reviews = 1;
  }
  return rest;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(firstWord, secondWord) {
  // return firstWord + ' ' + secondWord;
  return `${firstWord} ${secondWord}`;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
function createCircle(radius) {
  var circle = {};
  circle.circumference = 2 * Math.PI * radius;
  circle.area = Math.PI * (radius ** 2);
  return circle;
}
