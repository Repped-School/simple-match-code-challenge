// Code Challenge: Mathematical Operators

// COMPLETE the operations from the quiz here: https://forms.gle/wuDHTpDS9CjZaa5a7

// COMPLETE the operations from the quiz above this line

// INSTRUCTIONS:
// Complete each function and check the console to see if the test passes.

// Challenge 1:
// Create a function that takes two numbers as arguments and returns their sum.
// Example: addNumbers(5, 3) should return 8.

function addNumbers(a, b) {
  // Write your code here
}

// Challenge 2:
// Create a function that takes two numbers as arguments and returns their difference.
// Example: subtractNumbers(8, 3) should return 5.

function subtractNumbers(a, b) {
  // Write your code here
}

// Challenge 3:
// Create a function that takes two numbers as arguments and returns their product.
// Example: multiplyNumbers(4, 6) should return 24.

function multiplyNumbers(a, b) {
  // Write your code here
}

// Challenge 4:
// Create a function that takes two numbers as arguments and returns the result of dividing the first number by the second number.
// Example: divideNumbers(10, 2) should return 5.

function divideNumbers(a, b) {
  // Write your code here
}

// Challenge 5:
// Create a function that takes a number as an argument and returns its square.
// Example: calculateSquare(4) should return 16.

function calculateSquare(a) {
  // Write your code here
}

// Challenge 6:
// Create a function that takes a number as an argument and returns the square root of that number.
// Example: calculateSquareRoot(16) should return 4.

function calculateSquareRoot(a) {
  // Write your code here
}

// Challenge 7:
// Create a function that takes an initial value and increments it by a given number using compound assignment.
// Example: incrementBy(5, 3) should return 8.

function incrementBy(initialValue, increment) {
  // Write your code here
}

// Challenge 8:
// Create a function that takes an initial value and decrements it by a given number using compound assignment.
// Example: decrementBy(8, 3) should return 5.

function decrementBy(initialValue, decrement) {
  // Write your code here
}

// Challenge 9:
// Create a function that takes an initial value and multiplies it by a given number using compound assignment.
// Example: multiplyBy(4, 6) should return 24.

function multiplyBy(initialValue, multiplier) {
  // Write your code here
}

// Challenge 10:
// Create a function that takes an initial value and divides it by a given number using compound assignment.
// Example: divideBy(20, 5) should return 4.

function divideBy(initialValue, divisor) {
  // Write your code here
}

// *************************************************** //
// *************************************************** //
// ****** DO NOT CHANGE CODE BELOW THIS LINE ********* //
// *************************************************** //
// *************************************************** //

// Code Challenge: Mathematical Operators

// Challenge 1:
function testAddNumbers() {
  const result = addNumbers(5, 3);
  console.log(
    result === 8 ? "Challenge 1: Test Passed" : "Challenge 1: Test Failed"
  );
}

// Challenge 2:
function testSubtractNumbers() {
  const result = subtractNumbers(8, 3);
  console.log(
    result === 5 ? "Challenge 2: Test Passed" : "Challenge 2: Test Failed"
  );
}

// Challenge 3:
function testMultiplyNumbers() {
  const result = multiplyNumbers(4, 6);
  console.log(
    result === 24 ? "Challenge 3: Test Passed" : "Challenge 3: Test Failed"
  );
}

// Challenge 4:
function testDivideNumbers() {
  const result = divideNumbers(10, 2);
  console.log(
    result === 5 ? "Challenge 4: Test Passed" : "Challenge 4: Test Failed"
  );
}

// Challenge 5:
function testCalculateSquare() {
  const result = calculateSquare(4);
  console.log(
    result === 16 ? "Challenge 5: Test Passed" : "Challenge 5: Test Failed"
  );
}

// Challenge 6:
function testCalculateSquareRoot() {
  const result = calculateSquareRoot(16);
  console.log(
    result === 4 ? "Challenge 6: Test Passed" : "Challenge 6: Test Failed"
  );
}

// Challenge 7:
function testIncrementBy() {
  let value = 5;
  console.log(
    incrementBy(value, 3) === 8
      ? "Challenge 7: Test Passed"
      : "Challenge 7: Test Failed"
  );
}

// Challenge 8:
function testDecrementBy() {
  let value = 8;
  console.log(
    decrementBy(value, 3) === 5
      ? "Challenge 8: Test Passed"
      : "Challenge 8: Test Failed"
  );
}

// Challenge 9:
function testMultiplyBy() {
  let value = 4;
  console.log(
    multiplyBy(value, 6) === 24
      ? "Challenge 9: Test Passed"
      : "Challenge 9: Test Failed"
  );
}

// Challenge 10:
function testDivideBy() {
  let value = 20;
  console.log(
    divideBy(value, 5) === 4
      ? "Challenge 10: Test Passed"
      : "Challenge 10: Test Failed"
  );
}

// Run the tests
testAddNumbers();
testSubtractNumbers();
testMultiplyNumbers();
testDivideNumbers();
testCalculateSquare();
testCalculateSquareRoot();
testIncrementBy();
testDecrementBy();
testMultiplyBy();
testDivideBy();
